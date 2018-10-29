import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View, Text } from 'react-native'
import { Overlay } from '@components'

import { spacings } from '@stylesheets'

import screens from '@screens/list'

import Word from './Word'

import styles from './styles'

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min

const DURATION_PER_HIGHLIGHTED_WORD = 750
const TOTAL_DURATION = 10

const MIN_LEFT_POSITION = spacings.XXHUGE * -1 + 24
const MAX_LEFT_POSITION = spacings.XXHUGE

class PlayBattle extends React.PureComponent {
  static screenOptions = {
    id: screens.PLAY_BATTLE,
  }

  static entities = ['words']

  static getRandomLeftPosition() {
    return getRandomNumber(MIN_LEFT_POSITION, MAX_LEFT_POSITION)
  }

  constructor(props) {
    super(props)

    this.state = {
      words: [],
      highlightedWords: [],
      remainingSeconds: TOTAL_DURATION,
    }

    this.handlePressWord = this.handlePressWord.bind(this)
    this.finish = this.finish.bind(this)
    this.decreaseDuration = this.decreaseDuration.bind(this)
    this.renderWord = this.renderWord.bind(this)
    this.highlightRandomWords = this.highlightRandomWords.bind(this)
    this.highlightRandomWord = this.highlightRandomWord.bind(this)
  }

  componentDidMount() {
    this.wordsHasBeenFilled = false
  }

  componentWillUpdate(newProps) {
    const { isFetching, words, navigation } = newProps

    if (isFetching || this.wordsHasBeenFilled) {
      return false
    }

    this.wordsHasBeenFilled = true

    this.wordPositions = {}
    this.orderedWords = []

    return this.setState({ words }, () => setTimeout(async () => { // eslint-disable-line react/no-will-update-set-state,max-len
      this.orderedWords = await this.highlightRandomWords(words)

      this.durationInterval = setInterval(this.decreaseDuration, 1000)

      setTimeout(() => {
        clearInterval(this.durationInterval)

        if (navigation.isFocused()) {
          this.finish()
        }
      }, (TOTAL_DURATION + 1) * 1000)
    }, 1000))
  }

  componentWillUnmount() {
    if (this.durationInterval) {
      clearInterval(this.durationInterval)
    }
  }

  finish() {
    const { onFinish } = this.props

    const stringedHiglightedWords = JSON.stringify(this.state.highlightedWords)
    const stringedOrderedHiglightedWords = JSON.stringify(this.orderedWords)

    return onFinish(stringedHiglightedWords === stringedOrderedHiglightedWords)
  }

  decreaseDuration() {
    const { remainingSeconds } = this.state

    return this.setState({
      remainingSeconds: remainingSeconds - 1,
    })
  }

  handlePressWord(word) {
    if (this.state.words.length !== this.orderedWords.length) {
      return null
    }

    return this.setState(state => ({
      highlightedWords: [
        ...state.highlightedWords,
        word,
      ],
    }), () => {
      if (this.state.highlightedWords.length === this.orderedWords.length) {
        this.finish()
      }
    })
  }

  async highlightRandomWords(rawRemainingWords) {
    return new Promise(async (resolve) => {
      const orderedWords = []
      let remainingWords = rawRemainingWords

      while (remainingWords.length > 0) {
        remainingWords = await this.highlightRandomWord(remainingWords, orderedWords) // eslint-disable-line no-await-in-loop,max-len
      }

      this.setState({
        highlightedWords: [],
      }, () => resolve(orderedWords))
    })
  }

  async highlightRandomWord(remainingWords, orderedWords) {
    return new Promise(async (resolve) => {
      const highlightedWordIndex = getRandomNumber(0, remainingWords.length - 1)
      const highlightedWord = remainingWords[highlightedWordIndex]

      orderedWords.push(highlightedWord)

      return this.setState({
        highlightedWords: [highlightedWord],
      }, () => setTimeout(() => (
        resolve(remainingWords.filter((_, wordIndex) => wordIndex !== highlightedWordIndex))
      ), DURATION_PER_HIGHLIGHTED_WORD))
    })
  }

  renderWord(word) {
    const { highlightedWords } = this.state

    if (!this.wordPositions[word]) {
      this.wordPositions[word] = PlayBattle.getRandomLeftPosition()
    }

    return (
      <View
        key={word}
        style={{ left: this.wordPositions[word] }}
      >
        <Word
          key={word}
          isHighlighted={highlightedWords.includes(word)}
          onPress={this.handlePressWord}
        >
          {word}
        </Word>
      </View>
    )
  }

  render() {
    const { words, remainingSeconds } = this.state
    const { isFetching } = this.props

    if (isFetching) {
      return null
    }

    return (
      <Overlay
        renderContent={() => (
          <React.Fragment>
            <View style={styles.timerContainer}>
              <Text style={styles.timer}>
                {`00:${numeral(remainingSeconds).format('00')}`}
              </Text>
            </View>

            <View style={styles.wordsContainer}>
              {words.map(this.renderWord)}
            </View>
          </React.Fragment>
        )}
      />
    )
  }
}

PlayBattle.propTypes = {
  words: PropTypes.array, // eslint-disable-line react/no-unused-prop-types
  isFetching: PropTypes.bool,
  onFinish: PropTypes.func.isRequired,
}

PlayBattle.defaultProps = {
  words: [],
  isFetching: true,
}

export default PlayBattle

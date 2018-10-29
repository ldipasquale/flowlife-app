import React from 'react'
import PropTypes from 'prop-types'

import { View, Text } from 'react-native'
import { Overlay } from '@components'

import { spacings } from '@stylesheets'

import screens from '@screens/list'

import Word from './Word'

import styles from './styles'

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min

const DURATION_PER_HIGHLIGHTED_WORD = 250

const MIN_LEFT_POSITION = spacings.XXHUGE * -1 + 24
const MAX_LEFT_POSITION = spacings.XXHUGE

class PlayBattle extends React.PureComponent {
  static screenOptions = {
    id: screens.PLAY_BATTLE,
  }

  static getRandomLeftPosition() {
    return getRandomNumber(MIN_LEFT_POSITION, MAX_LEFT_POSITION)
  }

  constructor(props) { 
    super(props)

    this.state = {
      words: [],
      highlightedWords: [],
    }

    this.handlePressWord = this.handlePressWord.bind(this)
    this.checkIfWin = this.checkIfWin.bind(this)
    this.renderWord = this.renderWord.bind(this)
    this.highlightRandomWord = this.highlightRandomWord.bind(this)
  }

  componentDidMount() {
    const words = ['Literatura', 'Micrófono', 'Orientación']

    this.wordPositions = {}
    this.orderedHighlightedWords = []

    return this.setState({ words }, () => this.highlightRandomWord(words))
  }

  checkIfWin() {
    const { onWin } = this.props

    const stringedHiglightedWords = JSON.stringify(this.state.highlightedWords)
    const stringedOrderedHiglightedWords = JSON.stringify(this.orderedHighlightedWords)

    if (stringedHiglightedWords === stringedOrderedHiglightedWords) {
      onWin()
    }
  }

  handlePressWord(word) {
    if (this.state.words.length !== this.orderedHighlightedWords.length) {
      return null
    }

    return this.setState({
      highlightedWords: [
        ...this.state.highlightedWords,
        word,
      ],
    }, () => {
      if (this.state.highlightedWords.length === this.orderedHighlightedWords.length) {
        this.checkIfWin()
      }
    })
  }

  highlightRandomWord(remainingWords) {
    const highlightedWordIndex = getRandomNumber(0, remainingWords.length - 1)
    const highlightedWord = remainingWords[highlightedWordIndex]

    this.orderedHighlightedWords.push(highlightedWord)

    return this.setState({
      highlightedWords: [highlightedWord],
    }, () => {
      const newRemainingWords = remainingWords.filter((_, wordIndex) => wordIndex !== highlightedWordIndex)

      setTimeout(() => {
        if (newRemainingWords.length === 0) {
          return this.setState({
            highlightedWords: []
          })
        }

        return this.highlightRandomWord(newRemainingWords)
      }, DURATION_PER_HIGHLIGHTED_WORD)
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
    const { words, highlightedWords } = this.state

    return (
      <Overlay
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <View style={styles.timerContainer}>
              <Text style={styles.timer}>00:04</Text>
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

export default PlayBattle

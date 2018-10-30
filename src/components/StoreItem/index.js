import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View, Text, Image } from 'react-native'

import { formats } from '@constants'

import styles from './styles'

class StoreItem extends React.PureComponent {
  render() {
    const { size, imageSource, tag, tagColor, title, price, flowPrice } = this.props

    return (
      <View style={styles.container}>
        {tag !== null && (
          <View
            style={[
              styles.tagContainer,
              { backgroundColor: tagColor },
              size === 'standard' && styles.stickyTagContainer,
              size === 'big' && styles.centeredTagContainer,
            ]}
          >
            <Text
              style={[
                styles.tag,
                size === 'big' && styles.bigTag,
              ]}
            >
              {tag.toUpperCase()}
            </Text>
          </View>
        )}

        {imageSource !== -1 && (
          <Image
            style={styles.image}
            source={imageSource}
          />
        )}

        <View>
          <Text
            style={[
              styles.title,
              size === 'big' && styles.bigTitle,
            ]}
          >
            {title.toUpperCase()}
          </Text>
        </View>

        {price !== -1 && (
          <View>
            <Text
              style={[
                styles.price,
                size === 'big' && styles.bigPrice,
              ]}
            >
              {numeral(price).format(formats.CURRENCY)}
            </Text>
          </View>
        )}

        {flowPrice !== -1 && (
          <View>
            <Text
              style={[
                styles.flowPrice,
                size === 'big' && styles.bigFlowPrice,
              ]}
            >
              {`${flowPrice} flow`.toUpperCase()}
            </Text>
          </View>
        )}
      </View>
    )
  }
}

StoreItem.propTypes = {
  size: PropTypes.oneOf(['standard', 'big']),
  imageSource: PropTypes.number,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  flowPrice: PropTypes.number,
}

StoreItem.defaultProps = {
  size: 'standard',
  imageSource: -1,
  tag: null,
  tagColor: null,
  price: -1,
  flowPrice: -1,
}

export default StoreItem

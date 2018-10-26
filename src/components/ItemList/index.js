import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'

import styles from './styles'

class ItemList extends React.PureComponent {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)
    this.renderCell = this.renderCell.bind(this)
    this.renderEmptyCell = this.renderEmptyCell.bind(this)
  }

  renderRow(_, rowIndex) {
    const { items, columns } = this.props

    const rowItems = items.slice(rowIndex * columns, (rowIndex + 1) * columns)

    const restRowItems = columns - rowItems.length > 0
      ? [...Array(columns - rowItems.length)]
      : []

    return (
      <View
        key={rowIndex}
        style={styles.row}
      >
        {rowItems.map(this.renderCell)}
        {restRowItems.length > 0 && restRowItems.map(this.renderEmptyCell)}
      </View>
    )
  }

  renderCell(item) {
    const { renderItem, idKey } = this.props

    return (
      <View
        key={item[idKey]}
        style={[styles.column, {
          flex: this.flexNumber,
        }]}
      >
        {renderItem(item)}
      </View>
    )
  }

  renderEmptyCell(_, columnIndex) {
    return (
      <View
        key={columnIndex}
        style={[styles.column, {
          flex: this.flexNumber,
        }]}
      />
    )
  }

  render() {
    const { items, columns } = this.props

    this.flexNumber = (1 / columns) - 0.04

    const rows = Math.ceil(items.length / columns)

    return (
      <View style={styles.container}>
        {[...Array(rows)].map(this.renderRow)}
      </View>
    )
  }
}

ItemList.propTypes = {
  idKey: PropTypes.string,
  items: PropTypes.array,
  renderItem: PropTypes.func.isRequired,
  columns: PropTypes.number,
}

ItemList.defaultProps = {
  idKey: 'id',
  items: [],
  columns: 3,
}

export default ItemList

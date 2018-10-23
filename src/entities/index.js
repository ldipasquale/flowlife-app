import React from 'react'
import services from '@services'

export default Screen => entitiesIds => class extends React.PureComponent {
  static label = Screen.label

  static icon = Screen.icon

  static color = Screen.color

  constructor(props) {
    super(props)

    this.state = {
      entities: {},
      isFetching: true,
    }
  }

  async componentDidMount() {
    const entitiesData = await Promise.all(entitiesIds.map(entityId => services[entityId].get()))

    const entities = entitiesIds.reduce((entitiesAccumulator, entityId, entityIndex) => ({
      ...entitiesAccumulator,
      [entityId]: entitiesData[entityIndex],
    }), {})

    return this.setState({
      entities,
      isFetching: false,
    })
  }

  render() {
    const { entities, isFetching } = this.state

    return (
      <Screen
        {...this.props}
        {...entities}
        isFetching={isFetching}
      />
    )
  }
}

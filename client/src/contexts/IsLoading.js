import React, { Component, createContext } from 'react'

const IsLoadingContext = createContext()

export const IsLoadingInjector = (
  IsLoadingContext.Consumer
)

export class IsLoadingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.setLoaded = this.setLoaded.bind(this)
    this.setLoading = this.setLoading.bind(this)
  }

  setLoaded(namespace) {
    this
    .setState({
      ...this.state,
      [namespace]: false,
    })
  }

  setLoading(namespace) {
    this
    .setState({
      ...this.state,
      [namespace]: true,
    })
  }

  render() {
    return (
      <IsLoadingContext.Provider
        value={{
          ...this.state,
          setLoaded,
          setLoading,
        }}
      >
        {
          this
          .props
          .children
        }
      </IsLoadingContext.Provider>
    )
  }
}

import React, { Component, PropTypes } from 'react'


class ListForm extends Component {
  state = {
    pendingTask: ""
  }

  handleInputChange = (e) => {
    this.setState({
      pendingTask: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.pendingTask.length) {
      return
    }
    this.props.addTask(this.props.id, this.state.pendingTask)
    this.setState({
      pendingTask: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input 
          onChange={this.handleInputChange}
          value={this.state.pendingTask} 
          type="text" />
        <button type="submit">Add Card</button>
      </form>
    )
  }
}

export default ListForm

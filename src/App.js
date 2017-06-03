import React, { Component } from 'react'

import 'bulma'
import './App.scss'
import List from './components/List'

class App extends Component {

  state = {
    lists: [
      {
        id: 0,
        title: "TODO"
      },
      {
        id: 1,
        title: "WIP"
      },
      {
        id: 2,
        title: "DONE"
      }
    ],
    tasks: []
  }

  addTask = (listID, task) => {
    let newTask = {
      id: this.state.tasks.length,
      listID: listID,
      text: task,
      isComplete: false
    }
    let updatedTasks = this.state.tasks.concat(newTask)
    this.setState({
      tasks: updatedTasks
    })
  }

  move = (listID, taskID) => {
    let newList = listID >= 2 ? 0 : listID + 1
    let updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskID) {
        return Object.assign({}, task, {listID: newList})
      }
      return task
    })
    this.setState({
      tasks: updatedTasks
    })
  }

  render() {
    return (
      <div className="columns">
        {this.state.lists.map((list) => {
          let tasks = this.state.tasks.filter((task) => {
            return task.listID === list.id
          })
          return <List key={list.id} 
                       tasks={tasks} 
                       addTask={this.addTask} 
                       move={this.move} {...list} />
        })}

      </div>
    )
  }
}

export default App

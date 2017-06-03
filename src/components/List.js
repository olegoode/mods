import React, { PropTypes } from 'react'
import ListForm from './ListForm'


const List = props => {
  let nextList
  switch (props.title) {
    case 'TODO':
      nextList = 'WIP'
      break;
    case 'WIP':
      nextList = 'DONE'
      break;  
    default:
      nextList = 'TODO'
      break;
  }
  return (
  <div className="column">
    <h1 className="has-text-centered">{props.title}</h1>
    <ul>
      {props.tasks.map((task) => <li key={task.id}>{task.text} <a onClick={props.move.bind(null, props.id, task.id)}>{`Move to ${nextList}`}</a></li>)}
    </ul>
    <ListForm id={props.id} addTask={props.addTask} />
  </div>
  )
}

export default List

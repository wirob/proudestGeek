import React, { Component } from 'react'
import ListItem from './ListItem'
import contestants from '../../contestants'

class List extends Component {
  render() {
    const { changeActive } = this.props
    return (
      <div>
        {contestants.map((element, index) => {
          return (
            <ListItem
              key={index}
              name={element.name}
              topic={element.topic}
              decibel={element.decibel}
              changeActive={changeActive}
            />
          )
        })}
      </div>
    )
  }
}

export default List

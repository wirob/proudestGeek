import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

class ProudestGeek extends Component {
  clicked = () => {
    console.log(this.props.foo)
  }
  render() {
    return (
      <div>
        <Typography variant="display4">Proudest geek</Typography>
        <Typography variant="display2">Contestant:</Typography>
        <Typography variant="subheading">{this.props.name}</Typography>
        <Typography variant="display2">Topic:</Typography>
        <Typography variant="subheading">{this.props.topic}</Typography>

      </div>
    )
  }
}

export default ProudestGeek

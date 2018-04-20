import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import geekLogo from './geekLogo.svg'
import { withStyles } from 'material-ui/styles'

const styles = {
  logo: {
    width: 300
  }
}

class ProudestGeek extends Component {
  clicked = () => {
    console.log(this.props.foo)
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <img className={classes.logo} src={geekLogo} alt="Proudest geek logo" />
        <Typography variant="display2">Contestant:</Typography>
        <Typography variant="subheading">{this.props.name}</Typography>
        <Typography variant="display2">Topic:</Typography>
        <Typography variant="subheading">{this.props.topic}</Typography>
      </div>
    )
  }
}

export default withStyles(styles)(ProudestGeek)

import React, { Component } from 'react'
import ProudestGeek from './components/proudestGeek/ProudestGeek'
import List from './components/list/List'
import { withStyles } from 'material-ui/styles'

const styles = {
  cointainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      topic: ''
    }
  }
  changeActiveContestant = (name, topic) => {
    this.setState({ name: name, topic: topic })
  }
  render() {
    const { classes } = this.props
    return (
      <div className="App">
        <div className={classes.cointainer}>
          <ProudestGeek name={this.state.name} topic={this.state.topic} />
          <List changeActive={this.changeActiveContestant} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)

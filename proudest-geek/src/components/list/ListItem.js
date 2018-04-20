import React, { Component } from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'


const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

class ListItem extends Component {
  render() {
    const { classes, changeActive } = this.props
    return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            {this.props.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {this.props.topic}
          </Typography>
          <CardActions>
            <Button
              onClick={() => changeActive(this.props.name, this.props.topic)}
              size="small"
            >
              Set Active
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ListItem)

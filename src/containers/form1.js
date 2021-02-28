import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Form1 extends Component {

  state ={
    value: ''
  }

  handleChange = (event) => (
    this.setState({value: event.target.value})
  )

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.input_action_creator(event.target.name.value)
  }

  render() {
    return (
      <Jumbotron>
        <Form onSubmit={this.handleSubmit}>
        <Form.Label> Input </Form.Label>
          <Form.Control size="sm" id="name" onChange={this.handleChange} type="text" />
          <br />
          <Button type="submit"> Submit </Button>
        </Form>
        <br />
        <h3>React State:</h3>
        <p>{this.state.value}</p>
        <br />
        <h3>Redux State:</h3>
        <p>{this.props.user_text}</p>
      </Jumbotron>
    )}
}


function mapStateToProps(state) {
  return {
    user_text: state.user_reducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    input_action_creator: (text) => dispatch(ACTIONS.user_input(text))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form1);

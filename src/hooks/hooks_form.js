import React, { useContext, useState, useReducer } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_reducer_hooks';
import Context from '../utils/context';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';

const HooksForm1 = () => {
  const context = useContext(Context)

  const [valueChange, setValueChange] = useState('')
  const [valueSubmit, setValueSubmit] = useState('')

  const [state, dispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState)


  const handleuseStateChange = (event) => (
    setValueChange(event.target.value)
  );

  const handleuseStateSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.useState.value)
  };

  const handleuseReducerChange = (event) => (
    dispatch(ACTIONS.user_input_change(event.target.value))
  );

  const handleuseReducerSubmit = (event) => {
    event.preventDefault();
    dispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
  };


    return (
      <Jumbotron>
        <Form onSubmit={handleuseStateSubmit}>
          <Form.Label> React useState: </Form.Label>
          <Form.Control size="sm" id="useState" onChange={handleuseStateChange} type="text" /><br />
          <Button type="submit"> Submit </Button>
        </Form>
        <br />
        <form onSubmit={handleuseReducerSubmit}>
          <Form.Label> React useReducer: </Form.Label>
          <Form.Control size="sm" id="useReducer" onChange={handleuseReducerChange} type="text" /><br />
          <Button type="submit"> Submit </Button>
        </form>
        <br />
        <form onSubmit={context.useContextSubmit}>
          <Form.Label> React useContext: </Form.Label>
          <Form.Control size="sm" id="useContext" onChange={context.useContextChange} type="text" /><br />
          <Button type="submit"> Submit </Button>
        </form>
        <br />

        <h3>React useState:</h3>
        <p>Change: {valueChange}</p>
        <p>Submit: {valueSubmit}</p>
        <br />
        <h3>React useReducer:</h3>
        <p>Change: {state.user_textChange}</p>
        <p>Submit: {state.user_textSubmit}</p>
        <br />
        <h3>React useContext:</h3>
        <p>Change: {context.useContextChangeState}</p>
        <p>Submit: {context.useContextSubmitState}</p>
        <br />
        <br />
      </Jumbotron>
    )
}


export default HooksForm1;

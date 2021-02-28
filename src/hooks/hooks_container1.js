import React, { useContext, useState, useEffect, useReducer } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as Reducer1 from '../store/hooks_state/reducer1_hooks';
import Context from '../utils/context';
import Button from 'react-bootstrap/Button';

const HooksContainer1 = () => {
  const context = useContext(Context)

  //const value = useState(0)[0]
  //const setValue = useState(0)[1]
  const [value, setValue] = useState(0)

  const [useEffectValue, setUseEffectValue] = useState(null)

  const [state, dispatch] = useReducer(Reducer1.Reducer1, Reducer1.initialState)

  useEffect(() => {
      setTimeout(() => setUseEffectValue("useEffect worked"), 3000 );
  }, [value])

  const incrementValue = () => {
    setValue(value + 1 )
  }

  const decrementValue = () => {
    setValue(value - 1 )
  }

  const handleuseEffectValue = () => {
    setUseEffectValue("some string")
  }

  const handleDispatchTrue = () => {
    //    dispatch2(type: "SUCCESS")
    //    dispatch2(ACTIONS.SUCCESS)
    dispatch(ACTIONS.success())
  }

  const handleDispatchFalse = () => {
    //     dispatch2(type: "FAILURE")
    //    dispatch2(ACTIONS.FAILURE)
    dispatch(ACTIONS.failure())
  }

  return (
    <div>
      <div>
      <Button onClick={() => handleuseEffectValue()}> Handle Value  </Button>
      <Button onClick={() => handleDispatchTrue()}>Dispatch True </Button>
      <Button onClick={() => handleDispatchFalse()}>Dispatch False </Button>
      <Button onClick={() => context.dispatchContextTrue()}>Dispatch Context True </Button>
      <Button onClick={() => context.dispatchContextFalse()}>Dispatch Context False </Button>
      <Button onClick={() => incrementValue()}> Add Local Value </Button>
      <Button onClick={() => decrementValue()}> Dec Local Value </Button>
      <Button onClick={() => context.addGlobalValue()}> Add Global Value </Button>
      <Button onClick={() => context.decGlobalValue()}> Dec Global Value </Button>
      <br />
      <br />
      {context.useContextSubmitState
        ? <h3> {context.useContextSubmitState} </h3>
        : <h3> No User Text </h3>
      }
      <br />
      {state.stateprop1
        ? <p> stateprop1 is true </p>
        : <p> stateprop1 is false </p>
      }
      <br />
      {context.userReducer1State
        ? <p> stateprop2 is true </p>
        : <p> stateprop2 is false </p>
      }
      <br />
      {useEffectValue
        ? <p> { useEffectValue }</p>
        : <p> No value </p>
      }
      <br />
      <p>Local Value: {value}</p>
      <br />
      <p>Global Value: {context.valueGlobalState}</p>
      <br />
      </div>
    </div>
  )
}



export default HooksContainer1;

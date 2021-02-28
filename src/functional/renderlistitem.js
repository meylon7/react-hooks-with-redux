import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
const RenderListItem = props => (
    <Jumbotron>
      <h3>{props.location.state.list_item.text}</h3>
      <h4> {props.location.state.list_item.num} </h4>
      <div>{props.location.state.list_item.bool
              ? <p>Boolean is True</p>
              : <p>Boolean is False</p>
            }
      </div>
      <Link to='/renderlist' style={{padding: '5px'}}>
      Back
    </Link>
    </Jumbotron>
);




export default RenderListItem;

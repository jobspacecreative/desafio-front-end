import React, { useContext } from 'react';
import {
  Form
} from 'react-bootstrap';
import { CartContext } from '../../context';

export default function Search(props) {
  const { handleSearch } = useContext(CartContext);


  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{props.title}</Form.Label>
          {/* <Form.Control type="text" onChange={props.filterName} placeholder="Buscar produto"/> */}
          <Form.Control type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Buscar produto"/>
        </Form.Group>
      </Form>
    </>
  )
}

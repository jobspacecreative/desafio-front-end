import React, { useContext } from 'react';
import {
  Form
} from 'react-bootstrap';
import { CartContext } from '../../context';

export default function Search(props) {
  const { setFilteredProducts } = useContext(CartContext);


  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{props.title}</Form.Label>
          <Form.Control type="text" onChange={(e)=>setFilteredProducts(e.target.value)} placeholder="Buscar produto"/>
        </Form.Group>
      </Form>
    </>
  )
}

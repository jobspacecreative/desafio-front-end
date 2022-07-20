import React from 'react';
import {
  Form
} from 'react-bootstrap';

export default function Search(props) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{props.title}</Form.Label>
          <Form.Control type="text" onChange={props.filterName} placeholder="Buscar produto"/>
        </Form.Group>
      </Form>
    </>
  )
}

import React from 'react';
import {
  Form
} from 'react-bootstrap';

export default function Search({ title, searchText, setSearchText }) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{title}</Form.Label>
          <Form.Control type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} placeholder="Buscar produto"/>
        </Form.Group>
      </Form>
    </>
  )
}

import React from 'react';
import './App.css';
import {Form,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="label">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="label">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="info" type="submit">
    Submit
  </Button>
</Form>
    </div>
    
  );
}

export default App;

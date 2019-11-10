import React from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback, Col, Row } from "reactstrap";

import useForm from "../hooks/useForm";
import validateAuth from "../validateAuth";

function LoginForm() {
  const { values, errors, submitting, handleChange, handleSubmit, handleBlur } = useForm(
    {
      email: "",
      password: ""
    },
    validateAuth
  );
  return (
    <Form onSubmit={handleSubmit}>
      <Row form>
        <Col xs="12">
          <FormGroup row>
            <Label sm="2" for="email">
              Email
            </Label>
            <Col sm="10">
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
                invalid={errors.email && true}
              />
              <FormFeedback> {errors.email}</FormFeedback>
            </Col>
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup row>
            <Label sm="2" for="password">
              Password
            </Label>
            <Col sm="10">
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                invalid={errors.password && true}
              />
              <FormFeedback> {errors.password}</FormFeedback>
            </Col>
          </FormGroup>
        </Col>
        <Col xs="12" sm={{ offset: 2, size: 10 }}>
          <FormGroup>
            <Button block disabled={submitting}>Submit</Button>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default LoginForm;

import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const searchForm = ({ handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="input"
          name="search"
          id="searchForm"
          placeholder="Enter a title of a Book"
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default searchForm;

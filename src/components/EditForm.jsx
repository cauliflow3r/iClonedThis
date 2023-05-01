import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../ContactContextProvider";
import { counterContext } from "../CounterContextProvider";

const EditForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const { addContact } = useContext(contactContext);

  const navigate = useNavigate();

  const handleValues = () => {
    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert("заполните все поля!");
      return;
    }

    const newContact = { name, lastName, phone };
    addContact(newContact);
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column mt-5 align-items-center w-50">
      <h1>ADD CONTACT</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="lastname"
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="phone"
      />
      <Button onClick={handleValues} variant="dark">
        add contact
      </Button>
    </div>
  );
};

export default EditForm;

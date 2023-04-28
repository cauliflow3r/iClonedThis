import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { contactContext } from "../ContactContextProvider";

function ContactCard({ name, lastName, phone, id }) {
  const { deleteContact } = useContext(contactContext);

  return (
    <Card
      style={{
        width: "15rem",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card.Body>
        <Card.Title>name: {name}</Card.Title>
        <Card.Title>lastName: {lastName}</Card.Title>
        <Button variant="warning">{phone}</Button>
      </Card.Body>
      <Card.Body>
        <Button variant="success">Edit</Button>
        <Button onClick={() => deleteContact(id)} variant="danger">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;

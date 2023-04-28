import React, { useContext } from "react";
import { useEffect } from "react";
import { contactContext } from "../ContactContextProvider";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container d-flex ">
      {contacts.map((item) => (
        <ContactCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContactList;

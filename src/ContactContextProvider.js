import axios from "axios";
import React, { createContext, useState } from "react";

export const contactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  const [contacts, setContacts] = useState([]);

  //! read
  async function getContacts() {
    const res = await axios.get(`${API}${window.location.search}`);
    setContacts(res.data);
  }

  //! add
  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  //! delete
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  return (
    <contactContext.Provider
      value={{ addContact, getContacts, contacts, deleteContact }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;

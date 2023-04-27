import axios from "axios";
import React, { createContext } from "react";

export const contactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  //! add
  async function addContact(newContact) {
    await axios.post(API, newContact);
  }

  return (
    <contactContext.Provider value={{ addContact }}>
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;

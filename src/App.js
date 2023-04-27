import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm";
import ContactList from "./components/ContactList";
import Counter from "./components/Counter";
import EditForm from "./components/EditForm";
import Header from "./components/Header";
import CounterContextProvider from "./CounterContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactContextProvider from "./ContactContextProvider";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ContactContextProvider>
          <CounterContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/add" element={<AddForm />} />
              <Route path="/edit/:id" element={<EditForm />} />

              <Route path="/counter" element={<Counter />} />
            </Routes>
          </CounterContextProvider>
        </ContactContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

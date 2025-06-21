import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';
import { v4 as uuidv4 } from "uuid"; 

function App() {
  const [contactsArr, setContactsArr] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const addContactHandler = (contact) => {
    // const contactWithId = { id: uuidv4(), ...contact };
    //console.log("Adding contact:", contactWithId);
    setContactsArr([...contactsArr, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contactsArr.filter((contact) => {
      return contact.id !== id; 
    });
    setContactsArr(newContactList);
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactsArr));
  }, [contactsArr]);

  return (
    <div className="ui container"> 
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contactsArr} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;

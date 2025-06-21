import React, { useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList"; // If you have a ContactList component
import { v4 as uuidv4 } from "uuid"; // For unique IDs (install with: npm install uuid)

function App() {
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, { id: uuidv4(), ...contact }]);
    };

    return (
        <div className="ui container">
            <h2>Contact Manager</h2>
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} /> {/* Show contacts if you have this component */}
        </div>
    );
}

export default App;
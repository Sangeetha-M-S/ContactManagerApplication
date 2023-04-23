import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     "name": "John",
  //     "email": "john@example.com",
  //   },
  //   {
  //     id: "2",
  //     "name": "Smith",
  //     "email": "smith@example.com",
  //   },
  // ];

  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts,{id: uuidv4(), ...contact}])
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...contacts,contact]))
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setContacts(retriveContacts);
  },[])

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          {/* <Route 
            exact 
            path="/"  
            render={(props) => (
              <ContactList 
              {...props}  
              contacts={contacts} 
              getContactId={removeContactHandler} 
              />
            )}
          />
          <Route 
            path="/add" 
            render={(props) => (
              <AddContact
              {...props}  
              addContactHandler={addContactHandler} 
              />
            )}
          /> */}

        <Route path="/" element={<ContactList  contacts={contacts} getContactId={removeContactHandler} />} />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
    
        {/* <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;

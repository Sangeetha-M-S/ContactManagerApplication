import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }

  const renderContactList = props.contacts.map((contact) => {
    return(
      <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>
    );
  });

  return (
    <div className="ui celled list">
      <br />
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right" style={{marginLeft: "50px"}}>Add Contact</button>
        </Link>
        </h2>
      {renderContactList}</div>
  )
};

export default ContactList
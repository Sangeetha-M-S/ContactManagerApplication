import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  //console.log(props);
  const inputE1 = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }

  const renderContactList = props.contacts.map((contact) => {
    return(
      <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputE1.current.value);
  }

  return (
    <div className="ui celled list">
      <br />
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right" style={{marginLeft: "50px"}}>Add Contact</button>
        </Link>
        </h2>

        <div className="ui search">
          <div className="ui icon input">
            <input ref={inputE1} type="text" placeholder="Search Contact" className="prompt" value={props.term} onChange={getSearchTerm}/>
            <i className="search icon"></i>
          </div>
        </div>
      {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}</div>
  )
};

export default ContactList
import React from 'react'
import { Link } from 'react-router-dom'
import user2 from '../images/user2.png'
import { useLocation } from 'react-router-dom'

const ContactDetail = (props) => {
    // const { name, email } = props.location.state.contact
    // const { contact } = props.location.state
    // const { name, email } = contact
    const location = useLocation();
    console.log(location, "useLocation Hook");
    const data = location.state.contact;
    console.log(data);
    const { name, email } = data
    
  return (
   <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user2} alt="user" />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
        </div>
        <div className="center-div">
            <Link to="/">
                <button className="ui button blue center">Back to Contact List</button>
            </Link>
        </div>
   </div>
  );
}

export default ContactDetail
import React from 'react'
import { Link } from 'react-router-dom'
import user2 from '../images/user2.png'

const ContactDetail = (props) => {
    // const { name, email } = props.location.state.contact
    // const { contact } = props.location.state
    // const { name, email } = contact
  return (
   <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user2} alt="user" />
            </div>
            <div className="content">
                <div className="header">sneha</div>
                <div className="description">sneha@gmail.com</div>
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
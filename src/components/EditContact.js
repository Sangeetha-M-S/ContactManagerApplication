import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// class EditContact extends React.Component{
//         constructor(props) {
//             super(props);
//             //const location = useLocation();
//             // const data = location.state.contact;
//             //const { id, name, email } = props.location.state.contact
//             // render(){
//             //     const location = useLocation();
//             //     const data = location.state.contact;
//             //     const {id, name, email} = data;
//             // } 
//             //const { id, name, email } = this.props.location.state.contact;
//             //console.log(props);
//             // this.state = {
//             //     id,
//             //     name,
//             //     email
//             // }
//         }

const EditContact = (props) => {

    const location = useLocation();
    console.log(location);
    const data = location.state.contact;
    const {id, name, email} = data;
    const [sname, setSname] = useState(name);
    const [semail, setSemail] = useState(email);
    const navigate = useNavigate();
    
    const update = (e) => {
        e.preventDefault();
        if(sname == "" || semail == ""){
            alert("All the fields are mandatory!");
            return
        }
        
        const updateValue = {id:id, name:sname, email:semail}      
        props.updateContactHandler(updateValue);
        setSname("")
        setSemail("")
        navigate("/")
    }
        return (
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={sname} 
                        onChange={(e) => setSname(e.target.value)}
                         />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={semail} 
                        onChange={(e) => setSemail(e.target.value)}
                        />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        );
    }

export default EditContact
import React from 'react';
import user from '../images/user.webp';

const ContactCard = (props) => {
    const {id,name,email}=props.contact;
    return (
        <div className='item'>
            <img className="ui avatar image" src={user} alt="user" />
            <div className='content'>
                <div className='header'>{name}</div>
                <dv>{email}</dv>
            </div>
            <i className='trash alternate outline icon' style={{color:"red"}}></i>
        </div>
    )
}

export default ContactCard
import React from 'react';
import './contactList.css'
const ContactListInfo = (props) => {
    const fullName = [props.firstname,props.lastname].join(' ');
    return (
        <tr>
            <td><a href={`/user/${props.id}`}>{fullName}  </a></td>
            <td>{props.contactNo}<a href={`/user/${props.id}`}><i className="fas fa-external-link-alt icon"></i></a></td>
        </tr>
    );
}

export default ContactListInfo;

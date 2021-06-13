import React from 'react';
import ContactListInfo from './contactListInfo'
import contactContext from '../../contexts/contactContext'
import './contactList.css'

const ContactList = () => {
    const context = React.useContext(contactContext);
    return (
        <div className='container'>
            <div className='table-responsive'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Contact Name</th>
                        <th scope="col">Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {context.contacts.map((contact,key)=>(
                        <ContactListInfo
                          key={contact.id}
                          {...contact}
                        />
                    ))}
                </tbody>
            </table>
            </div>
            
        </div>
    );
}

export default ContactList;

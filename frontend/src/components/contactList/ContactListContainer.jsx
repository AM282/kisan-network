import React,{useState,useEffect} from 'react';
import ContactList from './ContactList'
import contactContext from './../../contexts/contactContext';
import {getResource} from '../../services/getResources';

const ContactListContainer = () => {
    const [contacts,setContacts]=useState([]);
    useEffect(()=>{
        getResource()
        .then((result) => {
            if (result.data && Array.isArray(result.data)) {
                setContacts(result.data);
            }
        })
        .catch((err) => {
        console.log("Error occured" + err)
        })
    },[])
    return (
        <contactContext.Provider value={{ contacts: contacts }}>
            <ContactList/>
        </contactContext.Provider>
    );
}

export default ContactListContainer;

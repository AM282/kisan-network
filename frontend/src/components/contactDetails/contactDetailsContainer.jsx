import React,{useState,useEffect} from 'react';
import contactInfoContext from './../../contexts/contactInfoContext';
import ContactDetails from './ContactDetails';
import {getResource} from '../../services/getResources';
import { useParams } from 'react-router-dom';


const ContactDetailsContainer = () => {
    const [contactInfo,setContactInfo]=useState({});
    const {id}=useParams();
    console.log(id);
    const path=`contact/${id}`;
    useEffect(()=>{
        getResource(path)
        .then((result) => {
                setContactInfo(result.data);
        })
        .catch((err) => {
        console.log("Error occured" + err)
        })
    },[])
    return (
        <contactInfoContext.Provider value={{ contactInfo: contactInfo }}>
            <ContactDetails />
        </contactInfoContext.Provider>
    );  

}

export default ContactDetailsContainer;

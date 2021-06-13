import React, {useState,useEffect} from 'react';
import DisplayMessageListItem from './DisplayMessageListItem'
import { getResource } from '../../services/getResources';
const DisplayMessageList = () => {
    const [messageList,setMessageList]=useState([]);
    const path="messages"
    useEffect(()=>{
        getResource(path)
        .then((result) => {
            if (result.data && Array.isArray(result.data)) {
                setMessageList(result.data);
            }
        })
        .catch((err) => {
        console.log("Error occured" + err)
        })
    },[])
    console.log(messageList);
    return (
        <div className='container'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Contact Name</th>
                        <th scope='col'>OTP Sent</th>
                        <th scope='col'>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {messageList.map((message) => (
                        <DisplayMessageListItem
                            key={message.id}
                            {...message}
                        />
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default DisplayMessageList;

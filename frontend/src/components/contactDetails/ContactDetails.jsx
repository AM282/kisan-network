import React from 'react';
import { Link } from 'react-router-dom'
import contactInfoContext from '../../contexts/contactInfoContext';
import './contactDetails.css'

const ContactDetails = () => {
    const context = React.useContext(contactInfoContext);
    const fullName = [context.contactInfo.firstname,context.contactInfo.lastname].join(' ');
    return (
        <div className='container'>
            <div className="row mx-lg-2 mx-md-2 mr-2">
                    <div className="p-1 table-responsive">
                        <div className="pl-2 pt-3 pb-2 bg-light text-dark heading">
                            <h5>Contact Details</h5>
                        </div>
                        <table className="table table-striped table-bordered contact-info">
                            <tr>
                                <th>Full Name:</th>
                                <td>
                                   {fullName}
                                </td>
                            </tr>
                            <tr>
                                <th>Contact No:</th>
                                <td>
                                    {context.contactInfo.contactNo}
                                </td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>
                                    {context.contactInfo.emailId}
                                </td>
                            </tr>
                        </table>
                        <div className="sendMessage-wrapper">
                        <Link to={`/user/${context.contactInfo.id}/compose`}>
                                    <button className="btn btn-dark messageButton">Send Message</button>
                        </Link>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default ContactDetails;

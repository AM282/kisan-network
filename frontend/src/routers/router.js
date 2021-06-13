import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactListContainer from '../components/contactList/ContactListContainer'
import ContactDetailsContainer from '../components/contactDetails/contactDetailsContainer';
import MessageForm from '../components/contactDetails/MessageForm';
import DisplayMessageList from '../components/messageList/DisplayMessageList';
import Navbar from '../components/navbar/Navbar';
import React from 'react';

const router = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact >
                    <ContactListContainer />
                </Route>
                <Route path="/user/:id" exact>
                    <ContactDetailsContainer />
                </Route>
                <Route path="/user/:id/compose" exact>
                    <MessageForm />
                </Route>
                <Route path="/messages" exact>
                    <DisplayMessageList />
                </Route>
            </Switch>
    </Router>

    );
}

export default router;

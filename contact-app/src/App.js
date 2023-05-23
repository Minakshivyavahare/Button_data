
import { useState } from 'react';
import './App.css';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import Header from './component/Header';

function App() {
  const[contacts,setContacts] = useState([])
  const addContactHandler = (contact) =>{
    console.log(contact);
  }
   return (
  <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
  </div>
  );
}

export default App;

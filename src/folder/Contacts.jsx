import React from 'react'
import { useState } from 'react';
import styles from './contactCss.module.css'

const Contacts = () => {

       // State for search input
   const [searchQuery, setSearchQuery] = useState('');

   // Dummy data for contacts
   const contacts = [
       { name: 'Customer Support', email: 'apnasupport@example.com', phone: '1-800-123-4567' },
       { name: 'Sales', email: 'apnasales@example.com', phone: '1-800-987-6543' },
       { name: 'General Inquiries', email: 'apnainfo@example.com', phone: '1-800-555-1212' }
   ];

   // Filter contacts based on search query
   const filteredContacts = contacts.filter(contact =>
       contact.name.toLowerCase().includes(searchQuery.toLowerCase())
   );
  return (
    <div className={styles.main}>
    <h1>Contact Us</h1>
      <div className={styles.box1}>
      <div >
                <h4>Contacts</h4>
                <ul>
                    {filteredContacts.map((contact, index) => (
                        <li key={index}>
                            <strong>{contact.name}</strong>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                        </li>
                    ))}
                </ul>
            </div>
      <div>
      
            
            <input
                type="text"
                placeholder="Search contacts here"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} />
            </div>

            
            <div >
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
            </div>

            
            <div >
                <h4>Social Media</h4>
                <ul>
                    <li> <a href="https://www.facebook.com/example">FACEBOOK</a></li>
                    <li><a href="https://twitter.com/example">TWITTER</a></li>
                    <li><a href="https://www.instagram.com/example">INSTAGRAM</a></li>
                </ul>
            </div>

            </div>
           
    </div>
  )
}

export default Contacts

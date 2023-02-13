import "./App.css";
import { useState } from "react";
import ContactsList from "./ContactsList";
import ContactInfo from "./ContactInfo";
function App() {
  // Contacts objects
  const [contactsList, setContactsList] = useState([
    { id: 1, name: "John", phone: "514 514 5144", moreInfoDisplayed: false },
    { id: 2, name: "nazeef", phone: "438 989 0000", moreInfoDisplayed: false },
    { id: 3, name: "bolo bolo", phone: "123 456 7890", moreInfoDisplayed: false },
  ]);
  return (
    <div className="App">
      <ContactsList contactsList={contactsList} setContactsList ={setContactsList}/>
      <ContactInfo />
    </div>
  );
}

export default App;

import Contact from "./Contact"
export default function ContactsList({contactsList,setContactsList}){
        // If user clicks on a contact, display conact info page

    return(
        <div className="contacts-list">
      <h1>My Contacts</h1>
      <form action="" method="get">
        <input type="text" placeholder='Search' />
      </form>
      <ul>
        {
            contactsList.map(function(contact) {
                return <Contact key = {contact.id} contactInfo = {contact} setContactsList ={setContactsList} contactsList ={contactsList}/>
            })
        }
      </ul>
     </div>
    )
}
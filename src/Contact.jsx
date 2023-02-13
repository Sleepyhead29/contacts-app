import { useEffect } from "react"

export default function Contact({contactInfo,contactsList,setContactsList}){
        // If user clicks on a contact, display conact info page
     
    function displayMoreInfo(){
        
        setContactsList([...contactsList,{...contactInfo,moreInfoDisplayed: true}]);
        console.log(contactInfo.moreInfoDisplayed);
        console.log(contactsList);
    }
    return(
        <li onClick={displayMoreInfo}>{contactInfo.name}</li>
    )
}
export default function ContactInfo(displayMoreInfo){
    return (
        <div className="contactInfo">
        <button className="closePage">X</button>
        <h1>Name</h1>
        <div className="info">
          <div className="phoneNumber">
            <h3>Phone Number</h3>
            <p>514 514 5155</p>
          </div>
          <h3>Call</h3>
        </div>
      </div>
    )
}
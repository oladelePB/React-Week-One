import "./CustomerInfo.css";

const CustomerInformation = ({ info }) => {
  return (
    <div className="centerDiv">
      <h1>Customer Information</h1>
      <h4 className="blueBackground">First Name: {info.first_name}</h4>
      <h4 id="greyBackground">Last Name: {info.last_name}</h4>
      <h4>Email: {info.email}</h4>
      <h4>Age: {info.age}</h4>
    </div>
  );
};

export default CustomerInformation;

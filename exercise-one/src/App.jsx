import './App.css';
import CustomerInformation from './components/CustomerInformation';

function App() {

  const customer = {
    first_name: 'Bob',
    last_name: 'Dylan',
    age: 20,
    email: 'bobdylan@ymail.com'
  }

  return (
  <CustomerInformation info={customer}></CustomerInformation>
  );
}

export default App;

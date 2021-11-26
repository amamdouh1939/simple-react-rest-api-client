import { useState } from 'react';
import './App.css';
import AddressBarContainer from './components/AddressBarContainer';
import RequestBodyContainer from './components/RequestBodyContainer';
import ResponseContainer from './components/ResponseContainer';

function App() {
  const [address, setAddress] = useState('');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState({});
  const [bodyText, setBodyText] = useState('');

  
  function handleMethodChange(e) {
    setMethod(e.target.value);
  }

  function handleAddressInputChange(e) {
    setAddress(e.target.value);
  }

  function handleBodyInputChange(e) {
    setBodyText(e.target.value);
  }

  function sendApiRequest() {
    switch (method) {
        case 'GET':
        case 'DELETE':
            fetch(address, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            .then(res => res.json())
            .then(json => setResponse(json));
            break;
        case 'POST':
        case 'PUT':
            fetch(address, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: bodyText
            })
            .then(res => res.json())
            .then(json => setResponse(json));
            break;
    
        default:
            break;
    }
  }

  return (
    <div className="container-fluid pt-4">
      <h1 className="h1">REST API Client</h1>
      <AddressBarContainer handleAddressInputChange={handleAddressInputChange} handleMethodChange={handleMethodChange} sendApiRequest={sendApiRequest} address={address} method={method} />
      <RequestBodyContainer bodyText={bodyText} handleBodyInputChange={handleBodyInputChange} />
      <ResponseContainer response={response} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import UserDetails from './Components/UserDetails/UserDetails';
import AccountCreation from './Components/AccountCreation/AccountCreation';
function App() {
  const [tab, setTab] = useState('userDetails');

  const Button = ({ label, value }) => (
    <button 
      style={{
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: '600',
        backgroundColor: tab === value ? 'blue' : 'transparent',
        color: tab === value ? 'white' : 'blue',
        border: '1px solid blue',
        cursor: 'pointer',
        marginRight: '10px'
      }}
      onClick={() => setTab(value)}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '10%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Button label="User Details" value="userDetails" />
        <Button label="Account Creation" value="accountCreation" />
      </div>
      <div >
        {tab === 'userDetails' && <UserDetails/>}
        {tab === 'accountCreation' && <AccountCreation/>}
      </div>
    </div>
  );
}

export default App;

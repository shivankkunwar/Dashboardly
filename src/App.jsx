import React, { useState } from 'react';

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
      <div style={{ marginTop: '20px', maxWidth: '600px', padding: '20px' }}>
        {tab === 'userDetails' && <div>User Details Component</div>}
        {tab === 'accountCreation' && <div>Account Creation Component</div>}
      </div>
    </div>
  );
}

export default App;

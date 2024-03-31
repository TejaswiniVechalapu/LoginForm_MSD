import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Logo from './Logo';
import CompanyName from './CompanyName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <CompanyName />
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;

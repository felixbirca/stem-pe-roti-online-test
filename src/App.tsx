import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { UserProvider } from './UserContext';
import CreatePoint from './pages/CreatePoint';
import VisitedPlaces from './pages/VisitedPlaces';


function App() {
  return (
    <UserProvider>
      <div className="App">
        <Login></Login>
        <CreatePoint />
        <VisitedPlaces />
      </div>
    </UserProvider>
  );
}

export default App;

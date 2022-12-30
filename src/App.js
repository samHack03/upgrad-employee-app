import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import AllBanks from './containers/AllBanks';
import BankDetails from './containers/BankDetails';
 import ResumeApp from './containers/ResumeApp';
import NotFound from './containers/NotFound';
import "./css/styles.css";
import './App.css';

// App is the main component all other components are represented as Child of this component
//There are five different routes "/admin/dashboard","/bank-details/:id","/favourite","/","*" for perfroming different functions.

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<AllBanks/>}></Route>
        <Route path="/bank-details/:id" element={<BankDetails/>}></Route>
        <Route path="/resume-app" element={<ResumeApp/>}></Route> 
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar"; // Importe do Topbar
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { Doctors } from "./scenes/doctors/"
// import { Patients } from "./scenes/patients";
// import { Procedures } from "./scenes/procedures";


function App() {
  return (
    <div className="app">
   <Sidebar/>
      <main className="content">
        <Topbar />
       
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          {/*<Route path="/patients" element={<Patients />} />*/}
          {/*<Route path="/procedures" element={<Procedures />} />*/}
        </Routes>
      </main>
     
    </div>
  );
}

export default App;
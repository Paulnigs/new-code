// import React, { useState } from "react";

import Sidebar from "./sidebar"; 
import Dashboard from './dashboard';

const Settings = () => {

  return ( 
    <div className="bg-gray-300 grid gap-4 p-4 grid-cols-[220px,_1fr]">
        <Sidebar />
        <Dashboard />
    

    </div>
   );
}
 
export default Settings;
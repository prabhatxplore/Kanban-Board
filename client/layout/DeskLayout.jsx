import React from "react";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login";

function DeskLayout() {
  return (
    <div className="h-screen w-screen">
      <Login />
      {/* <div className="leftsection bg-red-300 flex-1">
        <Sidebar />
      </div>
      <div className="mainsection flex-5">
        
        
        </div> */}
    </div>
  );
}

export default DeskLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Leftside from "../Pages/Leftside/Leftside";
import Rightside from "../Pages/Rightside/Rightside";

const Main = () => {
  return (
    <div class="w-full">
      <div class="lg:grid grid-cols-3 gap-4">
        <div>
          <Leftside/>
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Rightside/>
        </div>
      </div>
    </div>
  );
};

export default Main;

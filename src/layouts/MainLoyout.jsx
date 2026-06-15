import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../companets/Navbar";
function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#232530] p-5">
        <h3 className="text-white text-center">
          Copyright © 2026 - All right reserved by ACME Industries Ltd
        </h3>
      </footer>
    </>
  );
}

export default MainLayout;

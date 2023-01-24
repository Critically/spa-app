import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/Layout.css";

export default function Layout() {
  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    fontSize: 20,
  };

  return (
    <>
      <header className="header">
        <div className="header_nav">
          <Link to="/" style={linkStyle}>
            На главную
          </Link>
          <Link to="/news" style={linkStyle}>
            Новости
          </Link>
        </div>
      </header>

      <Outlet />
    </>
  );
}

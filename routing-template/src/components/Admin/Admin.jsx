import React from "react";
import { Link, Outlet, Navigate } from "react-router-dom";

const Admin = () => {
  //Navigation to a SPecific page if User is not Admin
  const user = { role: "admin" };

  if (user.role !== "admin") {
    return <Navigate to="/products" />;
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/sales">Sales</Link>
        </li>
        <li>
          <Link to="/admin/seller">Seller</Link>
        </li>
      </ul>
      {/* Output shoud come here */}
      <Outlet />
    </div>
  );
};

export default Admin;

import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_HOST}/api/user`);
      const user = await response.json();
      setData(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Breadcrumb />
      <div className="h-screen text-black"></div>
    </>
  );
};

export default Dashboard;

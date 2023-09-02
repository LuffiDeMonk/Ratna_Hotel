import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";

import CustomInput from "../CustomInput/CustomInput";
import { useSignUp } from "../../utils/Authentication";
import CustomToast from "../ToastNotification/CustomToast";
import { validationSchema } from "../../validation/userValidation";

//mailto:easysoftwarenepal@gmail.com

const Register = () => {
  const { data, mutate, error, isLoading } = useSignUp();
  const handleSubmit = (values, action) => {
    mutate({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };
  return (
    <>
      <CustomToast
        data={data?.message}
        error={error?.response?.data?.message}
      />
      <div className="h-screen flex items-center justify-center">
        <div className="w-[80%] sm:w-1/2 md:w-[40%] lg:w-[50%] rounded-lg bg-gray-300/30 py-6">
          <h1 className="text-3xl font-light text-center text-websiteRed/80">
            Register
          </h1>
          <div className="flex items-center justify-center py-4">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
                  <CustomInput
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Enter your full name"
                  />
                  <CustomInput
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                  <CustomInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter your password"
                  />
                  <div className="flex justify-center mt-6">
                    <button
                      className="text-white text-sm px-8 py-2 rounded-lg bg-blue-400"
                      type="submit"
                    >
                      {isLoading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                  <Link to="/login">
                    <div className="text-xs text-blue-600 underline mt-12">
                      Already a user? Click here to login
                    </div>
                  </Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

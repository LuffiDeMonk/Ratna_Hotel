import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import CustomToast from "../ToastNotification/CustomToast";
import CustomInput from "../CustomInput/CustomInput";
import { loginValidation } from "../../validation/userValidation";
import { useLogin } from "../../utils/Authentication";

const Login = () => {
  const { data, isLoading, mutate, error } = useLogin();
  const handleSubmit = (values, action) => {
    mutate({
      email: values.email,
      password: values.password,
    });
  };
  console.log(data);
  if (data) {
    localStorage.setItem("token", data?.token);
  }
  return (
    <>
      <CustomToast
        data={data?.message}
        error={error?.response?.data?.message}
      />
      <div className="h-screen flex items-center justify-center">
        <div className="w-[80%] sm:w-1/2 md:w-[40%] lg:w-[50%] rounded-lg bg-gray-300/30 py-6">
          <h1 className="text-3xl font-light text-center text-websiteRed/80">
            Login
          </h1>
          <div className="flex items-center justify-center py-4">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginValidation}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
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
                  <div className="flex justify-center mt-6">
                    <button
                      className="text-white text-sm px-8 py-2 rounded-lg bg-blue-400"
                      type="submit"
                    >
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </div>
                  <Link to="/register">
                    <div className="text-xs text-blue-600 underline mt-12">
                      Click here to register
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

export default Login;

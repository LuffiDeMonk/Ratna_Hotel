import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [fields, meta, helpers] = useField(props);
  return (
    <div className="py-2">
      <label className="text-sm font-light">
        {label}
        <br />
        <input
          {...fields}
          {...props}
          className={`text-black text-sm p-3 rounded-lg border focus:outline-blue-400 sm:w-64 lg:w-[32rem] ${
            meta.touched && meta.error ? "border-red-500" : null
          }`}
        />
      </label>
      <br />
      {meta.touched && meta.error ? (
        <p className="text-xs text-red-500">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default CustomInput;

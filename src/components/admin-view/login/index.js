"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "Enter User name",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "Password",
    label: "Enter Password",
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleLogin}
          className="mt-[10px] border border-green-main p-4 font-bold text-[16px]"
        >
          Login
        </button>
      </div>
    </div>
  );
}

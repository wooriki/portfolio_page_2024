"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "닉네임을 입력해 주세요",
    type: "text",
    label: "닉네임을 입력해 주세요",
  },
  {
    name: "password",
    placeholder: "비밀번호를 입력해 주세요",
    type: "Password",
    label: "비밀번호를 입력해주세요",
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
          className="mt-[10px] border border-blue-main p-4 font-bold text-[16px]"
        >
          Login
        </button>
      </div>
    </div>
  );
}

"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "머릿말",
    type: "text",
    label: "머릿말",
  },
  {
    name: "summary",
    placeholder: "보조 문구",
    type: "text",
    label: "보조 문구",
  },
];
export default function AdminHomeView({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("home")}
          className="mt-[10px] border border-blue-main p-4 font-bold text-[16px]"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "학사/학위/등급",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "기간",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "대학명/교육기관명",
  },
];

export default function AdminEducationView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col gap-4 border p-4 border-blue-main"
                >
                  <p>{item.degree}</p>
                  <p>{item.college}</p>
                  <p>{item.year}</p>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("education")}
          className="mt-[10px] border border-blue-main p-4 font-bold text-[16px]"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

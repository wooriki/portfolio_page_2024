"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "프로젝트명",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "사용 기술/스택",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "웹사이트 주소",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "깃헙 주소",
  },
];

export default function AdminProjectView({
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
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
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
          onClick={() => handleSaveData("project")}
          className="mt-[10px] border border-blue-main p-4 font-bold text-[16px]"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

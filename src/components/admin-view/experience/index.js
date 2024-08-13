"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "직급/직책",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "회사명",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "업무 기간",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "위치",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "담당 업무",
  },
];

export default function AdminExperienceView({
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
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                  <p>{item.jobfrofile}</p>
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
          onClick={() => handleSaveData("experience")}
          className="mt-[10px] border border-blue-main p-4 font-bold text-[16px]"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

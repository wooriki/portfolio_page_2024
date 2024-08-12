"use client";

import { useEffect, useState } from "react";
import AnimationWrapper from "../animation-wrapper";
import { addData } from "@/services";

const controls = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "cellphone",
    placeholder: "Enter your Cellular phone number",
    type: "text",
    label: "Cellphone",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

const initialFormData = {
  name: "",
  cellphone: "",
  message: "",
};

export default function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  async function handleSendMessage() {
    const res = await addData("contact", formData);
    console.log(res, "contact-res");

    if (res && res.success) {
      setFormData(initialFormData);
      setShowSuccessMessage(true);
    }
  }

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1000);
    }
  }, [showSuccessMessage]);

  const isValidForm = () => {
    return formData &&
      formData.name !== "" &&
      formData.cellphone !== "" &&
      formData.message !== ""
      ? true
      : false;
  };

  console.log(isValidForm(), "isValidForm()");

  return (
    <div
      id="contact"
      className="max-w-screen-xl mt-100 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto "
    >
      <div className="mt-100">
        <AnimationWrapper className={"py-6 mt-[150px]  mb-[50px]"}>
          <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
              {"Contact Me".split(" ").map((item, index) => (
                <span
                  key={index}
                  className={`${index === 1 ? "text-gradient" : "text-[#000]"}`}
                >
                  {item}{" "}
                </span>
              ))}
            </h1>
          </div>
        </AnimationWrapper>
        <div className="text-gray-500 relative">
          <div className="container px-5">
            <div className="w-full">
              <div className="flex flex-wrap -m-2">
                {controls.map((controlItem, index) =>
                  controlItem.name === "message" ? (
                    <div className="p-2 w-full" key={index}>
                      <div className="relative">
                        <label className="text-sm text-[#000]">
                          {controlItem.label}
                        </label>
                        <textarea
                          id={controlItem.name}
                          name={controlItem.name}
                          value={formData[controlItem.name] || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [controlItem.name]: e.target.value,
                            })
                          }
                          className="w-full border-blue-main border-[2px] bg-[#ffffff] rounded  h-32 text-base outline-none text-[#000000] py-1 px-3 resize-none leading-6"
                        ></textarea>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 w-full" key={index}>
                      <div className="relative">
                        <label className="text-sm text-[#000]">
                          {controlItem.label}
                        </label>
                        <input
                          id={controlItem.name}
                          name={controlItem.name}
                          value={formData[controlItem.name]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [controlItem.name]: e.target.value,
                            })
                          }
                          className="w-full border-blue-main border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-1 px-3 leading-6"
                        />
                      </div>
                    </div>
                  )
                )}
                {showSuccessMessage && (
                  <p className="text-[14px] font-bold my-[8px]">
                    메세지 전송 완료
                  </p>
                )}
                <div className="p-2 w-full flex justify-end">
                  <button
                    disabled={!isValidForm()}
                    onClick={handleSendMessage}
                    className=" mb-[440px] disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg text-md md:text-xl lg:text-2xl tracking-widest bg-blue-main outline-none"
                    sm
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

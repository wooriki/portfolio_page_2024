"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExprienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import { useState } from "react";

export default function adminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: <AdminHomeView />,
    },
    {
      id: "about",
      label: "About",
      component: <AdminAboutView />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <AdminExprienceView />,
    },
    {
      id: "education",
      label: "Education",
      component: <AdminEducationView />,
    },
    {
      id: "project",
      label: "Project",
      component: <AdminProjectView />,
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView />,
    },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className=" -mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold tetxt-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </div>
  );
}

"use client";

export default function adminView() {
  const menuItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "education",
      label: "Education",
    },
    {
      id: "project",
      label: "Project",
    },
    {
      id: "contact",
      label: "Contact",
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
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10"></div>
    </div>
  );
}

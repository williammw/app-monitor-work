import React from "react";

function DashboardLayout() {
  return (
    <div className="h-screen flex pt-[45px] ">
      {/* Left navigation goes here */}
      <nav className="w-64 overflow-y-auto position-sticky top-0">
        {[...Array(100)].map((_, i) => (
          <ul className="bg-gray-200 pl-3  hover:bg-gray-300">
            <li className="border-b-[0.5px] border-gray-700 ">
              <a href="#" key={i} className="block p-3 text-gray-800 ">
                Item {i + 1}
              </a>
            </li>
          </ul>
        ))}
      </nav>
      <main className="flex-1 overflow-y-auto transform translate-y-50 ">
        {/* Main content goes here */}
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
        <div className="text-xl">hello</div>
      </main>
    </div>
  );
}

export default DashboardLayout;

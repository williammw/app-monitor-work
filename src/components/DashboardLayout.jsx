import React from "react";

function DashboardLayout() {
  return (
    <div className="flex w-[100%]">
      <main className="flex-1 overflow-y-auto transform translate-y-50 pl-3 ">
        {/* Main content goes here */}
        {[...Array(100)].map((_, i) => (
          <div key={i} className="text-xl">
            hello
          </div>
        ))}
      </main>
    </div>
  );
}

export default DashboardLayout;

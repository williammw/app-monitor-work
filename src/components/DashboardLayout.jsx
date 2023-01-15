import React from 'react'

function DashboardLayout() {
 
  return (
   
      
      <div className="h-screen flex ">
        
          {/* Left navigation goes here */}
          <nav className="bg-gray-200 w-64 overflow-y-auto position-sticky top-0">
            {[...Array(100)].map((_, i) => (
              <a href="#" key={i} className="block p-3 text-gray-800 hover:bg-gray-300">
                Item {i + 1}
              </a>
            ))}
          </nav>
        <main className="flex-1 p-4">
          {/* Main content goes here */}
          main
        </main>
      </div>
  
  )
}

export default DashboardLayout
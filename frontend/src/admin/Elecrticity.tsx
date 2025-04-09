import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";

function Elecrticity() {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="p-5">
        <h1 className="text-2xl font-bold">Admin EB</h1>
      </div>
    </div>
  </div>
  )
}

export default Elecrticity
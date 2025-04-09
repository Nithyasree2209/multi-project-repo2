import Sidebarr from "./Sidebarr";
import Navbarr from "./Navbarr";

function Salarydetails() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebarr />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbarr />

        {/* Page Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">Salary Details</h1>
          <p>Salary information will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}

export default Salarydetails;

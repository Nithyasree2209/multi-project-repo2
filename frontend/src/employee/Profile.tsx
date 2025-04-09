import Sidebarr from "./Sidebarr";
import Navbarr from "./Navbarr";

function Profile() {
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
          <h1 className="text-2xl font-bold">Profile</h1>
          <p>Welcome to your profile page.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

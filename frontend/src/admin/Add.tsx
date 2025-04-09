import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";
import Card from "../components/card";
import image from "../assets/poster2.webp";
import img from "../assets/poster1.webp";

function Add() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 pt-16 p-6 overflow-auto"> 
        {/* Navbar (Fixed at Top) */}
        <Navbar />

        {/* Page Content */}
        <div className="flex flex-wrap gap-6 mt-6">
          <Card
            imageUrl={image}
            title="BHARATHI"
            description="Contact No => 9360354904"
          />
          <Card
            imageUrl={img}
            title="BHARATHI"
            description="Contact No => 9360354904"
          />
        </div>

        {/* Video Section */}
        <div className="mt-6 flex justify-center">
          <iframe
            width="700"
            height="250"
            src="https://www.youtube.com/embed/lkWY2Mdm5UU?si=hIq0oifp3qGpKQTl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Add;

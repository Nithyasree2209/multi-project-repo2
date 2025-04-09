import { Link } from 'react-router-dom';
import { Home, Gift, Coffee, Cake, Building, Bookmark, Clock, ForkKnife, IceCream } from 'lucide-react';
import Customernavbar from './Customernavbar';

const ButtonLayout = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Left Side Buttons */}
      <div className="flex flex-col space-y-4">
        <Link to="/rooms" className="bg-[#FF6347] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <Home size={20} /> Rooms Available
        </Link>
        <Link to="/toys" className="bg-[#32CD32] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <Gift size={20} /> Toys
        </Link>
        <Link to="/juice" className="bg-[#FFD700] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <Coffee size={20} /> Juice
        </Link>
        <Link to="/bakery" className="bg-[#8A2BE2] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <Cake size={20} /> Bakery
        </Link>
        <Link to="/party-hall" className="bg-[#DC143C] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <Building size={20} /> Party Hall
        </Link>
      </div>

      {/* Facility Section */}
      <div className="flex flex-col items-start text-left mr-auto ml-5">
        <h3 className="text-xl font-semibold mb-2">Facility</h3>
        <ul className="list-none">
          <li>Time Pass</li>
          <li>Service's</li>
          <li>Parking</li>
          <li>Security</li>
          <li>Spa</li>
        </ul>
      </div>

      {/* Right Side Buttons */}
      <div className="flex flex-col space-y-4">
        <Link to="/starters" className="bg-[#20B2AA] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <Bookmark size={20} /> Starters
        </Link>
        <Link to="/breakfast" className="bg-[#FF1493] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <Clock size={20} /> Breakfast
        </Link>
        <Link to="/lunch" className="bg-[#FF4500] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <ForkKnife size={20} /> Lunch
        </Link>
        <Link to="/dinner" className="bg-[#8B4513] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <ForkKnife size={20} /> Dinner
        </Link>
        <Link to="/dessert" className="bg-[#9400D3] text-white p-2 mt-10 rounded-md hover:bg-[#4A5568] flex items-center gap-3">
          <IceCream size={20} /> Dessert
        </Link>
      </div>
    </div>
  );
};

const Customerfrontpage = () => {
  return (
    <div>
      <Customernavbar />
      <ButtonLayout />
    </div>
  );
};

export default Customerfrontpage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronDown, ChevronUp, Hotel, Package, CreditCard, Globe, Store, LayoutDashboard, ToyBrick, Utensils 
} from "lucide-react";

const Sidebar = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const [openToys, setOpenToys] = useState(false);
  const [openEatingThings, setOpenEatingThings] = useState(false);
  const [openPayment, setOpenPayment] = useState(false); // Ensure this is initialized
  const [openOnlineSubmenu, setOpenOnlineSubmenu] = useState(false);
  const [openOfflineSubmenu, setOpenOfflineSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-56 fixed h-screen bg-gray-800 text-white p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          {/* Rooms */}
          <li className="p-2 flex items-center gap-2 hover:bg-gray-700 rounded">
            <Hotel size={18} color="#D69E2E" /> Rooms
          </li>

          {/* Order Section */}
          <li 
            className="p-2 flex justify-between items-center hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setOpenOrder(!openOrder)}
          >
            <span className="flex items-center gap-2">
              <Package size={18} color="#D69E2E" /> Order
            </span>
            {openOrder ? <ChevronUp size={18} color="#D69E2E" /> : <ChevronDown size={18} color="#D69E2E" />}
          </li>
          
          {openOrder && (
            <ul className="pl-6 space-y-1">
              {/* Toys */}
              <li 
                className="p-2 flex justify-between items-center hover:bg-gray-700 rounded cursor-pointer"
                onClick={() => setOpenToys(!openToys)}
              >
                <span className="flex items-center gap-2">
                  <ToyBrick size={16} color="#D69E2E" /> Toys
                </span>
                {openToys ? <ChevronUp size={16} color="#D69E2E" /> : <ChevronDown size={16} color="#D69E2E" />}
              </li>

              {openToys && (
                <ul className="pl-6 space-y-1">
                  {/* Online Order for Toys */}
                  <li 
                    className="p-2 flex items-center gap-2 hover:bg-gray-700 rounded cursor-pointer"
                    onClick={() => handleNavigate("/toys/online")} // Navigate to online toys page
                  >
                    <Globe size={14} color="#D69E2E" /> Online
                  </li>

                  {/* Offline Order for Toys */}
                  <li 
                    className="p-2 flex items-center gap-2 hover:bg-gray-700 rounded cursor-pointer"
                    onClick={() => handleNavigate("/toys/offline")} // Navigate to offline toys page
                  >
                    <Store size={14} color="#D69E2E" /> Offline
                  </li>
                </ul>
              )}

              {/* Eating Things */}
              <li 
                className="p-2 flex justify-between items-center hover:bg-gray-700 rounded cursor-pointer"
                onClick={() => setOpenEatingThings(!openEatingThings)}
              >
                <span className="flex items-center gap-2">
                  <Utensils size={16} color="#D69E2E" /> Eating Things
                </span>
                {openEatingThings ? <ChevronUp size={16} color="#D69E2E" /> : <ChevronDown size={16} color="#D69E2E" />}
              </li>

              {openEatingThings && (
                <ul className="pl-6 space-y-1">
                  {/* Online Order for Eating Things */}
                  <li 
                    className="p-2 flex items-center gap-2 hover:bg-gray-700 rounded cursor-pointer"
                    onClick={() => handleNavigate("/eating-things/online")} // Navigate to online eating things page
                  >
                    <Globe size={14} color="#D69E2E" /> Online
                  </li>

                  {/* Offline Order for Eating Things */}
                  <li 
                    className="p-2 flex items-center gap-2 hover:bg-gray-700 rounded cursor-pointer"
                    onClick={() => handleNavigate("/eating-things/offline")} // Navigate to offline eating things page
                  >
                    <Store size={14} color="#D69E2E" /> Offline
                  </li>
                </ul>
              )}
            </ul>
          )}

          {/* Mode of Payment */}
          <li 
            className="p-2 flex justify-between items-center hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setOpenPayment(!openPayment)} // No errors here if the state is properly initialized
          >
            <span className="flex items-center gap-2">
              <CreditCard size={18} color="#D69E2E" /> Mode of Payment
            </span>
            {openPayment ? <ChevronUp size={18} color="#D69E2E" /> : <ChevronDown size={18} color="#D69E2E" />}
          </li>
          
          {openPayment && (
            <ul className="pl-6 space-y-1">
              <li 
                className="p-2 flex items-center gap-2 hover:bg-gray-700 rounded cursor-pointer"
                onClick={() => handleNavigate("/payment-online")} // Navigate to online payment page
              >
                <Globe size={16} color="#D69E2E" /> Online
              </li>
              <li 
                className="p-2 flex items-center gap-2 hover:bg-gray-700 rounded cursor-pointer"
                onClick={() => handleNavigate("/payment-offline")} // Navigate to offline payment page
              >
                <Store size={16} color="#D69E2E" /> Offline
              </li>
            </ul>
          )}
        </ul>
      </div>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate("/admin/dashboard")}
        className="bg-[#D69E2E] hover:bg-[#B8860B] text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 w-full mt-4"
      >
        <LayoutDashboard size={18} color="white" />
        Back to Dashboard
      </button>
    </div>
  );
};

export default Sidebar;

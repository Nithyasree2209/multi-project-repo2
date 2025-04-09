import { Link } from "react-router-dom";
import backimage from "../assets/f2.jpg";
import photo from "../assets/FPGirl.png";

function Front() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backimage})` }}
    >
      <div className="w-80 p-6 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
        <img className="w-32 h-32 rounded-full shadow-lg" src={photo} alt="Profile" />
        <p className="mt-4 text-center">Welcome as Admin</p>
        
        {/* Navigate to Dashboard on Login */}
        <Link to="/dashboard" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Login
        </Link>
      </div>

      <div className="w-80 p-6 ml-10 bg-white text-purple-950 rounded-lg shadow-md flex flex-col items-center">
        <img className="w-32 h-32 rounded-full shadow-lg" src={photo} alt="Profile" />
        <p className="mt-4 text-center">Welcome as Employee</p>
        
        {/* Navigate to Dashboard on Login */}
        <Link to="/login" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Login
        </Link>
      </div>
      <div className="w-80 p-6 bg-white ml-10 text-purple-950 rounded-lg shadow-md flex flex-col items-center">
        <img className="w-32 h-32 rounded-full shadow-lg" src={photo} alt="Profile" />
        <p className="mt-4 text-center">Welcome as Customer</p>
        
        {/* Navigate to Dashboard on Login */}
        <Link to="/customerfrontpage" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Welcome
        </Link>
      </div>
    </div>
  );
}

export default Front;

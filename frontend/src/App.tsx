import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from "./Front/Front";
import Dashboard from "../src/admin/Dashboard"
import Employee from "./admin/Employee";
import Things from "./admin/Things";
import Add from "./admin/Add";
import Raw from "./admin/Raw";
import Salary from "./admin/Salary";
import Elecrticity from "./admin/Elecrticity";
import Leave from "./admin/Leave";
import Addemployee from "./admin/Addemployee";
import Createmenu from "./admin/Createmenu";
// import { View } from "lucide-react";
import ThingsForm from "./admin/Thingsform ";
import Login from "./employee/Login";
import Dashboardd from "./employee/Dashboard";
import Profile from "./employee/Profile";
import Leavee from "./employee/Leave";
import Salarydetails from "./employee/Salarydetails";
// import Others from "./admin/Others";
import Expences from "./employee/Expences";
import Customerfrontpage from "./customer/Customerfrontpage";
import Rooms from "./customer/Rooms";
import BookingForm from "./customer/Bookingform";
import Toys from "./customer/Toys";
import UserForm from "./customer/Userform";
import Juice from "./customer/Juice";
import JuiceOrderForm from "./customer/Juiceorderform";
import Room from "./others/Room";
import Online from "./others/toys/Online";
import Offline from "./others/toys/Offline";
import Offlinee from "./others/eatingthings/Offlinee";
import OnlineOrderrs from "./others/eatingthings/Onlinee";
import BakeryForm from "./customer/Bakeryform";
import Bakery from "./customer/Bakery";
import Partyhall from "./customer/Partyhall";
import HallForm from "./customer/Hallform";
import Starters from "./customer/Starters";
import Statersform from "./customer/Statersform";
import Offlineee from "./others/bakery/Offlineee";
import Onlineee from "./others/bakery/Onlineee";
// import LeaveForm from "./employee/Leaveform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Front Page (Login) */}
        <Route path="/" element={<Front />} />

        {/* Dashboard (Admin Panel) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/employee" element={<Employee />} />
        <Route path="/admin/things" element={<Things />} />
        <Route path="/admin/advertisement" element={<Add />} />
        <Route path="/admin/raw-material" element={<Raw />} />
        <Route path="/admin/salary" element={<Salary />} />
        <Route path="/admin/electricity-bill" element={<Elecrticity />} />
        {/* <Route path="/admin/others" element={<Others />} /> */}
        <Route path="/admin/leave" element={<Leave />} />
        <Route path="/add-employee" element={<Addemployee />} />--------------------------------------------------------------------------------------------
        <Route path="/add-menu" element={<Createmenu />} />
        {/* <Route path="/view" element={<View />} /> */}
        <Route path="/add-things" element={<ThingsForm />} />
        <Route path="/login" element={<Login />} />
                {/* Dashboard (Employee Panel) */}
        <Route path="/employee/dashboard" element={<Dashboardd />} />
        <Route path="/employee/leaveform" element={<Leavee />} />
        <Route path="/my-profile" element={<Profile/>} />
        <Route path="/leave-formm" element={<Leavee/>} />
        <Route path="/employee/salary-details" element={<Salarydetails/>} />
        <Route path="/employee/expences" element={<Expences/>} />
        {/* <Route path="/leave-form" element={<LeaveForm/>} /> */}
        <Route path="/Customerfrontpage" element={<Customerfrontpage />}/>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/juice" element={<Juice />} />
        <Route path="/juiceorderform" element={<JuiceOrderForm />} />
        <Route path="/admin/others" element={<Room />} />
        <Route path="/toys/online" element={<Online />} />
        <Route path="/toys/offline" element={<Offline />} />
        <Route path="/eating-things/offline" element={<Offlinee />} />
        {/* <Route path="/eating-things/online" element={<Onlinee />} /> */}
        {/* <Route path="/eatingthings/online" element={< />} /> */}
        <Route path="/eating-things/online" element={<OnlineOrderrs />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/bakeryform" element={<BakeryForm />} />
        <Route path="/party-hall/hallform" element={<HallForm />} />
        <Route path="/starters" element={<Starters />} />
        <Route path="/starters/hallform" element={<Statersform />} />
        <Route path="/bakery/offline" element={<Offlineee />} />
        <Route path="/bakery/online" element={<Onlineee />} />
        <Route path="/partyhall/partyhall" element={<Partyhall />} />
        {/* <Route path="/staters/onlineeee" element={< />} /> */}



        <Route path="/party-hall" element={<Partyhall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

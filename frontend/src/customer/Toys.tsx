
import { useNavigate } from "react-router-dom";
import ToyCard from "../components/toycard"; // Updated import
import CustomerNavbar from "./Customernavbar";
import train from "../assets/train.png";
import doll from "../assets/doll1.png";
import teddy from "../assets/teddybear.jpg";
import aero from "../assets/aero.png";
import car from "../assets/car.png";
import drums from "../assets/drums.png";

function Toys() {
  const navigate = useNavigate();

  const toys = [
    { image: train, title: "Train", price: "5", rating: "*****" },
    { image: doll, title: "Doll", price: "4", rating: "*****" },
    { image: teddy, title: "Teddy Bear", price: "7", rating: "*****" },
    { image: drums, title: "Drums", price: "8", rating: "*****" },
    { image: aero, title: "Aeroplane", price: "6", rating: "*****" },
    { image: car, title: "Car", price: "3", rating: "*****" },
  ];

  return (
    <div>
      <CustomerNavbar />
      <div className="grid grid-cols-4 gap-4 p-4">
        {toys.map((toy, index) => (
          <div
            key={index}
            onClick={() => navigate("/Userform", { state: { toy } })}
            className="cursor-pointer"
          >
            <ToyCard image={toy.image} title={toy.title} price={toy.price} rating={toy.rating} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toys;

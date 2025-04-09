import ProductCard from "../components/Productcard";
import CustomerNavbar from "./Customernavbar";
import beat from "../assets/beatroot.png";
import coconut from "../assets/coconut.jpg";
import pine from "../assets/Pineapple Juice.jpg";
import fruit from "../assets/fruit juice.png";
import apple from "../assets/apple.jpg"
import mango from "../assets/mango.jpg"
import grape from "../assets/grape.jpg"
import guava from "../assets/guava.jpg"

function Juice() {
  return (
    <div>
      <CustomerNavbar />
      <div className="grid grid-cols-4 gap-4 p-4">
        <ProductCard image={beat} title="Beatroot Juice" price="8" rating="*****" link="/juiceorderform" />
        <ProductCard image={coconut} title="Coconut Juice" price="8" rating="*****" link="/juiceorderform" />
        <ProductCard image={pine} title="Pineapple Juice" price="8" rating="*****" link="/juiceorderform" />
        <ProductCard image={fruit} title="Fruit Juice" price="8" rating="*****" link="/juiceorderform" />
        <ProductCard image={apple} title="Apple Juice" price="8" rating="*****" link="/juiceorderform" />
        <ProductCard image={mango} title="Mango Juice" price="8" rating="*****" link="/juiceorderform" />
        <ProductCard image={grape} title="Grape Juice" price="8" rating="*****" link="/juiceorderform" />
        <ProductCard image={guava} title="Guava Juice" price="8" rating="*****" link="/juiceorderform" />
      </div>
    </div>
  );
}

export default Juice;

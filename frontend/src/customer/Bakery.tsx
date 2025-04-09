import CustomerNavbar from "./Customernavbar"
import ProductCard from "../components/Productcard"
import bread from "../assets/bread.png"
import donut from "../assets/donut.png"
import macarrons from "../assets/Macarrons 🍭.jpg"
import pizza from "../assets/pizza.png"
import cookie from "../assets/cookie.png"
import cake from "../assets/cake.png"

function Bakery() {
  return (
    <div>
        <CustomerNavbar />
        <div className="grid grid-cols-4 gap-4 p-4">
        <ProductCard image={bread} title="Bread" price="8" rating="*****" link="/bakeryform" />
        <ProductCard image={donut} title="Donut" price="8" rating="*****" link="/bakeryform" />
        <ProductCard image={macarrons} title="Macarron" price="8" rating="*****" link="/bakeryform" />
        <ProductCard image={pizza} title="Pizza" price="8" rating="*****" link="/bakeryform" />
        <ProductCard image={cookie} title="Cookie" price="8" rating="*****" link="/bakeryform" />
        <ProductCard image={cake} title="Cookie" price="8" rating="*****" link="/bakeryform" />
        </div>

    </div>
  )
}

export default Bakery
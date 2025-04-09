import CustomerNavbar from "./Customernavbar"
import HallCard from "../components/hallcard"
import vsoup from "../assets/vsoup.png"
import cpanieer from "../assets/cpanieer.png"
import spring from "../assets/springriolls.png"
import ppokora from "../assets/ppakora.png"
import pcball from "../assets/pcball.png"
import ptikks from "../assets/ptikka.png"
import aloopakora from "../assets/aloopakora.jpg"
import chicken from "../assets/Chicken65.jpg"

function Starters() {
  return (
    <div>
      <CustomerNavbar />

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <HallCard
            image={vsoup}
            title="Vegetable Soup"
            description="Vegetable soup offers numerous health benefits, including boosting digestion, aiding weight management, providing essential nutrients, and promoting hydration."
            navigateTo="hallform"
          />
          <HallCard
            image={cpanieer}
            title="Chilli Paneer"
            description="Chilli Paneer offers several health benefits, including being a good source of protein and calcium, essential for strong bones and muscles, and can be a filling meal."
            navigateTo="hallform"
          />
          <HallCard
            image={spring}
            title="Spring Rolls"
            description="Spring rolls, especially those with fresh vegetables and lean protein, can be a healthy and nutritious option, offering benefits like being low in calories, high in fiber, and providing essential vitamins and minerals."
            navigateTo="hallform"
          />
          <HallCard
            image={ppokora}
            title="Paneer Pakoda"
            description="The paneer pakora is deep fried. Any food that is deep fried is not suitable for healthy living. Your fat levels increase as deep frying increases oil absorption."
            navigateTo="hallform"
          />
           <HallCard
            image={pcball}
            title="Potato Cheese Balls"
            description="Potato cheese balls offer a delicious and satisfying snack, rich in carbohydrates for energy and containing vitamins and minerals like potassium and vitamin C."
            navigateTo="hallform"
          />
          <HallCard
            image={ptikks}
            title="Paneer Tikka"
            description="Paneer tikka, made with protein-rich paneer and often grilled, offers numerous health benefits, including being a good source of protein, calcium, and aiding in weight management and muscle building."
            navigateTo="hallform"
          />
          <HallCard
            image={aloopakora}
            title="Aloo Pakoda"
            description="Aloo pakoda, a popular Indian snack, can offer some nutritional benefits, including being a source of fiber and protein, and containing essential vitamins and minerals like vitamin C and A."
            navigateTo="hallform"
          />
           <HallCard
            image={chicken}
            title="Chicken 65"
            description="Chicken 65, a popular South Indian dish, offers nutritional benefits like being a good source of protein and containing vitamins and minerals, and can be part of a balanced diet when prepared healthily."
            navigateTo="hallform"
          />
        </div>
      </div>
    </div>
  )
}

export default Starters

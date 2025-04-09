import HallCard from "../components/hallcard";
import CustomerNavbar from "./Customernavbar";
import hall1 from "../assets/hall1.0.jpg"
import hall2 from "../assets/hall1.1.jpg"
import hall3 from "../assets/hall1.2.jpg"
import hall4 from "../assets/hall2.0.jpg"
import hall5 from "../assets/hall2.1.jpg"
import hall6 from "../assets/hall2.2.jpg"

function Partyhall() {
  return (
    <div>
      <CustomerNavbar />

      {/* Centered and Bold h1 */}
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold my-4">Party Hall 1</h1> 
      </div>

      {/* Hall Cards in a Row */}
      <div className="flex justify-start gap-6 px-10">
        <HallCard
          image={hall2}
          title="Party Hall"
          description="Party halls, or banquet halls, offer several benefits for hosting events, including convenience, spaciousness, professional services, and the ability to create a memorable experience, all while often being budget-friendly."
          navigateTo="hallform"
        />
        <HallCard
          image={hall1}
          title="Party Hall"
          description="Party halls, or banquet halls, offer several benefits for hosting events, including convenience, spaciousness, professional services, and the ability to create a memorable experience, all while often being budget-friendly."
          navigateTo="hallform"
        />
         <HallCard
          image={hall3}
          title="Party Hall"
          description="Party halls, or banquet halls, offer several benefits for hosting events, including convenience, spaciousness, professional services, and the ability to create a memorable experience, all while often being budget-friendly."
          navigateTo="hallform"
        />
      </div>
            {/* Centered and Bold h1 */}
            <div className="flex justify-center">
        <h1 className="text-2xl font-bold my-4">Party Hall 1</h1> 
      </div>

      {/* Hall Cards in a Row */}
      <div className="flex justify-start gap-6 px-10">
        <HallCard
          image={hall4}
          title="Party Hall"
          description="Party halls, or banquet halls, offer several benefits for hosting events, including convenience, spaciousness, professional services, and the ability to create a memorable experience, all while often being budget-friendly."
          navigateTo="hallform"
        />
        <HallCard
          image={hall5}
          title="Party Hall"
          description="Party halls, or banquet halls, offer several benefits for hosting events, including convenience, spaciousness, professional services, and the ability to create a memorable experience, all while often being budget-friendly."
          navigateTo="hallform"
        />
         <HallCard
          image={hall6}
          title="Party Hall"
          description="Party halls, or banquet halls, offer several benefits for hosting events, including convenience, spaciousness, professional services, and the ability to create a memorable experience, all while often being budget-friendly."
          navigateTo="hallform"
        />
      </div>
    </div>
  );
}

export default Partyhall;

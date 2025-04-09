import { useEffect, useState } from "react";

interface Menu {
  _id: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

function MenuTable() {
  const [menuList, setMenuList] = useState<Menu[]>([]);

  // Fetch menu data when component loads
  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((response) => response.json())
    //   .then((data) => setMenuList(data))
    .then((data) => {
        console.log("Fetched Menu Data:", data); // Debugging
        setMenuList(data);
      })
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Created Menus</h2>
      
      {menuList.length === 0 ? (
        <p className="text-gray-500">No menu available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Breakfast</th>
              <th className="border p-2">Lunch</th>
              <th className="border p-2">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {menuList.map((menu) => (
              <tr key={menu._id} className="text-center">
                <td className="border p-2">{menu.breakfast}</td>
                <td className="border p-2">{menu.lunch}</td>
                <td className="border p-2">{menu.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MenuTable;

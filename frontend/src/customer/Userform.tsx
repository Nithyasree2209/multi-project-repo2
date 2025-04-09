
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // To access location.state
import CustomerNavbar from "./Customernavbar";

const UserForm: React.FC = () => {
  // State for form data
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [orderType, setOrderType] = useState<string>("");
  const [paymentType, setPaymentType] = useState<string>("");
  const [rating, setRating] = useState<number>(0); // Rating as a number
  const [toyImage, setToyImage] = useState<string>("");
  const [toyTitle, setToyTitle] = useState<string>("");
  const [toyPrice, setToyPrice] = useState<string>("");
  const [toyRating, setToyRating] = useState<string>("");

  // Get the toy details from location state
  const location = useLocation();
  const { toy } = location.state || {};

  // If a toy is passed from the previous page, set the toy details
  useEffect(() => {
    if (toy) {
      setToyImage(toy.image);
      setToyTitle(toy.title);
      setToyPrice(toy.price);
      setToyRating(toy.rating);
    }
  }, [toy]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create form data object
    const formData = {
      name,
      address,
      phone,
      orderType,
      paymentType,
      toy: {
        image: toyImage,
        title: toyTitle,
        price: toyPrice,
        rating, // Numeric rating
      },
    };

    console.log("Form Data Submitted:", formData);

    try {
      // Send data to the backend
      const response = await fetch("http://localhost:5000/api/orders/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Internal server error");
    }
  };

  // Handle rating change
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!isNaN(value) && value >= 0 && value <= 5) {
      setRating(value); // Update rating with numeric value
    }
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="container mx-auto p-4 flex">
        <div className="w-2/3">
          <h2 className="text-2xl font-bold mb-4">Order Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name input */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium">
                <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 pl-10 w-3/4 border rounded-md"
              />
            </div>

            {/* Address input */}
            <div className="relative">
              <label htmlFor="address" className="block text-sm font-medium">
                <i className="fas fa-home absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                Address:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="mt-1 p-2 pl-10 w-3/4 border rounded-md"
              />
            </div>

            {/* Phone input */}
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-medium">
                <i className="fas fa-phone-alt absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 p-2 pl-10 w-3/4 border rounded-md"
              />
            </div>

            {/* Order Type input */}
            <div className="relative">
              <label htmlFor="orderType" className="block text-sm font-medium">
                <i className="fas fa-cogs absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                Order Type:
              </label>
              <select
                id="orderType"
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                required
                className="mt-1 p-2 pl-10 w-3/4 border rounded-md"
              >
                <option value="">Select</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            {/* Payment Type input */}
            <div className="relative">
              <label htmlFor="paymentType" className="block text-sm font-medium">
                <i className="fas fa-credit-card absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                Payment Type:
              </label>
              <select
                id="paymentType"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                required
                className="mt-1 p-2 pl-10 w-3/4 border rounded-md"
              >
                <option value="">Select</option>
                <option value="Online">Online</option>
                <option value="Cash">Cash</option>
              </select>
            </div>

            {/* Rating input */}
            <div className="relative">
              <label htmlFor="rating" className="block text-sm font-medium">
                <i className="fas fa-star absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                Rating (1 to 5):
              </label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={handleRatingChange}
                min="0"
                max="5"
                required
                className="mt-1 p-2 pl-10 w-3/4 border rounded-md"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Submit Order
            </button>
          </form>
        </div>

        {/* Toy Details Card */}
        <div className="w-1/3 p-4">
          <h3 className="text-xl font-semibold mb-4">Selected Toy</h3>
          <div className="bg-white p-4 border rounded-md">
            <img
              src={toyImage || "path/to/default/image.jpg"} // Fallback image if toyImage is empty
              alt={toyTitle}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h4 className="text-lg font-semibold">{toyTitle}</h4>
            <p>Price: ${toyPrice}</p>
            <p>Rating: {toyRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

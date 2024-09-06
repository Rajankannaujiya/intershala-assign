import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from './Alert'; // Assuming you have your Alert component
import Button from './Button'; // Assuming you have a Button component

const CreateComp = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    website: "",
    phoneNumber: ""
  });

  const [alert, setAlert] = useState("");  // For showing alert messages
  const [isClick, setIsClick] = useState(false);
  const [success,setSucess] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,  // Dynamically update user fields
    });
  };

  // creating a new user
  const hanleCreateUser = async () => {
    setIsClick(true);
    try {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, user);
      if (response) {
        setSucess(true)
        setAlert("User created successfully!");  // Success message
        setTimeout(() => {
          navigate("/");  // Navigate back to home after success
        }, 1500);
      }
    } catch (error) {
      console.log("An error occurred", error);
      setAlert("Unable to create user");  // Error message
    } finally {
      setIsClick(false);  // Reset button click state
      setSucess(false)
    }
  };

  return (
    <div className="mt-11 flex justify-center">
      {/* Show Alert only when there's a message */}
      {alert && (
        <Alert textColor="text-white" bgColor={`${success ? "bg-green-500": "bg-red-500"}`} alertType={`${success ? "success" : "Error"}`} alertContent={alert} />
      )}
      
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <h5 className="text-xl font-medium text-gray-900">Create New User</h5>

        <div className="mt-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input
            type="text"
            value={user.name}
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
          <input
            type="text"
            value={user.username}
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Username"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Website</label>
          <input
            type="text"
            value={user.website}
            name="website"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Website URL"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
          <input
            type="number"
            value={user.phoneNumber}
            name="phoneNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <Button buttonFor="Submit" colour="green" onClick={hanleCreateUser} isClicked={isClick} />
        </div>
      </div>
    </div>
  );
};

export default CreateComp;

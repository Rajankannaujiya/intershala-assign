import  { useState } from 'react'
import Button from './Button'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import Alert from './Alert';

function EditComp() {

  const [success,setSucess] = useState(false)
  const [user, setUser] = useState({
    name: "",
    username: "",
    website: "",
    phoneNumber: 0,
  });
  const [isClick,setIsClick] = useState(false);
  const [alert, setAlert] = useState<string | null>(null);

  const navigate = useNavigate();

  const {id} = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value, // Dynamically update the correct field
    });
  };

  console.log(user + "user")

  // editing a particular user by its id
  async function editUser(id:number){
    setIsClick(true)
    try {
     const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
     if (response) {
       setAlert("User Edited successfully!")
       setSucess(true)
       navigate("/")
     }
    } catch (error) {
     console.log("an error has been occured",error);
     setAlert("Unable to Edit User")
     
   }
   finally{
     setIsClick(false)
     setSucess(false)
   }
     
   }

   const handleEdituser= () => {
    editUser(Number(id)); // Ensure `id` is passed as a number
  };

  return (
    <div className='mt-11 flex justify-center'>
 {alert && (
        <Alert textColor="text-white" bgColor={`${success ? "bg-green-500": "bg-red-500"}`} alertType={`${success ? "success" : "Error"}`} alertContent={alert} />
      )}
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <h5 className="text-xl font-medium text-gray-900 ">Edit User</h5>
            <div className='mt-2'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">name</label>
                <input type="text" value={user.name} name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name" required onChange={handleChange}/>
            </div>
            <div className='mt-2'>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">username</label>
                <input type="text" value={user.username} name="username"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="username" required  onChange={handleChange}/>
            </div>
            <div className='mt-2'>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">website</label>
                <input type="text" value={user.website} name="website"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="website url" required  onChange={handleChange}/>
            </div>
            <div className='mt-2'>
                <label htmlFor="phoneNo." className="block mb-2 text-sm font-medium text-gray-900 ">phone no.</label>
                <input type="number" value={user.phoneNumber} name="phoneNumber"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="phone number" required  onChange={handleChange}/>
            </div>

            <div>
              <Button buttonFor={'Submit'} colour={'green'} onClick={handleEdituser} isClicked={isClick} />
            </div>
    </div>
    </div>
  )
}

export default EditComp
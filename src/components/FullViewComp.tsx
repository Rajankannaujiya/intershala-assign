import axios from "axios"
import Button from "./Button"
import Alert from "./Alert"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"


interface Geo{
    lat: string,
    lng: string
}
interface Address{
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo:Geo
}

interface Company{
  name:string,
  catchPhrase: string,
  bs: string
}
interface UserInfo {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
};
function FullViewComp({user}:{user:UserInfo |null}) {

  const [success,setSucess] = useState(false)
  const [isClick,setIsClick] = useState(false);
  const [alert, setAlert] = useState<string | null>(null);

  const navigate = useNavigate();

  // getting the id from the parameter
  const {id} = useParams()


  // deleting the a user by its id
  async function  handleDelete(id:number) {
    setIsClick(true)
   try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.status === 200) {
      setAlert("User deleted successfully!")
      setSucess(true)
      navigate("/")
    }
   } catch (error) {
    console.log("an error has been occured",error);
    setAlert("Unable to delete User")
  }
  finally{
    setIsClick(false)
    setSucess(false)
  }
    
  }
  const handleDeleteClick = () => {
    handleDelete(Number(id)); // Ensure `id` is passed as a number
  };


  return (
   (user && <div className="w-full p-6 shadow-md rounded-lg bg-white max-w-4xl mx-auto border-b-1 m-2" key={user.id}>
{alert && (
        <Alert textColor="text-white" bgColor={`${success ? "bg-green-500": "bg-red-500"}`} alertType={`${success ? "success" : "Error"}`} alertContent={alert} />
      )}
  <div className="flex flext col sm:flex-row justify-between">
  <h2 className="text-2xl font-bold mb-4 text-center ">User: {user.name}</h2>
    <div className="mt-0 mb-4 flex">
      <div className="mx-2">
      <Button buttonFor={"Edit"} colour={"gray"} onClick={()=>{
        navigate(`/edit/${id}`)
      }}/>
      </div>
   
      <div className="mx-2">
      <Button buttonFor={"Delete"} colour={"red"} onClick={handleDeleteClick} isClicked={isClick}/>
      </div>
    </div>
  </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <h3 className="font-semibold text-lg">Personal Info</h3>
            <p><span className="font-medium">Name: </span>{user.name}</p>
            <p><span className="font-medium">Username: </span>{user.username}</p>
            <p><span className="font-medium">Email: </span>{user.email}</p>
            <p><span className="font-medium">Phone: </span>{user.phone}</p>
            <p><span className="font-medium">Website: </span>{user.website}</p>
        </div>
        <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p><span className="font-medium">Street: </span>{user.address.street}</p>
            <p><span className="font-medium">Suite: </span>{user.address.suite}</p>
            <p><span className="font-medium">City: </span>{user.address.city}</p>
            <p><span className="font-medium">Zipcode: </span>{user.address.zipcode}</p>
        </div>
        <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <p><span className="font-medium">Name: </span>{user.company.name}</p>
            <p><span className="font-medium">Catch Phrase: </span>{user.company.catchPhrase}</p>
            <p><span className="font-medium">Business: </span>{user.company.bs}</p>
        </div>
        <div>
            <h3 className="font-semibold text-lg">Geolocation</h3>
            <p><span className="font-medium">Latitude: </span>{user.address.geo.lat}</p>
            <p><span className="font-medium">Longitude: </span>{user.address.geo.lng}</p>
        </div>
    </div>
</div>))
}

export default FullViewComp
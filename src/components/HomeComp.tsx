import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";


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
export default function HomeComp() {
    
// fetching all the user and storing in the state variable
    const [users,setUsers] = useState<UserInfo[]|[]>([])

    async function getUsers(){
       try {
         const response =await axios.get('https://jsonplaceholder.typicode.com/users');
         console.log("users",response.data)
         setUsers(response.data)
       } catch (error) {
         console.log("an error has been occured",error);
        
       }
     }
   
    
     useEffect(()=>{
       getUsers()
     },[])


    const navigate = useNavigate();

    if(!users){
      return(
        <div className="fixed h-screen inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50 z-50 mt-11">
        <div className='flex justify-center'>
        <Spinner />
        </div>
      </div>
      )
    }
    return (
    (users && users.map((user:UserInfo)=>(<div className="flex justify-center" key={user.id}>
            <div className="w-full p-4 border-b-2 flex items-start max-w-4xl">
            <div className="space-y-2 w-full">
                <h3 className="text-2xl font-semibold text-left">
                    {user.name}
                </h3>
                <p className="text-gray-600 text-left">
                    {user.username}
                </p>

                <p className="text-gray-600 text-left">
                   <span className="font-semibold">website: </span>
                    {/* <a href={user.website}>{user.website}</a> */}
                    {user.website}
                </p>
            </div>
            <div>
                <Button buttonFor={"View more"} colour={"gray"} onClick={()=>{
                    navigate(`/view/${user.id}`)
                }}/>
            </div>
        </div>
    </div>)))
    );
}

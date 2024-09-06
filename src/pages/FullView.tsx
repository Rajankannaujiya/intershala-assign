import { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import FullViewComp from '../components/FullViewComp'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';



function FullView() {

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


const [user, setUser] = useState<UserInfo | null>(null);


// fetch id from the parameter
  const {id} = useParams()

  async function getOneUser(id: number) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log("an error has been occured",error);
    }
  }


  useEffect(() => {
    // Convert the `id` to a number before calling `getOneUser`
    if (id) {
      getOneUser(Number(id));
    }
  }, [id]);

  // rendering spinner when user is not there

  if(!user){
    return(
      <div className="fixed inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50 z-50 mt-11">
      <div className='flex justify-center'>
      <Spinner />
      </div>
    </div>
    )
  }

  return (
    <div>
      <Appbar />
      <div className='mt-11'><FullViewComp user={user} /></div>
    </div>
  )
}

export default FullView
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import ViewComp from '../components/ViewComp'
import axios from "axios"
import Spinner from "../components/Spinner"


function View() {
  const [users,setUsers] = useState([])

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

  if(!users){
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
      <Appbar/>
      <div className="mt-11">
        <ViewComp users={users} />
      </div>
    </div>
  )
}

export default View
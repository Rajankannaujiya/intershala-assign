import { Link } from "react-router-dom"




function Appbar() {

  return (
    <div className="fixed top-0 right-0 w-full bg-blue-500 p-4 ">
    <div className="flex justify-end m-0 p-0">

        <Link to={"/"} className="bg-gray-200 mx-4 px-4 py-2 rounded-sm hover:bg-gray-300 font-semibold">Home</Link>
        
        <Link to={"/view"} className="bg-gray-200 mx-4 px-4 py-2 rounded-sm hover:bg-gray-300 font-semibold">View</Link>

        <Link to={"/create"} className="bg-gray-200 mx-4 px-4 py-2 rounded-sm hover:bg-gray-300 font-semibold">Create</Link>

    </div>
  </div>
  )
}

export default Appbar
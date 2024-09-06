
import { Link } from "react-router-dom";



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

export default function ViewComp({users}:{users:UserInfo[]}) {
// redering the full details of the users
    return (
        (users && users.map((user)=>(
          <Link to={`${user.id}`}>
        <div className="w-full p-6 shadow-md rounded-lg bg-white max-w-4xl mx-auto border-b-1 m-2" key={user.id}>
            <h2 className="text-2xl font-bold mb-4 text-center">User: {user.name}</h2>
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
        </div>
        </Link>))
        )
    );
}


import HomeComp from '../components/HomeComp'
import Appbar from '../components/Appbar'

function Home() {
  return (
  <div>
       <Appbar />
      
         <div className='mt-11'> 
          <HomeComp/>
          </div>
      
  </div>
  )
}

export default Home
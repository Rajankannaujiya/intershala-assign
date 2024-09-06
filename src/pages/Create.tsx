
import CreateComp from '../components/CreateComp'
import Appbar from '../components/Appbar'

function Create() {
  return (
    <div>
        <Appbar />
      <div className='z-50'>
      <CreateComp/>
      </div>
        </div>
  )
}

export default Create
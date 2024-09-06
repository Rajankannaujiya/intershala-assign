
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import FullView from './pages/FullView'
import Create from './pages/Create'
import Edit from './pages/Edit'
function App() {

  return (
   <>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/view' element={<View />} />
      <Route path='/view/:id' element={<FullView />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/create' element={<Create />} />
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App

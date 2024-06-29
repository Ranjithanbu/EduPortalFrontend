import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'
import About from './pages/About'

import SignUp from './pages/SignUp'
import Login from './pages/Login'

import PageNotFound from './pages/PageNotFound'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CardPage from './pages/CardPage'
import FullDetails from './pages/FullDetails'
import CollegeInfo from './pages/CollegeInfo'
import Footer from './component/Footer'
import Courses from './pages/Courses'


function App() {
  const [count, setCount] = useState(0)
const [user,setUser]=useState('')
  return (
    <>
      <BrowserRouter>
        <Nav user={user} setUser={setUser}/>
        <ToastContainer position='top-center' />
        <div className=''>
          <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
           
            <Route path='/card/:category/:type/:branch' element={<CardPage />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/fullDetails/:id' element={<FullDetails />}>
            <Route index={true}  path='info/:clgId'  element={<CollegeInfo />}/>
            <Route path='courses/:clgIds' element={<Courses />}/>
            </Route>
          </Routes>
        </div>
      
      </BrowserRouter>
    </>
  )
}

export default App

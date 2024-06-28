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
const [findId,setFindId]=useState('')
const [user,setUser]=useState('')
  return (
    <>
      <BrowserRouter>
        <Nav user={user} setUser={setUser}/>
        <ToastContainer position='top-center' />
        <div className=''>
          <Routes> 
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
           
            <Route path='/card/:category/:type' element={<CardPage />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/fullDetails/:id' element={<FullDetails setFindId={setFindId} />}>
<Route index path='' element={<CollegeInfo findId={findId}/>}/>
<Route path='courses' element={<Courses findId={findId}/>}/>
            </Route>
          </Routes>
        </div>
       <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App

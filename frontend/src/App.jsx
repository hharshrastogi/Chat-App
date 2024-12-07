
import { Navigate, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home.jsx'
import Login from './pages/Login/login'
import SignUp from './pages/Signup/signup'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {

  const {auth}= useAuthContext()
  return (
    
    <div className='p-4 h-screen flex items-center justify-center'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to="/" />: <SignUp/>}/>
     </Routes>
     <Toaster/>
    </div>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/SignUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='/administration' element={<AdminPanel/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>,
)

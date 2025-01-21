import {  Route, Routes } from 'react-router'
import React from 'react'

import Layout from '../layouts/Layout'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Admin/Dashboard'
import Manage from '../pages/Admin/Manage'
import Setting from '../pages/Admin/Setting'



function AppRoutes() {
    return (
        <div>
            
            <Routes>
                {/* public */}
                <Route path="/" element={ <Layout /> } >
                    <Route path="/" element={ <Home/> } />
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                {/* private */}
                {/* parent/child  props index is default root of parent */}
                <Route path="admin" element={ <Layout /> } >
                    <Route index element={<Dashboard />} />
                    <Route path="manage" element={ <Manage />} />
                    <Route path="setting" element={ <Setting />} />
                </Route>
            </Routes></div>
    )
}

export default AppRoutes
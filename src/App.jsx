//rfce
import React from 'react'
import { Link, Route,Routes } from 'react-router'

function App() {
  return (
    <div>

      <nav className="flex 
                    justify-between 
                    h-8
                    bg-green-300
                    px-4
                    items-center *:
                    ">
        <div className="flex gap-4"> 
          <Link to='/'> Home </Link> 
          <Link to='about'> About </Link> 
          <Link to='contact'> Contact </Link> 
        </div>
        <div className="flex gap-4"> 
          <Link to='login'> Login </Link> 
          <Link to='register'> Register </Link> 
        </div>
      </nav>

      <Routes>
      {/* public */}
            <Route path="/" element= { <h1>Home</h1>}  />
            <Route path="about" element={ <h1>About</h1>} />
            <Route path="contact" element={ <h1>Contact</h1>} />
            <Route path="login" element={ <h1>Login Page</h1>} />
            <Route path="register" element={ <h1>Register</h1>} />

      {/* private */}
            {/* parent/child  */}
          <Route path="admin"> 
            <Route path="dashboard" element={ <h1>Dashboard Page</h1> }/> 
            <Route path="manage" element={ <h1>Manage Page</h1> } />
            <Route path="setting" element={ <h1>Setting Page</h1>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
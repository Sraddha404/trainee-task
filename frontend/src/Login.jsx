import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
    const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { name, password })
      .then(result => {console.log(result)
        if(result.data === "success"){
            navigate('/details')
        }
       
      })
        .catch(err=> console.log(err))
}
    return (
        <div>
           <div className="bg-white p-3  border-2  border-black w-24">
                <h2>SignIn</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="name">
                    <strong>Name</strong>
                    </label>
                   <input type="text"
                   placeholder="Enter name"
                   //autoComplete="off"
                   name="name"
                   className="form-control rounded-0"
                   onchange= {(e) => setName (e.target.value)}
                   />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="password">
                    <strong>Password</strong>
                    </label>
                   <input type="password"
                   placeholder="Enter password"
                   //autoComplete="off"
                   name="password"
                   className="form-control rounded-0"
                   onchange= {(e) => setPassword (e.target.value)}
                   />
                    </div>

                    < button type="submit" className="btn btn-success w-100 rounded-0">
                        LogIn
                    </button>
                  </form>
                   
            </div>
        </div>
    )
      
    }
export default Login;
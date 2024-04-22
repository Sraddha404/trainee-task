import {useState } from "react";
import {Link} from "react-router-dom"
import axios from axios

function Signup(){
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('', {name,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className="display flex justify-items-center align-items-center mt-32">
            <div className="bg-white p-3  border-2  border-black w-24">
                <h2>SignIn</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="name">
                    <strong>Name</strong>
                    </label>
                   <input type="text"
                   placeholder="Enter name"
                   autoComplete="off"
                   name="name"
                   className="form-control rounded-0"
                   onchange= {(e) => setName (e.target.value)}
                   />
                    </div>

                    {/* <div className="mb-3">
                    <label htmlFor="email">
                    <strong>Email</strong>
                    </label>
                   <input type="text"
                   placeholder="Enter email"
                   autoComplete="off"
                   name="email"
                   className="form-control rounded-0"
                   />
                    </div> */}
                    <div className="mb-3">
                    <label htmlFor="password">
                    <strong>Password</strong>
                    </label>
                   <input type="password"
                   placeholder="Enter name"
                   autoComplete="off"
                   name="password"
                   className="form-control rounded-0"
                   onchange= {(e) => setPassword (e.target.value)}
                   />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        SignIn
                    </button>
                  </form>
                    <p>Already Have an Account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
            </div>
        </div>
    );
}
export default Signup;
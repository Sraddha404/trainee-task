import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/signup', { name, password })
      .then(result => {console.log(result)
        navigate('/login')
      })
        .catch(err=> console.log(err))
}

  return (
    <div className="">
      <div className="">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              //autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onchange={(e) => setName(e.target.value)}
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
            <input
              type="password"
              placeholder="Enter password"
              //autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onchange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            SignIn
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/login"
          className="btn btn-success w-100 rounded-0 border-2 border-red"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
export default Signup;

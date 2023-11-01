import React , {useState} from "react";
import Layout from "./../../Components/Layout/Layout";
import toast from 'react-hot-toast';

import {useNavigate , useLocation} from 'react-router-dom';

import axios from 'axios';
import '../styles/AuthStyle.css';
import { useAuth } from "../../context/auth";

const Login = () => {

    const [email , setemail] = useState("")
    const [password , setpassword] = useState("");
    const [auth , setauth] = useAuth();

    const location = useLocation();

    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post
          ('/api/v1/auth/login', 
          {email , password});
  
          if(res.data.success){
            toast.success(res.data && res.data.message);
            // getting the token and userdetail after login
            setauth({
              ...auth,
              user : res.data.user,
              token : res.data.token,
            });
            // adding to the local storage
            localStorage.setItem('auth',JSON.stringify(res.data));

            navigate(location.state || '/');
            
            console.log(res.data.message);
          }else{
            toast.error(res.data.message);
          }
  
  
        }catch(error){
          console.log(error);
          toast.error("Something went wrong");
        }
      }




    return (
        <Layout title="Register - ecommerce app">
          <div className="form-container">
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
    
              
    
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  // placeholder="Enter email"
                  required
                />
              </div>
    
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  // placeholder="Enter password"
                  required
                />
              </div>
    
              
    
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </Layout>
      );
};

export default Login;

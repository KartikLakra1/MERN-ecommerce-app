import React , {useState} from "react";
import Layout from "./../../Components/Layout/Layout";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/AuthStyle.css';

const Register = () => {

    const [name , setname] = useState("");
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("");
    const [phone , setphone] = useState("");
    const [address , setaddress] = useState("");

    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const res = await axios.post
        ('/api/v1/auth/register', 
        {name , email , password , phone , address});

        if(res.data.success){
          toast.success(res.data.message);
          navigate('/login');
          console.log(res.data);
        }else{
          toast.error("Something went wrong");
        }


      }catch(error){
        console.log(error);
        toast.error("Something went wrong");
      }
    }

  return (
    <Layout title="Register - ecommerce app">
      <div className="form-container">
        <h1>Register page</h1>


        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              // placeholder="Enter name"
              required
            />
          </div>

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

          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              // placeholder="Enter phone number"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              // placeholder="Enter address"
              required
            />
          </div>


          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

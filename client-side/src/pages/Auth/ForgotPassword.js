import React , {useState} from "react";
import Layout from "../../Components/Layout/Layout";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/AuthStyle.css';


const ForgotPassword = () => {

    const [email , setemail] = useState("")
    const [newpassword , setnewpassword] = useState("");
    const [answer , setanswer] = useState("");


    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post
          ('/api/v1/auth/forgot-password', 
          {email , newpassword , answer});
  
          if(res && res.data.success){
            toast.success(res.data && res.data.message);
            
            navigate('/login');
          }else{
            toast.error(res.data.message);
          }
  
  
        }catch(error){
          console.log(error);
          toast.error(error.message);
        }
      }


  return (
    <Layout title={'Forgot password - Ecommerce App'}>
      <div className="form-container">
        <h1>Forgot Password form</h1>

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
            <label htmlFor="exampleInputEmail" className="form-label">
              Enter your favourite sport
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setanswer(e.target.value)}
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
              value={newpassword}
              onChange={(e) => setnewpassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              // placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;

import React , {useState} from "react";
import Layout from "./../../Components/Layout/Layout";

const Register = () => {

    const [name , setname] = useState("");
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("");
    const [phone , setphone] = useState("");
    const [address , setaddress] = useState("");


  return (
    <Layout title="Register - ecommerce app">
      <div className="register">
        <h1>Register page</h1>
        <form>

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
              placeholder="Enter name"
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
              placeholder="Enter email"
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
              placeholder="Enter password"
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
              placeholder="Enter phone number"
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
              placeholder="Enter address"
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

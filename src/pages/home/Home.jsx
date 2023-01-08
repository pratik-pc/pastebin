import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import axios from "axios";


const Home = () => {
  const [time, setTime] = useState(1000)
  const [post, setPost] = useState(null);
  function Submit() {
    if(post != null){
      axios({
        method: 'POST',
        url: `http://localhost:8800/`,
        data: {
          text: `${post}`,
          expireAt: 100,
          createdAt: 1,
        }
        
      }).then(response => {
          setPost(response.data.text)
          const id = response.data._id
          window.location.href=`http://localhost:3000/${id}`
        }, (error) => {
        console.log(error);
      });
    }
  }
  return (
    <div>
    <div>
      <Navbar />
      
    </div>
    <div className="container">
      <textarea type="text" required="true" value={post} onChange={(e) => setPost(e.target.value)} className="textarea"/>
    </div>
      
      <button onClick={() => {Submit()}} className="btn">Create New Paste</button>
    
    </div>
  )
}

export default Home
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

const Result = () => {
  var param = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:8800/${param.id}`,
      
    }).then(response => {
        setPost(response.data.text)
      }, (error) => {
      console.log(error);
    });}, [])

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <p className="paste">{post}</p>
      </div>
    </div>
  )
}


export default Result;
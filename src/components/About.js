import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/support")
  }
  function backHandler(){
    navigate(-1);
  }
  return (
    <div>
    <div>This is About page</div>
    <button onClick={clickHandler}>Move to support page</button>
    <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default About;
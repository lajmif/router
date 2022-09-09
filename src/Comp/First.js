import React from 'react';
import { Link } from'react-router-dom'; 

 const First = () => {
  return (
    <div>
        <h1> First</h1>
        <Link to="Second">take me to the second</Link>
    </div>
  )
};

export default  First ;
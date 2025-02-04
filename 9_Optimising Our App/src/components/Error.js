import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err=useRouteError();
    return (
              <div className='error'>
                <div className="gif">
                  <h1 className="text-center">{err.status}</h1>
                </div>
                <div className="message">
                  <h3 >Look like you're lost</h3>
                  <p>The page you are looking for is not available!</p>
                  <a href="https://full-stack-biriyani.netlify.app/" className="btn">Go to Home</a>
                </div>
                </div>
      
    );
  };
  
  export default Error;
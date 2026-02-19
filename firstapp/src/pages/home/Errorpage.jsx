import React from "react";
import error from "../../assets/images/error.jpg";
const ErrorPage = () => {
    return (
        <div>
            <img 
              src={error} 
              alt="error"
              className="img-fluid w-100"
            />
        </div>
    )
}

export default ErrorPage

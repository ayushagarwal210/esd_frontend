import React from "react";
import Button from 'react-bootstrap/Button';

const goregister = () => {
    window.location.replace("/login")
}
function Home(){
    return(
        <>
        <div className="container text-center card mt-5 p-3">
    <h1><b>Welcome to IIIT Bangalore ERP page</b></h1>
    <Button variant="success" onClick={goregister} className="text-center m-3 ">
        Login
    </Button>
      </div>
      </>
    )
    
}
export default Home;
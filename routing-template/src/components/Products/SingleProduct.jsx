import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  /*const params = useParams();
    console.log("Param: id", params.id);
    */
  //Use Object destructuring
  const { id } = useParams();
  console.log("Param id =", id);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
    //navigate("/products")
  };

  return (
    <div>
      <h2>SingleProduct -{id}</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SingleProduct;

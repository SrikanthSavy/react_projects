import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import axios from "axios";
import apiClient from "../../utils/api-client";
import Loader from "../Common/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [sellers, setSellers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const userApiUrl = "https://jsonplaceholder.typicode.com/users";
  //const userDelApiUrl = "https://jsonplaceholder.typicode.com/users/5";
  useEffect(() => {
    //fetchSellerApi();
    setisLoading(true); //setting loadin indicator
    apiClient
      .get("/users")
      .then((res) => {
        console.log(res.data);
        setSellers(res.data);
        setisLoading(false); //done loading
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
        setErrors(err.message);
      });
  }, []); //since we want to fetch only once, thats why empty [] dependecy

  //////// Usimg Async-Await () way of handling Api calls
  //   const fetchSellerApi = async () => {
  //     setisLoading(true);
  //     try {
  //       const res = await axios.get(userApiUrl);
  //       setSellers(res.data);
  //       setisLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setisLoading(false);
  //       setErrors(err.message);
  //     }
  //   };

  //* Adding a Seller *//
  const addSeller = () => {
    const newSeller = {
      name,
      id: sellers.length + 1,
    };
    setSellers([newSeller, ...sellers]);

    apiClient
      .post("/users", newSeller)
      .then((res) => setSellers([res.data, ...sellers]))
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers); //restoring old sller list
      });
  };

  //Delete Seller
  const deleteSeller = (id) => {
    //UI change - first
    //const updatedSellers = sellers.filter((sel) => sel.id !== id);
    setSellers(sellers.filter((sel) => sel.id !== id));

    //calling API for deleting
    apiClient.delete(`/users/${id}`).catch((err) => {
      setErrors(err.message);
      setSellers(sellers); //restoring old sller list
    });
  };

  //update Seller
  const updateSeller = (seller) => {
    const updatedSeller = {
      ...seller,
      name: seller.name + " Updated!",
    };
    setSellers(sellers.map((s) => (s.id === seller.id ? updatedSeller : s)));

    apiClient.patch(`/users/${seller.id}`, updatedSeller).catch((err) => {
      setErrors(err.message);
      setSellers(sellers); //restoring old sller list
    });
  };

  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addSeller}>Add Seller</button>
      {isLoading && <Loader />}
      {errors && <em>{errors}</em>}
      <table>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.name}</td>
              <td>
                <button onClick={() => updateSeller(seller)}>
                  Update Seller
                </button>
                <button onClick={() => deleteSeller(seller.id)}>
                  Delete Seller
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Sellers;

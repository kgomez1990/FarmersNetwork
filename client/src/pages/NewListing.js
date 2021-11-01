import React, { useState } from "react";
import { QUERY_CATEGORIES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from "../utils/mutations";

function NewListing() {
  const [newProduct, setNewProduct] = useState({
    product: "",
    description: "",
    price: 0.99,
    categoryId: "",
    image: "images/stock-farmer.jpg"
  });
  const {loading,data}=useQuery(QUERY_CATEGORIES);
  
  const [ addProduct, {error}] = useMutation(CREATE_PRODUCT);

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.id]: e.target.value,
    });
  };
  const createNewProduct = async (e) => {
    e.preventDefault()
    try {
      // Execute mutation and pass in defined parameter data as variables
      const {data} =  await addProduct({
        variables: { newProduct },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
    //call mutation 
    //on success redirect user
    window.location.assign("/")
  }
  //   const handleChange = ({ target: {id, value} }) => {
  //     setNewProduct({
  //         ...newProduct,
  //         [id]: value
  //     })
  //   }

  //   const handleChange = (e) => {
  //     if (e.target.id === "product") {
  //       setNewProduct({
  //         ...newProduct,
  //         product: e.target.value,
  //       });
  //     } else {
  //       setNewProduct({
  //         ...newProduct,
  //         description: e.target.value,
  //       });
  //     }
  //   };

  return (
    <div className="textArea">
      <div className="mb-3">
        <label className="form-label">Product</label>
        <input
          type="text"
          className="form-control"
          id="product"
          placeholder="Please Enter Item for Sale"
          onChange={handleChange}
        ></input>
      </div>

      <div className="input-group mb-3">
        
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>

        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
        <div className="input-group-append">
          <span className="input-group-text">.00</span>
        </div>
      </div>

      <div className="form-group">
        <label>Example select</label>
        <select className="form-control" onChange={handleChange} id="categoryId">
          {data && data.categories ? data.categories.map(cat => {
            return (
              <option value={cat._id} key={cat._id}>{cat.name}</option>
            )
          }):""}
        </select>
      </div>

      <pre>{JSON.stringify(newProduct, null, 2)}</pre>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          placeholder="Please Enter Description of Products"
          onChange={handleChange}></textarea>
        <a href="/">
          <button className="productButton" onClick= {createNewProduct} >Post Your Listing</button>
        </a>
      </div>
    </div>
  );
}

export default NewListing;

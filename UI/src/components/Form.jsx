
import React, { useState ,useEffect} from 'react'
import API from '../API_URL'
import axios from 'axios'
function Form({ editItem, setEditItem ,fetchItems}) {
     
  const [formData , setFormData] = useState({
    name:"",
    category:"",
    quantity:"",
    price:"",
  }) 

 useEffect(() => {
    if (editItem) {
      setFormData({
        name: editItem.name,
        category: editItem.category,
        quantity: editItem.quantity,
        price: editItem.price,
      })
    }
  }, [editItem])

  const handleChange = async(e) =>{
    const {name,value} = e.target
    setFormData((prev)=>({
        ...prev,
        [name]:value,
  }))
  }


  
  const handleSubmit = async (e) => {
    e.preventDefault()
     try {
      if (editItem) {
              console.log(API+"/updateItem/"+editItem._id)
        await axios.put(API+"/updateItem/"+editItem._id,formData)

        alert("Item Update Successfully")
        setEditItem(null);
      } else {
      
        await axios.post(API+"/create", formData)
        alert("Data Created Successfully")
        
      }

      setFormData({ name: "", category: "", quantity: "", price: "" });
       fetchItems();
    } catch (error) {
      console.log("Error:", error);
    }
  }

return (
    <form onSubmit={handleSubmit} style={
      {
  background: "white",
  padding: "10px",
  borderRadius: "10px",
  maxWidth: "500px",
  margin: "20px auto",
  boxShadow: "0 4px 8px rgba(0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}}>
      <h3 style={{marginBottom: "15px"}}>
        {editItem ? "Update Item" : "Add Item"}
      </h3>

      <input
        name="name"
        placeholder="Enter Item Name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        name="category"
        placeholder="Enter Category"
        value={formData.category}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        name="quantity"
        placeholder="Enter Quantity"
        value={formData.quantity}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        name="price"
        placeholder="Enter Item Price"
        value={formData.price}
        onChange={handleChange}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        {editItem ? "Update" : "Add"}
      </button>
    </form>
  )
}


const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  fontSize: "14px",
}

const buttonStyle = {
  padding: "10px",
  background: "darkblue",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
}

export default Form


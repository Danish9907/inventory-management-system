import API from "../API_URL"
import axios from "axios"

function Display({ items, fetchItems, setEditItem }) {
  const deleteItem = async (id) => {
    await axios.delete(API + "/deleteItem/" + id)
    fetchItems()
  }

  return (
    <div style={{
  marginTop: "30px",
  padding: "15px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0.1)",
}}>
      <h3 style={{ marginBottom: "10px" }}>Inventory Items</h3>

      <table style={{ width: "100%",}}>
        <thead>
          <tr style={{ 
  background: "darkblue",
  color: "white",
}}>
            <th>Name</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>

    <tbody>
          {items.map((item) => (
            <tr key={item._id} style={{  textAlign: "center",}}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>&#8377;{item.price}</td>
              <td>&#8377;{item.totalValue}</td>
              <td>
                <button
                  style={editBtn}
                  onClick={() => setEditItem(item)}
                >
                  Edit
                </button>
                <button
                  style={deleteBtn}
                  onClick={() => deleteItem(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
    </tbody>
      </table>
    </div>
  )
}


const editBtn = {
  padding: "5px 10px",
  background: "green",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
}

const deleteBtn = {
  padding: "5px 10px",
  background: "red",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
}

export default Display

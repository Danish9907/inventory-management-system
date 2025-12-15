function Dashboard({ items }) {
  const totalItems = items.length

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const totalValue = items.reduce(
    (sum, item) => sum + item.totalValue,
    0
  )

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0.1)",
        textAlign: "center", 
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Dashboard</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Items</h3>
          <p>{totalItems}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Quantity</h3>
          <p>{totalQuantity}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Stock Value</h3>
          <p>&#8377;{totalValue}</p>
        </div>
      </div>
    </div>
  )
}

const cardStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  minWidth: "180px",
  boxShadow: "0 2px 5px rgba(0,0,0.1)",
}

export default Dashboard

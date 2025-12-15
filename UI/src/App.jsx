import { useState, useEffect } from "react"
import axios from "axios"
import API from "./API_URL"
import Form from "./components/Form"
import Display from "./components/DisplayItems"
import Dashboard from "./components/Dashboard"
import "./App.css"

function App() {
  const [items, setItems] = useState([])
  const [editItem, setEditItem] = useState(null)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const filteredItems = items.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchCategory = category
      ? item.category.toLowerCase() === category.toLowerCase()
      : true

    return matchName && matchCategory
  })

  const categories = [...new Set(items.map((item) => item.category))]

  const fetchItems = async () => {
    const res = await axios.get(API + "/fetchAll")
    setItems(res.data)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      
     
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Dashboard items={filteredItems} />

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by item name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <Form
        editItem={editItem}
        setEditItem={setEditItem}
        fetchItems={fetchItems}
      />

      <Display
        items={filteredItems}
        fetchItems={fetchItems}
        setEditItem={setEditItem}
      />
    </div>
  )
}

export default App

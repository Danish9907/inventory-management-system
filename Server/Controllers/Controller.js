import Item from "../models/schema.js"

export const createItem = async (req,res) => {
    const {name, category, quantity, price} = req.body

    if (!name || !category || !quantity || !price) {
      return  res.status(400).json({
            "Message":"Please fill in all fields (Name, Category, Quantity, Price"
        });
    }

    const item = await Item.create({
        name,
        category,
        quantity,
        price
    })
    res.status(201).json({"Items":item,"Message":"Item  created Successfully"})
};


export const getItems = async (req, res) => {
    const Allitems = await Item.find()
    res.status(200).json(Allitems)
};


export const updateItem = async (req, res) => {
    const { id } = req.params
    const item = await Item.findById(id)

    if (!item) {
        res.status(404).json({"message":"Item not found"})
    }

  const updatedItem = await Item.findByIdAndUpdate(
  { _id: id },
  {
    ...req.body,
    totalValue: req.body.quantity && req.body.price
      ? req.body.quantity * req.body.price
      : undefined
  },
  { new: true, runValidators: true }
)
    res.status(200).json(updatedItem)
};


export const deleteItem = async (req, res) => {
    const item = await Item.findById(req.params.id)

    if (!item) {
       return res.status(404).json({"Message":"Item not found"})
    }

    await item.deleteOne()
    res.status(200).json({ "Message": "Item deleted successfully" })
};


export const getSingleItem = async (req, res) => {
    const item = await Item.findById(req.params.id)

    if (!item) {
       return res.status(404).json({
            "Message":"Item not found"
        })
    }

    res.status(200).json(item)
};


const Category = require('../model/Categorymodel');
const Item = require('../model/Itemmodel');

const getCategory = async (req, res) => {
    const { category } = req.params;
    try {
        
        const categoryData = await Category.findOne({ name: category });
        if (!categoryData) {
            return res.status(404).json({ message: "Category not found" });
        }
        const items = await Item.find({ menuId: categoryData.menuId });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err });
    }
};

module.exports = {
    getCategory
};

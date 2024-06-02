const Item = require('../model/Itemmodel');

const getAllItems = async (req, res) => {
    try {
        const result = await Item.find().sort({ createdAt: -1 });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

const getSearchItem = async (req, res) => {
    const { q } = req.query;
    console.log(q)
    try {
        let items;
        if (q) {
            items = await Item.find({ name: { $regex: q, $options: 'i' } });
        } else {
            items = await Item.find();
        }
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: 'No items found!', error: err });
    }
};


const getSingleItem=async(req,res)=>{
    const {id}=req.params;
    try{
        const item=await Item.findById(id)
        res.json(item)
    }
    catch(error){
        res.status(500).json({message:"No items found"})
    }
}

module.exports = {
    getAllItems,getSearchItem,getSingleItem
};

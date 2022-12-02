// const Item = require('../models/Product');

// module.exports = {

// async get_items(req,res) {
//     Item.find().sort({date:-1}).then(items => res.json(items));
// },

// async post_item(req,res) {
//     const newItem = new Item(req.body);
//     newItem.save().then(item => res.json(item));
// },

// async update_item(req,res) {
//     Item.findByIdAndUpdate({_id: req.params.id},req.body).then(function(item){
//         Item.findOne({_id: req.params.id}).then(function(item){
//             res.json(item);
//         });
//     });
// },

// async delete_item (req,res) {
//     Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
//         res.json({success: true});
//     });
// }
// };
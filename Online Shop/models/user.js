const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true }
        }]
    }
})


userSchema.methods.addToCart = function (product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
        return cp.productId.toString() === product._id.toString();
    })
    let newQunatity = 1;
    const updatedCartItems = [...this.cart.items];
    if (cartProductIndex >= 0) {
        newQunatity = this.cart.items[cartProductIndex].quantity + 1;
        updatedCartItems[cartProductIndex].quantity = newQunatity;

    }
    else {
        updatedCartItems.push({
            productId: product._id,
            quantity: newQunatity
        });
    }
    const updatedCart = {
        items: updatedCartItems
    };
    this.cart = updatedCart;
    return this.save();
};

module.exports = mongoose.model('User', userSchema)
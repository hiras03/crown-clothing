export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log(cartItems)
    const existingCartIitem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartIitem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};
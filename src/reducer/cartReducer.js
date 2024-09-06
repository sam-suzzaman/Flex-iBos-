import toast from "react-hot-toast";

const reducerHandler = (prevState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...prevState, loading: true };

        case "UPDATE_STATE_WITH_FETCH_DATA":
            return { ...prevState, cart: action.fetchData, loading: false };

        case "ADD_ITEM_IN_CART":
            const prevCart = prevState.cart;
            let isItemAlreadyInCart = prevCart.find(
                (item) => item._id === action.data._id
            );

            if (isItemAlreadyInCart) {
                toast.error("Already in Cart");
                return prevState;
            } else {
                const newCart = { ...action.data, quantity: 1 };
                const updatedCart = [...prevCart, newCart];

                toast.success("Added to cart");

                localStorage.setItem("furni-cart", JSON.stringify(updatedCart));
                return { ...prevState, cart: updatedCart };
            }

        case "REMOVE_ITEM_FROM_CART":
            const updatedCart = prevState.cart.filter(
                (product) => product._id !== action.ID
            );

            toast.success("Product removed");

            localStorage.setItem("furni-cart", JSON.stringify(updatedCart));
            return { ...prevState, cart: updatedCart };

        case "INCREASE_ITEM_QUANTITY":
            let updatedQuantityCart = prevState.cart.map((product) => {
                if (product._id === action.ID) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });

            localStorage.setItem(
                "furni-cart",
                JSON.stringify(updatedQuantityCart)
            );
            return { ...prevState, cart: updatedQuantityCart };

        case "DECREASE_ITEM_QUANTITY":
            let cartOfNewQuantity = prevState.cart.map((product) => {
                if (product._id === action.ID) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });

            localStorage.setItem(
                "furni-cart",
                JSON.stringify(cartOfNewQuantity)
            );
            return { ...prevState, cart: cartOfNewQuantity };

        case "GET_TOTAL":
            let calculatedData = prevState.cart.reduce(
                (acc, product) => {
                    const { discountPrice, quantity } = product;

                    acc.totalQuantity = acc.totalQuantity + quantity;

                    const itemTotalPrice = quantity * discountPrice;
                    acc.subTotalPrice = acc.subTotalPrice + itemTotalPrice;

                    return acc;
                },
                {
                    totalQuantity: 0,
                    subTotalPrice: 0,
                }
            );

            let { totalQuantity, subTotalPrice } = calculatedData;

            // let tax=10%
            let tax = parseFloat((subTotalPrice * 0.01).toFixed(2));
            let delivery_charge = 0;
            let finalPrice = subTotalPrice + tax + delivery_charge;

            // converting
            subTotalPrice = parseFloat(subTotalPrice.toFixed(2));
            finalPrice = parseFloat(finalPrice.toFixed(2));

            return {
                ...prevState,
                totalQuantity,
                subTotalPrice,
                finalPrice,
                tax,
            };

        default:
            return prevState;
    }
};

// exporting
export default reducerHandler;

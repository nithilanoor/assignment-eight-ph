import { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { getStoredCartItems } from "../utility/addToDb";
import CartItem from "../CartItem/CartItem";
import { useLoaderData } from "react-router-dom";

const Cart = () => {

    // cart items

    // const [cartItems, setCartItems] = useState([]);

    // const allGadgets = useLoaderData();
    // useEffect(() => {
    //     const storedCartItems = getStoredCartItems();

    //     console.log(storedCartItems, allGadgets);

    //     const cartGadgets = allGadgets.filter(gadget => storedCartItems.includes(gadget.product_id));

    //     setCartItems(cartGadgets);

    // }, [])

    return (
        <div>
            <div className="flex justify-between items-centers my-12">
                <h3 className="text-3xl font-bold">Cart</h3>
                <div className="flex gap-4 justify-center items-center">
                    <h3 className="text-xl font-bold">Total cost: </h3>
                    <button className="border border-[#9538E2] text-[#9538E2] font-bold rounded-full p-1 px-4 hover:bg-[#f7ecff] flex justify-center items-center gap-1">Sort by Price <BiSort className="text-xl font-bold" /></button>
                    <button className=" bg-[#9538E2] text-white font-bold rounded-full p-1 px-8">Purchase</button>
                </div>
                {/* <div>
                    {
                        cartItems.map(gadget => <CartItem key={gadget.product_id} gadget={gadget}></CartItem>)
                    }
                </div> */}
            </div>

            {/* <div>
            <img src={product_image} alt="" />
            <h3>{product_title}</h3>
            <p>{price}</p>
        </div> */}
        </div>
    );
};

export default Cart;
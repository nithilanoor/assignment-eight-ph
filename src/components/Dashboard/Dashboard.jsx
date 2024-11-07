import { useState } from "react";
import './Dashboard.css';
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {

    // active btn
    const [isActive, setIsActive] = useState({
        cart: true,
        status: "cart"
    })
    const handleActive = (status) => {
        if (status === "cart") {
            setIsActive({
                cart: true,
                status: "cart"
            })
        }
        else {
            setIsActive({
                cart: false,
                status: "wishlist"
            })
        }
    };

    


    return (
        <div>
            <div className="bg-[#9538E2] space-y-4 p-6 py-16">
                <h2 className="text-white text-3xl text-center font-bold">Dashboard</h2>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex justify-center items-center gap-4 p-2">
                    <button onClick={() => handleActive("cart")} className={`${isActive.cart ? "active p-1 px-12 rounded-full font-bold" : "normal rounded-full border p-1 px-12"}`}>Cart</button>
                    <button onClick={() => handleActive("wishlist")} className={`${isActive.cart ? "normal rounded-full border p-1 px-10" : "active p-1 px-10 rounded-full font-bold"}`}>Wishlist</button>
                </div>
            </div>

            <section>
                {
                    isActive.cart ? <Cart></Cart> : <Wishlist></Wishlist>
                }
            </section>

        </div>
    );
};

export default Dashboard;
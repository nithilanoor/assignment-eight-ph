import { BiSort } from "react-icons/bi";

const Cart = ({}) => {
    return (
        <div className="flex justify-between items-centers my-12">
            <h3 className="text-3xl font-bold">Cart</h3>
            <div className="flex gap-4 justify-center items-center">
                <h3 className="text-xl font-bold">Total cost: </h3>
                <button className="border border-[#9538E2] text-[#9538E2] font-bold rounded-full p-1 px-4 hover:bg-[#f7ecff] flex justify-center items-center gap-1">Sort by Price <BiSort className="text-xl font-bold" /></button>
                <button className=" bg-[#9538E2] text-white font-bold rounded-full p-1 px-8">Purchase</button>
            </div>
        </div>
    );
};

export default Cart;
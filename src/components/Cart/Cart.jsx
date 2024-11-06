const Cart = () => {
    return (
        <div className="flex justify-between items-centers my-12">
            <h3 className="text-3xl font-bold">Cart</h3>
            <div className="flex gap-4 justify-center items-center">
                <h3 className="text-xl font-bold">Total cost: </h3>
                <button className="border border-[#9538E2] text-[#9538E2] font-bold rounded-full p-1 px-4 hover:bg-[#f7ecff]">Sort by Price</button>
                <button className="bg-[#9538E2] text-white font-bold rounded-full p-1 px-6">Purchase</button>
            </div>
        </div>
    );
};

export default Cart;
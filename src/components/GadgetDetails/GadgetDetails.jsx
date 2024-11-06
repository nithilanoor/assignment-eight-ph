import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const GadgetDetails = () => {

    const { product_id } = useParams();
    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === product_id)

    const { product_title, product_image, price, description, availability, Specification, rating } = gadget;

    return (
        <div>
            <div className="bg-[#9538E2] space-y-4 p-6 py-16">
                <h2 className="text-white text-3xl text-center font-bold">Product Details</h2>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>

            <div className="card card-side bg-base-100 shadow-xl gap-4 mx-auto relative bottom-14 my-2 flex justify-center w-2/3">
                <div className="">
                    <img className="w-full h-[500px] object-contain"
                        src={product_image}
                        alt="Gadgets" />
                </div>
                <div className="flex-row justify-center items-center my-auto">
                    <h2 className="text-3xl font-bold">{product_title}</h2>
                    <p className="text-xl font-bold text-gray-600">Price: {price}k</p>
                    {
                        availability ? <button className="border border-[#309C08] bg-[#309C081A] px-4 p-1 rounded-full font-bold text-[#309C08] my-5">In Stock</button> : <button className="border border-red-900 bg-[#9c08081a] px-4 p-1 rounded-full font-bold text-red-900 my-5">Stock Out</button>
                    }
                    <p className="text-gray-600 font-semibold">{description}</p>
                    <h4 className="text-2xl font-bold">Specification:</h4>
                    <ul className="text-gray-600 font-semibold my-2">
                        <li>{Specification}</li>
                    </ul>
                    <h4 className="text-xl font-bold">Rating</h4>
                    <div className="flex items-center gap-8">
                        <h3>Starssss</h3>
                        <p className="bg-gray-200 rounded-xl px-2">{rating}</p>
                    </div>
                    <div className="flex gap-4 my-4">
                        <button className="bg-[#9538E2] text-white font-bold rounded-full p-2 flex justify-center items-center gap-2 px-4">Add To Cart <MdOutlineShoppingCart /></button>
                        <button className="font-bold bg-white border rounded-full p-1 px-3"><FaRegHeart/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
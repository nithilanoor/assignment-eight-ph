import { Link } from "react-router-dom";

const Gadget = ({ gadget}) => {

    const { product_id, product_image, product_title, price } = gadget;


    return (
        <div className="card card-compact bg-base-100 w-80 shadow-xl border">
            <div className="border border-gray-100 rounded-xl m-4">
                <img className="w-full h-[180px] object-contain p-2"
                    src={product_image}
                    alt="Gadgets" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}k</p>
                <div className="card-actions justify-starr">
                    <Link to={`gadgets/${product_id}`}><button className="border border-[#9538E2] bg-white px-4 p-2 rounded-full font-bold text-[#9538E2]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;
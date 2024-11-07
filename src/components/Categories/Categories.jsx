import { useEffect, useState } from "react";
import products from '../../../public/gadgetsData.json'
import Gadget from "../Gadget/Gadget";
import Category from "../Category/Category";

const Categories = () => {

    // Category
    const [categoryProducts, setCategoryProducts] = useState(products);


    useEffect(() => {
        fetch('./gadgetsData.json')
        .then(res => res.json())
        .then(data => setCategoryProducts(data))
    }, [])

    const handleCategoryProducts = (category) =>{
        
        if(category === "All"){
            setCategoryProducts(products);
        }
        else{
            setCategoryProducts(products.filter(product => product.category === category));
        }
    
    };
    

    return (
        <div>
            <div className="card bg-base-100 border w-60 shadow-xl my-24 p-2">

                <div className="grid grid-cols-1 gap-4 p-1">
                    <button className="bg-[#9538E2] p-2 rounded-full text-white font-bold" onClick={() => handleCategoryProducts('All')}>All Products</button>
                    <button onClick={() => handleCategoryProducts('Phone')}>Phones</button>
                    <button onClick={() => handleCategoryProducts('Laptop')}>Laptops</button>
                    <button onClick={() => handleCategoryProducts('Accessories')}>Accessories</button>
                    <button onClick={() => handleCategoryProducts('Watch')}>Watch</button>
                </div>

                <div>
                    {categoryProducts.map(product => (
                        <Category key={product.product_id} product={product}></Category>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Categories;
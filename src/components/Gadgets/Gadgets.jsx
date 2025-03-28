import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, []);





    return (
        <div>
            <h2 className="text-3xl text-purple-950 font-bold text-center">Explore Cutting-Edge Gadgets</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-12 justify-center">
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;
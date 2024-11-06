const Gadget = ({ gadget }) => {

    const {product_image, product_title, price} = gadget;

    return (
        <div>
            <img src={product_image} alt="" />
            <h3>{product_title}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Gadget;
const Category = ({product}) => {

    const {category} = product

    return (
       <div>
        <h3>{category}</h3>
       </div>
    );
};


export default Category;
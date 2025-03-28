import { TbLogs } from "react-icons/tb";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div>

            <div className="my-12">
                <h3 className="flex items-center text-3xl font-bold "><TbLogs /> Blogs</h3>
            </div>
            <h3 className="text-2xl font-bold my-5 text-[#9538E2] flex items-center gap-1">Our Best Products <AiFillProduct /></h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center">
                <div className="card image-full w-80 shadow-xl">
                    <figure>
                        <img
                            src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Space-Black-1138.jpg"
                            alt="Gadgets" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">iPhone 14 Pro Max</h2>
                        <p>Apple's latest flagship phone with a 6.7-inch OLED display, powerful A16 Bionic chip, and exceptional camera system.</p>
                        <div className="card-actions justify-start">
                            <Link to="/"><button className="bg-[#9538E2] p-2 font-bold rounded-lg ">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card image-full w-80 shadow-xl">
                    <figure>
                        <img className=""
                            src="https://cdn.dxomark.com/wp-content/uploads/medias/post-151153/Apple-MacBook-Pro-14_-2023_featured-image-packshot-review-Recovered-Recovered.jpg"
                            alt="Gadgets" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Apple MacBook Pro 14-inch (2023)</h2>
                        <p>Apple's MacBook Pro with the M2 Pro chip, offering unmatched performance for professionals and creators.</p>
                        <div className="card-actions justify-start">
                            <Link to="/"><button className="bg-[#9538E2] p-2 font-bold rounded-lg ">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card image-full w-80 shadow-xl">
                    <figure>
                        <img
                            src="https://www.dell.com/wp-uploads/2024/01/Tributo-Platinum-v2.jpg"
                            alt="Gadgets" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Dell XPS 13 (2024)</h2>
                        <p>Dell's XPS 13 delivers sleek design and powerful performance with the latest Intel i7 processor.</p>
                        <div className="card-actions justify-start">
                        <Link to="/"><button className="bg-[#9538E2] p-2 font-bold rounded-lg ">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card image-full w-80 shadow-xl">
                    <figure>
                        <img
                            src="https://adminapi.applegadgetsbd.com/storage/media/large/Galaxy-S23-Ultra-Green-3380.jpg"
                            alt="Gadgets" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Samsung Galaxy S23 Ultra</h2>
                        <p>The Galaxy S23 Ultra is packed with a 200MP camera, Snapdragon 8 Gen 2 chipset, and an AMOLED display.</p>
                        <div className="card-actions justify-start">
                        <Link to="/"><button className="bg-[#9538E2] p-2 font-bold rounded-lg ">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card image-full w-80 shadow-xl">
                    <figure>
                        <img
                            src="https://www.custommacbd.com/cdn/shop/products/QC45_PDP_Ecom-Gallery-W02custommacbd.com.jpg?v=1647414595"
                            alt="Gadgets" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bose QuietComfort 45 Noise Cancelling Headphones</h2>
                        <p>Bose QuietComfort 45 offers top-tier comfort, sound quality, and effective noise cancellation for all-day listening.</p>
                        <div className="card-actions justify-start">
                        <Link to="/"><button className="bg-[#9538E2] p-2 font-bold rounded-lg ">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-12">
                <h3 className="text-2xl font-bold my-4 text-[#9538E2] flex items-center gap-1">FAQ <MdOutlineQuestionAnswer /></h3>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What brands of gadgets do you sell?</div>
                        <div className="collapse-content">
                            <p>We offer a wide range of products from top brands like Apple, Samsung, Dell, HP, Lenovo, Sony, Bose, JBL, and many others. We ensure that our customers have access to the latest and most popular devices in the market.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How can I stay updated on new products and discounts?</div>
                        <div className="collapse-content">
                            <p>You can subscribe to our newsletter to receive the latest news, product updates, and exclusive discounts. You can also follow us on social media to stay informed about upcoming sales and promotions</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How do I know if a gadget is compatible with my device?</div>
                        <div className="collapse-content">
                            <p>We provide detailed specifications and compatibility information on each product page. If you're unsure, feel free to reach out to our customer support team, and we'll be happy to assist you in finding the right accessory or gadget for your needs.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;
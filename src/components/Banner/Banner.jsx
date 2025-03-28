import { useNavigate } from 'react-router-dom';
import bannerImg from '../../../public/banner.jpg'

const Banner = () => {

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/dashboard')
    }

    return (
        <div>
            <div className="hero bg-[#9538E2]">
                <div className="hero-content text-center my-16">
                    <div className="p-10 mb-12">
                        <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>
                        <button onClick={handleRoute} className="bg-white px-4 p-2 rounded-full font-bold text-[#9538E2]">Shop Now</button>
                    </div>
                </div>
            </div>
            <section className='border rounded-xl p-4 md:w-2/3 mx-auto relative bottom-40 my-2 flex justify-center'>
                <img className='border rounded-xl  w-[800px] h-[400px] mx-auto' src={bannerImg} alt="" />
            </section>
        </div>
    );
};

export default Banner;
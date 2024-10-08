import { PiArrowUpRightBold, PiBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <section id="hero" className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[700px] w-full">
            <div className="relative mx-w-[777px] top-44 xs:top-56">
                <h4 className="h1 max-w-[611px] capitalize">Elevate your wardrobe with trendy fashion from <span className="text-secondary">GlamStore</span></h4>
                <div className=" gap-x-9 mt-8">
                <p className="my-2 md:w-[550px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur ipsum explicabo neque facilis labore sint magnam aliquam repellendus ullam!</p>
                    <Link className=" flexCenter gap-x-2 inline-flex bg-tertiary text-white p-3 pl-5 mt-6 max-w-60 rounded-full">Latest Product <PiBagBold className="bg-white text-tertiary text-4xl p-2 rounded-full"/><PiArrowUpRightBold className="bg-white text-tertiary text-4xl p-2 rounded-full"/></Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
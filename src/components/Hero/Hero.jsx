import React from "react"
import Image1 from "../../assets/women.jpg";
import Image2 from "../../assets/men.jpg";
import Image3 from "../../assets/shopping.jpg";
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Grab your best design today",
        description: "Lorem"
    
    },
    {
        id: 2,
        img: Image2,
        title: "50% off on all products above ksh 1000",
        description: "Lorem"
    
    },
    {
        id: 3,
        img: Image3,
        title: "Order today for the best experience",
        description: "Lorem"
    
    },
]

const Hero = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,


    };
    return (
    <div className="relative overflow-hidden sm:min-h-[650px] bg-gray-950 flex justify-center items-center
    dark:text-white duration-200">

        <div className="h-[700px] w-[700px] bg-yellow-500
        absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

        </div>
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {ImageList.map((data)=>(
            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
                order-2 sm:order-1 relative z-10">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold  text-white py-2 px-4">{data.title}</h1>
                    <p className="text-sm">{data.description}</p>
               <div>
                <button
                className="bg-gradient-to-r from-primary to bg-secondary hover:scale-105 
                duration-200 text-white py-2 px-4 font-semibold">
                    order now
                </button>
               </div>
                </div>
                <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                        <img src={data.img} alt=""
                        className="W-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain
                        mx-auto" />
                    </div>
                </div>

            </div>
        </div>
                ))}

</Slider>
        </div>
    </div>
);
};
export default Hero;
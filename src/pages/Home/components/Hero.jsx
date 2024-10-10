import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: 'https://i.ibb.co/rb7jbs1/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai.jpg',
            headline: 'Welcome to ShoeFlex',
            description: 'Find the perfect shoes for any occasion, blending comfort, style, and durability to elevate your footwear game effortlessly.',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/nRk2f0G/sports-shoe-pair-design-illustration-generated-by-ai.jpg',
            headline: 'Step into Comfort',
            description: 'Experience unparalleled comfort with our innovative designs that support your every step, ensuring a delightful journey throughout the day.',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/1RXcwRB/3799.jpg',
            headline: 'Style Meets Function',
            description: 'Discover stylish designs that seamlessly combine aesthetics and functionality, allowing you to express your personality without compromising performance.',
        },
    ];

    // Automatically move to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-80 md:h-96 overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.headline}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 backdrop-blur-sm">
                        <h2 className="text-xl md:text-2xl font-bold text-center px-4 ">{slide.headline}</h2>
                        <p className="mt-2 text-sm md:text-base text-center  px-4 w-full md:w-1/2 bg-[#111010] bg-opacity-20 rounded-md py-4">{slide.description}</p>
                    </div>
                </div>
            ))}

            {/* Left arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-lg md:p-4"
            >
                &#10094; 
            </button>
            {/* Right arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-lg md:p-4"
            >
                &#10095; {/* Right Arrow */}
            </button>
            {/* Dots for navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;

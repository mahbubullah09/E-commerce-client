import React from "react";

const GetYourShow = () => {
  return (
    <div>
      <h2 className="text-3xl text-center bg-lime-50 p-4 font-bold my-2">
        Get your shoe now
      </h2>

      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-marquee whitespace-nowrap max-w-32">
          <img
            src="https://i.ibb.co.com/rb7jbs1/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai.jpg"
            alt="bata"
            className="inline-block mx-4"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo2"
            alt="Logo 2"
            className="inline-block mx-4"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo3"
            alt="Logo 3"
            className="inline-block mx-4"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo4"
            alt="Logo 4"
            className="inline-block mx-4"
          />
          {/* Repeat logos for a continuous effect */}
          <img
            src="https://via.placeholder.com/100x50?text=Logo1"
            alt="Logo 1"
            className="inline-block mx-4"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo2"
            alt="Logo 2"
            className="inline-block mx-4"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo3"
            alt="Logo 3"
            className="inline-block mx-4"
          />
          <img
            src="https://via.placeholder.com/100x50?text=Logo4"
            alt="Logo 4"
            className="inline-block mx-4"
          />
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default GetYourShow;

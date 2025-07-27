import React from "react";

const TravelPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
     
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          In 3 Easy Steps
        </h2>
        <div className="space-y-6">
         
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center rounded-md">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold">Choose Destination</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
         
          <div className="flex items-start space-x-4">
            <div className="bg-red-400 w-12 h-12 flex items-center justify-center rounded-md">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold">Make Payment</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
       
          <div className="flex items-start space-x-4">
            <div className="bg-teal-700 w-12 h-12 flex items-center justify-center rounded-md">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold">Reach Airport on Selected Date</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </section>

     
<section className="px-6 py-6 max-w-6xl mx-auto">
  <div className="flex justify-center md:justify-end relative min-h-[200px]">
 
    <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden z-10">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Greece"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-sm">Trip To Greece</h4>
        <p className="text-xs text-gray-500">14–29 June | by Robbin j</p>
        <div className="flex justify-between items-center mt-4 text-gray-400 text-xs">
          <div className="flex gap-2">
            <span>🏛️</span>
            <span>🧭</span>
            <span>🏖️</span>
          </div>
          <span>💬 24</span>
        </div>
      </div>
    </div>

  
    <div className="absolute left-90 bottom-250 translate-x-1/2 translate-y-1/0.5 w-60 h-24 bg-white rounded-lg shadow p-4 z-20">
      <div className="absolute -top-6 left-4 w-12 h-12 rounded-full overflow-hidden border border-gray-200">
    <img
      src="https://via.placeholder.com/50"
      alt="Rome"
      className="w-full h-full object-cover"
/>

      </div>
      <div className="ml-16">
        <p className="text-xs font-semibold">Trip to Rome</p>
        <p className="text-xs text-gray-500">Ongoing</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: "40%" }}
          ></div>
        </div>
        <p className="text-[10px] text-right mt-1 text-gray-400">
          40% completed
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default TravelPage;

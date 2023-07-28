import React from "react";

import ReservationImage from "../../assets/Reservation.jpg";

const Reservation = () => {
  return (
    <section
      className="relative h-[1178px] sm:h-[1027px] md:h-[985px] lg:h-[786px] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${ReservationImage})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 grid grid-cols-1 place-content-center gap-20 lg:grid-cols-2 px-4 sm:px-16 lg:px-24 lg:gap-28 xl:px-28">
        <div className="text-white flex flex-col items-center lg:justify-center gap-4">
          <h1 className="text-4xl font-semibold">
            Reserve Your Seats to Confirm if You Come with Your Family
          </h1>
          <p className="text-sm leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <form className="h-[500px] xl:h-[540px] w-full bg-white py-24 px-8 flex flex-col gap-3 items-center xl:basis-[93%]">
            <input
              type="text"
              placeholder="Your Name"
              className="h-10 w-full px-3 border border-gray-400/40 outline-none focus:outline-none placeholder:text-gray-500/80 placeholder:text-sm xl:h-12"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="h-10 w-full px-3 border border-gray-400/40 outline-none focus:outline-none placeholder:text-gray-500/80 placeholder:text-sm lg:h-12"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="h-10 w-full px-3 border border-gray-400/40 outline-none focus:outline-none placeholder:text-gray-500/80 placeholder:text-sm lg:h-12"
            />
            <input
              type="text"
              placeholder="Select Date & time"
              className="h-10 w-full px-3 border border-gray-400/40 outline-none focus:outline-none placeholder:text-gray-500/80 placeholder:text-sm lg:h-12"
            />
            <input
              type="text"
              placeholder="Select Event"
              className="h-10 w-full px-3 border border-gray-400/40 outline-none focus:outline-none placeholder:text-gray-500/80 placeholder:text-sm lg:h-12"
            />
            <button
              type="submit"
              className="bg-websiteRed text-white px-4 py-3 text-sm tracking-wider capitalize font-[500]"
            >
              make reservations
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

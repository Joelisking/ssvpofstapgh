import React from 'react';

function Info() {
  return (
    <div className="bg-primary text-white rounded-2xl w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight mb-4 sm:mb-6">
        Contact Info
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col font-light space-y-3 sm:space-y-4">
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg">
              Tel:
            </span>
            <div className="flex flex-col space-y-1">
              <span className="text-sm sm:text-base">
                +233 53 894 8352
              </span>
              <span className="text-sm sm:text-base">
                +233 53 483 4591
              </span>
              <span className="text-sm sm:text-base">
                +233 59 555 3016
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold text-base sm:text-lg">
              Email:
            </span>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1">
              <span className="font-light text-sm sm:text-base">
                info@ssvpofstap.org
              </span>
              <span className="font-light text-sm sm:text-base hidden sm:inline">
                |
              </span>
              <span className="font-light text-sm sm:text-base">
                gabriel.antwi@ssvpofstapgh.org
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold text-base sm:text-lg">
              Address:
            </span>
            <span className="font-light text-sm sm:text-base">
              P.O.Box LG 1008,Legon
            </span>
          </div>

          <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-start sm:gap-2">
            <span className="font-bold text-base sm:text-lg">
              Location:
            </span>
            <span className="font-light text-sm sm:text-base">
              University of Ghana, Legon. Near the University of Ghana
              Nursing School
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 text-secondary text-base sm:text-lg italic">
        <p>
          In the early part of 1985, a few of us (parishioners) from
          the Church visited our Priest at the time, the Rev. Fr. Ivan
          Yangyouru, a Lecturer then of the Sociology Department (now
          of blessed memory). We were surprised to see several very
          happy students at what seemed like a party. Jokingly, we
          asked why we were not invited to the party! Fr. Ivan, in his
          usual very calm voice said that it was a very normal Sunday
          afternoon at his house with &ldquo;small
          refreshments&rdquo;.
        </p>
      </div>
    </div>
  );
}

export default Info;

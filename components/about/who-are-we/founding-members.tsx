import React from 'react';

function FoundingMembers() {
  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold">
        Founding Members
      </h2>

      <div className="mt-4 sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2 sm:gap-y-4 lg:gap-y-6">
          <div>
            <p className="text-lg sm:text-xl font-medium">
              President
            </p>
            <div className="bg-[#AEE2FA] mt-2 text-base sm:text-lg p-3 rounded-2xl">
              Sister Ama Gaines
            </div>
          </div>

          <div>
            <p className="text-lg sm:text-xl font-medium">
              Vice President
            </p>
            <div className="bg-[#AEE2FA] mt-2 text-base sm:text-lg p-3 rounded-2xl">
              Brother Conrad Agbolettey
            </div>
          </div>

          <div>
            <p className="text-lg sm:text-xl font-medium">
              Secretary
            </p>
            <div className="bg-[#AEE2FA] mt-2 text-base sm:text-lg p-3 rounded-2xl">
              Sister Marian Osei
            </div>
          </div>

          <div>
            <p className="text-lg sm:text-xl font-medium">
              Treasurer
            </p>
            <div className="bg-[#AEE2FA] mt-2 text-base sm:text-lg p-3 rounded-2xl">
              Brother Paul Yankson
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundingMembers;

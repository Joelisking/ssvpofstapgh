import Image from 'next/image';
import React from 'react';

function PolicyCard({ name }: { name: string }) {
  return (
    <div
      className={`bg-[#AEE2FA] mt-2 text-sm font-medium p-3 rounded-2xl flex items-center gap-2`}>
      <div className="bg-secondary p-1 rounded-lg w-7 h-7">
        <Image src={'/download.svg'} alt="" width={20} height={20} />
      </div>
      {name}
    </div>
  );
}

export default PolicyCard;

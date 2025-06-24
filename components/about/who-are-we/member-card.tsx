import React from 'react';

function MemberCard({ name }: { name: string }) {
  return (
    <div className="bg-[#AEE2FA] mt-2 text-base sm:text-lg p-3 rounded-2xl">
      {name}
    </div>
  );
}

export default MemberCard;

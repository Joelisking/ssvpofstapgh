function ActivityCard({ name }: { name: string }) {
  return (
    <div className="bg-[#012956] mt-2 text-base sm:text-lg p-3 rounded-2xl text-white">
      {name}
    </div>
  );
}

export default ActivityCard;

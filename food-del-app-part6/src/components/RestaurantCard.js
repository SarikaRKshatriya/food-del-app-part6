const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  deliveryTime,
  avgRating,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>Rating: {avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestrauntCard;

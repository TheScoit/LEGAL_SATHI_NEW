const Card = ({ src, name, occupation }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <img
        src={src}
        alt={name}
        className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-orange-100"
      />
      <h3 className="text-xl font-semibold text-orange-900 mb-1">{name}</h3>
      <p className="text-gray-600">{occupation}</p>
    </div>
  );
};

export default Card;

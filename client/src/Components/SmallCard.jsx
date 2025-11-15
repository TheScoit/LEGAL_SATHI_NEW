const SmallCard = ({ src, title, description, className }) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-orange-100">
        <img src={src} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-orange-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SmallCard;

function InfoCard({ 
  title, 
  description, 
  icon, 
  bgColor = "bg-blue-50", 
  children 
}) {
  return (
    <div className={`${bgColor} rounded-xl p-6 shadow-sm`}>
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
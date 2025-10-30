
const SectionTitle = ({
  title,
  subtitle,
  center = false
}) => {
  return <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      <div className={`h-1 w-20 bg-[#d57315] mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>;
};
export default SectionTitle;
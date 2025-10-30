
const HomeSectionTitle = ({
  title,
  subtitle,
  center = false,
  bgColor,
  titleColor
}) => {
  return <div className={`mb-5 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-2xl md:text-3xl font-[600] text-${titleColor} mb-4`}>
        {title}
      </h2>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      <div className={`h-1 w-18 bg-${bgColor} mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>;
};
export default HomeSectionTitle;
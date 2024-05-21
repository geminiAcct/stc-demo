const ServicesCard = ({ id, image, title, content }) => {
  return (
    <div
      className={`flex flex-1 flex-col gap-2 justify-start items-center w-[50px] px-[50px] py-[50px] bg-secondary rounded-md
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
    >
      <img src={image} alt="icon" className="w-[38%] h-auto" />
      <h3 className="font-roboto font-medium text-2xl text-white">{title}</h3>
      <p className="font-montserrat text-sm text-white text-wrap">{content}</p>
    </div>
  );
};

export default ServicesCard;

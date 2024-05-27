
const Button = ({title} : {title: string}) => {
  return (
    <button className="w-fit px-[1.5rem] py-[0.3rem] rounded-md innershadow ">
      <span className="text-white text-sm tracking-tight font-medium whitespace-nowrap">
        {title}
      </span>
    </button>
  );
};

export default Button;

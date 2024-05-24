import { ReactNode } from "react"; // Import ReactNode

const Box = ({
  title,
  amount,
  icon,
}: {
  title: string;
  amount: number;
  icon: ReactNode;
}) => {
  return (
    <div className="w-fit min-w-60 border border-white/15 rounded-md p-5">
      <div className="flex w-full justify-between gap-5">
        <h3 className="text-white/50 text-sm tracking-tight mb-2 font-medium">
          {title}
        </h3>
        {icon}
      </div>
      <span className="text-white text-2xl tracking-tight font-bold">
        Q{amount}
      </span>
    </div>
  );
};

export default Box;

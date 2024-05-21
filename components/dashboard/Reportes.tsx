import { dataOverview } from "@/app/constants";

function Reportes() {
  return (
    <>
      {/* overview  */}
      <div className="w-full h-full flex items-center gap-5">
        {dataOverview.map((item, index) => (
          <div
            key={index}
            className="w-fit min-w-60 border border-white/15 rounded-md
            p-5"
          >
            <div className="flex w-full justify-between gap-5">
              <h3 className="text-white/50 text-sm tracking-tight font-medium">
                {item.title}
              </h3>
              <div>{item.icon && <item.icon className="text-white/50" />}</div>
            </div>
            <h4 className="text-white text-2xl tracking-tight font-bold">
              Q{item.total}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Reportes;

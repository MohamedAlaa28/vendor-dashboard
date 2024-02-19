import ChartCircle from "./ChartCircle";
import ChartLine from "./ChartLine";  

export default function AllCharts() {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-y-3">
      <div className="lg:w-[50%] w-full min-h-[320px] px-3">
        <ChartCircle empty={false} />
      </div>
      <div className="lg:w-[50%] w-full min-h-[320px] px-3">
        <ChartLine empty={false} />
      </div>
    </div>
  );
}

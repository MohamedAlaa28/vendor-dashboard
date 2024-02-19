import AllCharts from "./components/AllCharts";
import TotalCard from "./components/TotalCard";
import ProductsLayout from "./components/ProductsLayout";

export default function Dashboard() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <TotalCard />
      <AllCharts />
      <ProductsLayout />
    </section>
  );
}

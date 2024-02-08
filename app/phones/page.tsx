
import Card from "@/components/ProductCard/ProductCard";

export default function Phones() {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4 p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        {/* Add more phone items as needed */}
        </div>
      </div>
    </>
  );
}

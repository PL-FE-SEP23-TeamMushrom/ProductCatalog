import connectToDatabase from "@/lib/connect";
import { TechSpec } from "../../lib/types/techSpec";

const TechSpecs = async () => {
  const db = await connectToDatabase();
  const phoneData = await db.collection<TechSpec>("phones").findOne({});
  const { screen, resolution, processor, ram, camera, zoom, cell } =
    phoneData as TechSpec;

  return (
    <div className="flex flex-col py-4">
      <div className="font-bold text-2xl mb-5">
        <h1>Tech specs</h1>
      </div>
      <hr className="border-t-2" />
      <div className="mt-10 mb-5">
        <div className="flex justify-between">
          <div className="text-gray-400">Screen</div>
          <div className="text-gray-700">{screen}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Resolution</div>
          <div className="text-gray-700">{resolution}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Processor</div>
          <div className="text-gray-700">{processor}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">RAM</div>
          <div className="text-gray-700">{ram}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Built in memory</div>
          <div className="text-gray-700">64 GB</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Camera</div>
          <div className="text-gray-700">{camera}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Zoom</div>
          <div className="text-gray-700">{zoom}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Cell</div>
          <div className="text-gray-700">{cell.slice(0, 3).join(", ")}</div>
        </div>
      </div>
    </div>
  );
};

export default TechSpecs;

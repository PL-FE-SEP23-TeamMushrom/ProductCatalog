import NewModels from "@/components/NewModels/NewModels";
import getManyWithYear from "@/utils/getManyWithFind";

export default async function Home() {
  const phones = await getManyWithYear(2022);

  return (
    <>
      <NewModels newModels={phones} />
    </>
  );
}

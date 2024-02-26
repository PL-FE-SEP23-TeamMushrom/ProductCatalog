import { AboutType } from "../../lib/types/about";
import connectToDatabase from "@/lib/connect";

const About = async () => {
  const db = await connectToDatabase();
  const aboutData = await db.collection<AboutType>("phones").findOne({});
  const { description } = aboutData as AboutType;

  return (
    <div className="flex flex-col py-4 flex-wrap">
      <div className="font-bold text-2xl mb-5">
        <h1>About</h1>
      </div>
      <hr className="border-t-2" />
      <div className="font-bold text-xl mt-10 mb-5">
        <h2>{description[0].title}</h2>
      </div>
      <p className="mt-3 mb-3">{description[0].text[0]}</p>
      <p className="mt-3 mb-3">{description[0].text[1]}</p>
      <div className="font-bold text-xl mt-10 mb-5">
        <h2>{description[1].title}</h2>
      </div>
      <p className="mt-3 mb-3">{description[1].text}</p>
      <div className="font-bold text-xl mt-10 mb-5">
        <h2>{description[2].title}</h2>
      </div>
      <p className="mt-3 mb-3">{description[2].text}</p>
    </div>
  );
};

export default About;

import { SimpleHero } from "../components/hero/simpleHero/SimpleHero";
import { Templates } from "./Templates";

const data = {
    title: "<Ax-ui/>",
    description: "Encore une librairie de composants React !!",
    description2: "Pour prendre des p'tits bouts d'trucs et puis les assembler ensemble 🎵."
  }

export const Home = () => {
    return (
        <>
            <SimpleHero data={data} />
            <Templates />
        </>
    );
};

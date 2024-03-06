// React Imports
import { useParams } from "react-router-dom";
// Custom
import VegzelmaEntry from "./VegzelmaEntry";
import YuflymaEntry from "./YuflymaEntry";
import Zymfentra from "./Zymfentra";

const Entry = () => {
  const { category } = useParams();

  return (
    <div>
      {category === "vegzelma" ? (
        <VegzelmaEntry />
      ) : category === "yuflyma" ? (
        <YuflymaEntry />
      ) : category === "zymfentra" ? (
        <Zymfentra />
      ) : null}
    </div>
  );
};

export default Entry;

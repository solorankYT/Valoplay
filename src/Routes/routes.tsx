import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../View/Mainpage/MainPage";
import MapsPage from "../View/Maps/MapsPage";
import Breeze from "../View/TierlistAgent/Breeze";
import Icebox from "../View/TierlistAgent/Icebox";
import Bind from "../View/TierlistAgent/Bind";
import Split from "../View/TierlistAgent/Split";
import Lotus from "../View/TierlistAgent/Lotus";
import LineupsAgent from "../View/LineupsAgent/LineupsAgent";
import Haven from "../View/TierlistAgent/Haven";
import Ascent from "../View/TierlistAgent/Ascent";
import KjLineups from "../View/LineupsAgent/KjLineups";
import BrimLineups from "../View/LineupsAgent/BrimLineups";
import SovaLineups from "../View/LineupsAgent/SovaLineups";
import ViperLineups from "../View/LineupsAgent/ViperLineups";
import SetupsAgent from "../View/SetupsAgent/SetupsAgent";
import KjSetups from "../View/SetupsAgent/KjSetups";
import DeadlockSetups from "../View/SetupsAgent/DeadlockSetups";
import CypherSetups from "../View/SetupsAgent/CypherSetups";
import ViperSetups from "../View/SetupsAgent/ViperSetups";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "maps", element: <MapsPage /> },
      { path: "ascent", element: <Ascent /> },
      { path: "breeze", element: <Breeze /> },
      { path: "haven", element:<Haven />},
      { path: "bind", element: <Bind /> },
      { path: "split", element: <Split /> },
      { path: "lotus", element: <Lotus /> },
      { path: "icebox", element: <Icebox /> },
      { path: "lineups", element: <LineupsAgent /> },
      { path: "kjlineup", element: <KjLineups /> },
      { path: "brimlineup", element: <BrimLineups />},
      { path: "sovalineup", element: <SovaLineups /> },
      { path: "viperlineup", element: <ViperLineups />},
      { path: "setups", element: <SetupsAgent />}, 
      { path: "kjsetup", element: <KjSetups />}, 
      { path: "deadlocksetup", element: <DeadlockSetups />}, 
      { path: "cyphersetup", element: <CypherSetups />}, 
      { path: "vipersetup", element: <ViperSetups />}, 
    ],
  },
]);
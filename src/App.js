import "./App.css";
import FirstTab from "./Components/AllTabs/FirstTab";
import SecondTab from "./Components/AllTabs/SecondTab";
import Tabs from "./Components/TabComponent/Tabs";

function App() {
  const categories = [
    {
      label: "Tab 1",
      component: <FirstTab />,
    },
    {
      label: "Tab 2",
      component: <SecondTab />,
    },
    {
      label: "Tab 3",
      component: "Xuxa",
    },
    {
      label: "Tab 4",
      component: "Coco",
    },
  ];
  return (
    <div className="App">
      <Tabs tabs={categories}></Tabs>
    </div>
  );
}

export default App;

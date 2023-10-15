import cntl from "cntl";
import "./App.css";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import Input from "./stories/Components/Input/Input";
import NavBar from "./stories/Components/NavBar/NavBar";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";

const containerCN = cntl`
  mt-3
  p-3
  border
  rounded
`;

const App = () => {
  return (
    <div>
      <div className="bg-black h-screen w-screen flex justify-center items-center overflow-auto">
        <div className="p-10 w-1/3">
          <p>Create a screen here!</p>
          <p>
            Below are the provided Components that will be needed. You
            won&apos;t be expected to modify these Components at all, but you
            may need to study them and pass props.
          </p>
          <div className={containerCN}>
            <p>Nav bar</p>
            <NavBar />
          </div>
          <div className={containerCN}>
            <p>Progress Tracker</p>
            <ProgressTracker />
          </div>
          <div className={containerCN}>
            <p>Collapsible Section</p>
            <CollapsibleSection title="Section Title">
              <p>inner content</p>
            </CollapsibleSection>
          </div>
          <div className={containerCN}>
            <p>Button</p>
            <Button />
          </div>
          <div className={containerCN}>
            <p>Input</p>
            <Input />
          </div>
          <div className={containerCN}>
            <p>Dropdown</p>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

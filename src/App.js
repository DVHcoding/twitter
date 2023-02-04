import Feed from "./components/Feed";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="App">
      <div className="flex">
        {/* LeftSide */}
        <LeftSide/>
        {/* Feed */}
        <Feed /> 
        {/* RightSite */}
        <RightSide/>
      </div>
    </div>
  );
}

export default App;

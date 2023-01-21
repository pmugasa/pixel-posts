import Navbar from "./components/Navbar";

import RouteSwitch from "./RouteSwitch";
const App = () => {
  return (
    <>
      <div className="h-screen w-screen relative">
        <Navbar />

        <RouteSwitch />
      </div>
    </>
  );
};

export default App;

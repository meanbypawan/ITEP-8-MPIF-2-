import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ViewMore from "./components/view-more/ViewMore";

function App(){
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="view-more/:id" element={<ViewMore/>}/>
    </Routes>
  </>
}

export default App;
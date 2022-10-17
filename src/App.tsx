import { Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import InputProvider from "./store/input/InputProvider";
import InputOptionsProvider from "./store/input/InputOptionProvider";
import StatusProvider from "./store/input/StatusProvider";
import PageProvider from "./store/page/PageProvider";

function App() {
  return (
    <InputProvider>
      <InputOptionsProvider>
        <StatusProvider>
          <PageProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Details />} />
            </Routes>
          </PageProvider>
        </StatusProvider>
      </InputOptionsProvider>
    </InputProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "./Pages/Post";
import Header from "./Pages/Header";
import Feed from "./Pages/Feed";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#131313] font-inter  ">
        <Header />

        <div className="flex flex-col gap-20 ">
          <Routes>
            <Route path="/" element={<Post />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

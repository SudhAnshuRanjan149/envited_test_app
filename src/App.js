import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateEvents from "./Pages/CreateEvents/CreateEvents";
import Events from "./Pages/EventsPage/Events";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/create" exact element={<CreateEvents />} />
          <Route path="/event" exact element={<Events />} />
          {/* <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

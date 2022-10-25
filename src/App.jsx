// import ReactDOM from 'react-dom/client';
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { routes useRoutes} from "@/router";
import Navbar from "./components/Navbar";
import Header from "./components/Top/index";
import Home from "./pages/Home/Home";
// import Todolist from "./pages/Todolist/Todolist";
import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Register from "./pages/register";
import ZustandComponent from "./pages/Zustand";
// import LearnComponent from "./pages/LearnComponent";
import Charts from "./pages/Charts";
import LineChart from "./pages/Charts/ChartsComponent/lineChart";
import CanvasConponent from "./pages/Charts/ChartsComponent/canvasComponent";
import Basic from "./pages/Home/BasicKnowledge/Basic/Basic";
import ComponentCommunication from "./pages/Home/BasicKnowledge/ComponentCommunication";
import ChildToParent from "./pages/Home/BasicKnowledge/ComponentCommunication/ChildToParent";
import Descendant from "./pages/Home/BasicKnowledge/ComponentCommunication/descendant";
import NonRealtionalComponent from "./pages/Home/BasicKnowledge/ComponentCommunication/Non-relational";
import ParentToChild from "./pages/Home/BasicKnowledge/ComponentCommunication/ParentToChild";
import Sibling from "./pages/Home/BasicKnowledge/ComponentCommunication/sibling";
import EventMechanism from "./pages/Home/BasicKnowledge/Basic/Eventmechanism";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home" element={<Home />}>
          <Route path="basic" element={<Basic />}></Route>
          <Route
            path="communication"
            element={<ComponentCommunication />}
          ></Route>
          <Route path="parentToChild" element={<ParentToChild />}></Route>
          <Route path="childToParent" element={<ChildToParent />}></Route>
          <Route path="sibling" element={<Sibling />}></Route>
          <Route path="descendant" element={<Descendant />}></Route>
          <Route
            path="nonRealtional"
            element={<NonRealtionalComponent />}
          ></Route>
          <Route path="eventmechanism" element={<EventMechanism />} />
        </Route>
        <Route path="noPage" element={<NoPage />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="register" element={<Register />} />
        <Route path="zustand" element={<ZustandComponent />} />

        <Route path="charts" element={<Charts />}>
          <Route path="lineChart" element={<LineChart />} />
          <Route path="canvasConponent" element={<CanvasConponent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="todolist" element={<Todolist />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="nopage" element={<NoPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="register" element={<Register />} />
            <Route path="basic" element={Basic}></Route>
            <Route path="component" element={<LearnComponent />} />
        </Route>
      </Routes> */}
    </div>
  );
}

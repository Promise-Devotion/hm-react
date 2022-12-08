// import ReactDOM from 'react-dom/client';
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { routes useRoutes} from "@/router";
import Navbar from "./components/Navbar";
import Header from "./components/Top/index";
import Blogs from "./pages/Blogs";
import Charts from "./pages/Charts";
import CanvasComponent from "./pages/Charts/ChartsComponent/canvasComponent";
import LineChart from "./pages/Charts/ChartsComponent/lineChart";
import Contact from "./pages/Contact";
import Basic from "./pages/Home/BasicKnowledge/Basic/Basic";
import EventMechanism from "./pages/Home/BasicKnowledge/Basic/Eventmechanism";
import ComponentCommunication from "./pages/Home/BasicKnowledge/ComponentCommunication";
import ChildToParent from "./pages/Home/BasicKnowledge/ComponentCommunication/ChildToParent";
import Descendant from "./pages/Home/BasicKnowledge/ComponentCommunication/descendant";
import NonRealtionalComponent from "./pages/Home/BasicKnowledge/ComponentCommunication/Non-relational";
import ParentToChild from "./pages/Home/BasicKnowledge/ComponentCommunication/ParentToChild";
import Sibling from "./pages/Home/BasicKnowledge/ComponentCommunication/sibling";
import Home from "./pages/Home/Home";
import HttpDemo from "./pages/Http/index";
import LearnComponent from "./pages/LearnComponent";
import NoPage from "./pages/NoPage";
import NotFound from "./pages/NotFound";
import Register from "./pages/register";
import Swrpage from "./pages/Swrpage";
import Todolist from "./pages/Todolist/Todolist";
import ZustandComponent from "./pages/Zustand";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home" element={<Home />}>
          <Route path="basic" element={<Basic />}></Route>
          <Route path="component" element={<LearnComponent />} />
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
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="zustand" element={<ZustandComponent />} />
        <Route path="todolist" element={<Todolist />} />
        <Route path="swrpage" element={<Swrpage />} />
        <Route path="httpdemo" element={<HttpDemo />} />

        <Route path="charts" element={<Charts />}>
          <Route path="lineChart" element={<LineChart />} />
          <Route path="canvasComponent" element={<CanvasComponent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

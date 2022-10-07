// import ReactDOM from 'react-dom/client';
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { routes useRoutes} from "@/router";
import Header from "./components/Top/index";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
// import Todolist from "./pages/Todolist/Todolist";
import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import Register from "./pages/register";
// import LearnComponent from "./pages/LearnComponent";
import Basic from "./pages/Home/BasicKnowledge/Basic/Basic";
import ComponentCommunication from "./pages/Home/BasicKnowledge/ComponentCommunication";
import ParentToChild from "./pages/Home/BasicKnowledge/ComponentCommunication/ParentToChild";
import ChildToParent from "./pages/Home/BasicKnowledge/ComponentCommunication/ChildToParent";
import Sibling from "./pages/Home/BasicKnowledge/ComponentCommunication/sibling";
import Descendant from "./pages/Home/BasicKnowledge/ComponentCommunication/descendant";
import NonRealtionalComponent from "./pages/Home/BasicKnowledge/ComponentCommunication/Non-relational";
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
        </Route>
        <Route path="noPage" element={<NoPage />} />
        <Route path="blogs" element={<Blogs />} />
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

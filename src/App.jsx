// import ReactDOM from 'react-dom/client';
import React from "react";
import { Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="basic" element={<Basic />}></Route>
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

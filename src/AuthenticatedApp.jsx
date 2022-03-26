import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Users from "./Pages/Users/Users";
import Posts from "./Pages/Users//Posts";
import Comments from './Pages/Users/Comments'

function AuthenticatedApp() {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/comments/:postId" element={<Comments />}/>
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
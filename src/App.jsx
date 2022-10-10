import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, SignIn, SignUp } from "./pages";
import Protected from "./pages/Protected";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Protected Pages={Home} />} />
          <Route path="/home" exact element={<Protected Pages={Home} />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />

          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

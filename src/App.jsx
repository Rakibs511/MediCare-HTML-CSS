import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, SignIn, SignUp, Protected } from "./pages";

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Protected Pages={Home} />} />
          <Route path="/home" exact element={<Protected Pages={Home} />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />

          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

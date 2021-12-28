import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListOfTwoItemPayloads } from "common-ts-props/global";
import PublicRouting from "./pages/Public";
import classes from "./App.module.scss";

const pathAndPageListForPublic: ListOfTwoItemPayloads<string, FC> = [
  //  ["", HomePage],
];

function App() {
  return (
    <div className={classes.App}>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRouting />}>
              {pathAndPageListForPublic.map(([path, PageComponent]) => (
                <Route key={path} path={path} element={<PageComponent />} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import IndividualBlogPostPage from "./pages/Blog/Individual";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <main>
        <HashRouter>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/blog">
              <Route index element={<BlogPage />} />
              <Route path=":postId" element={<IndividualBlogPostPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;

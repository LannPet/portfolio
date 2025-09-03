import MainLayout from "./layout/MainLayout"
import { Route, Routes } from "react-router-dom";
import Projects from "./views/projects/Projects";
import Docs from "./views/projects/docs/Docs";
import AboutMe from "./views/aboutme/AboutMe";
import PreviewPage from "./views/projects/previewPage/PreviewPage"
import Programmatic from "./views/projects/programmatic/Programmatic"
import Contact from "./views/contact/Contact";
import Dzog from "./views/projects/dzog/Dzog";


function App() {

  return (
    <>
      <MainLayout >
        <Routes>
          <Route
            path="/"
            element={<Projects />}
          >
          </Route>
          <Route
            path="/project-iprom-docs"
            element={<Docs />}
          >
          </Route>
          <Route
            path="/aboutme"
            element={<AboutMe/>}
          >
          </Route>
           <Route
            path="/project-iprom-previewpage"
            element={<PreviewPage/>}
          >
          </Route>
          <Route
            path="/project-iprom-programmatic"
            element={<Programmatic/>}
          >
          </Route>
          <Route
            path="/contact"
            element={<Contact/>}
          >
          </Route>
          <Route
            path="/project-iprom-dzog"
            element={<Dzog/>}
          >
          </Route>
        </Routes>
      </MainLayout>
    </>
  )
}

export default App

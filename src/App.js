import { lazy, Suspense } from "react";
import "./App.css";
const About = lazy(() => import("./Componets/About"));
const Home = lazy(() => import("./Componets/Home"));
const Navbar = lazy(() => import("./Componets/Navbar"));
const Work = lazy(() => import("./Componets/Work"));

function App() {
  return (
    <>
   
      <Suspense
        fallback={
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        }
      >
        <Navbar />
        <Home />
        <Work />
        <About />
      </Suspense>
    </>
  );
}

export default App;

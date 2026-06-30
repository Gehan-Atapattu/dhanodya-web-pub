import About from "./About";
import Services from "./Services";
import Opportunities from "./Opportunities";
import SuccessStories from "./SuccessStories";
import Contact from "./Contact";

function Main(): React.JSX.Element {
  return (
    <main>
      <About />
      <Services />
      <Opportunities />
      <SuccessStories />
      <Contact />
    </main>
  );
}

export default Main;
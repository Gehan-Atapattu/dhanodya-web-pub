import About from "./About";
import Services from "./Services";
import Opportunities from "./Opportunities";
import SuccessStories from "./SuccessStories";
import Contact from "./Contact";

function Main(): React.JSX.Element {
  return (
    <main>
      <Services />
      <Opportunities />
      <SuccessStories />
      <About />
      <Contact />
    </main>
  );
}

export default Main;
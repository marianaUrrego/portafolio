import {
  Navigation,
  Footer,
  Hero,
  About,
  TechStack,
  Projects,
  Education,
  ScrollToTop,
} from "./components";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <ScrollToTop />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Education />
      </main>

      <Footer />
    </div>
  );
}
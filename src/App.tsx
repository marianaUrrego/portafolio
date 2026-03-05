import {
  Navigation,
  Footer,
  Hero,
  About,
  TechStack,
  Projects,
  Education,
} from "./components";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      
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
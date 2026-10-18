import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Menu } from './sections/Menu';
import { Gallery } from './sections/Gallery';
import { Contact } from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-coffee-50 dark:bg-zinc-950 transition-colors duration-300 text-zinc-800 dark:text-zinc-200 selection:bg-coffee-600/30">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <Gallery />
          <Contact />
        </main>
        <footer className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-600 border-t border-zinc-100 dark:border-zinc-900">
          © {new Date().getFullYear()} Vibe Café. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
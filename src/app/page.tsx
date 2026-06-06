import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #c0c0c0', color: '#555', backgroundColor: '#ffffff' }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif" }}>© {new Date().getFullYear()} Ashfak KP. All rights reserved.</p>
      </footer>
    </main>
  );
}
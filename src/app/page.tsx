import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      {/* <Education /> */}
      
      <footer style={{ textAlign: 'center', padding: '2rem', marginTop: '4rem', borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} Ashfak KP. All rights reserved.</p>
      </footer>
    </main>
  );
}

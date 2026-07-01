import Header from './components/Header';
import Hero from './components/Hero';
import Gift from './components/Gift';

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      {/* Darken/flatten slightly so foreground text stays legible */}
      <div className="fixed inset-0 z-0 bg-[#05050a]/30 pointer-events-none" />

      {/* Navigation layout */}
      <Header />

      {/* Main console content */}
      <main className="relative z-10">
        <Hero />
      </main>

      {/* Surprise popup widget */}
      <Gift />
    </div>
  );
}
import { motion } from 'framer-motion';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-coffee-50/50 dark:bg-zinc-900/50 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-coffee-600 uppercase">The Space</span>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 dark:text-white font-bold mt-2">Designed to Unwind</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[450px]">
          <div className="relative group overflow-hidden rounded-3xl h-full shadow-lg">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" alt="Café interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative group overflow-hidden rounded-3xl h-full shadow-lg md:translate-y-6">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" alt="Espresso extraction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative group overflow-hidden rounded-3xl h-full shadow-lg">
            <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop" alt="Pour over session" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};
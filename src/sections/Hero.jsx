import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-coffee-100/40 via-coffee-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-sm tracking-widest font-bold text-coffee-600 uppercase">Artisanal Coffee & Space</span>
          <h1 className="text-5xl md:text-7xl font-serif text-coffee-900 dark:text-coffee-50 font-bold leading-tight">
            Where Craft <br />Meets <span className="text-coffee-600 italic">Comfort</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
            Step away from the noise. Enjoy precision-roasted house blends crafted by baristas passionate about every cup.
          </p>
          <div className="flex space-x-4">
            <a href="#menu"><Button variant="primary">Explore Menu</Button></a>
            <a href="#contact"><Button variant="secondary">Reservations</Button></a>
          </div>
        </motion.div>

        {/* Coffee Cup & Animated Steam Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center h-[400px] md:h-[500px]"
        >
          {/* Decorative Backdrop Blur circles */}
          <div className="absolute w-72 h-72 bg-coffee-600/20 dark:bg-coffee-600/10 rounded-full filter blur-3xl -z-10" />
          
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Simple Animated Steam Vectors */}
            <div className="absolute top-[-40px] flex space-x-4 opacity-70">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -40, -60], 
                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                    opacity: [0, 0.8, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeInOut" 
                  }}
                  className="w-1 h-16 bg-gradient-to-t from-coffee-600/40 to-transparent rounded-full filter blur-[2px]"
                />
              ))}
            </div>
            
            {/* Minimalist Coffee Cup Image Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop" 
              alt="Coffee mug" 
              className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white/60 dark:border-zinc-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-4xl mx-auto bg-coffee-100/30 dark:bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-coffee-200/20 dark:border-zinc-800/20 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-coffee-900 dark:text-white font-bold">Secure A Table</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">Planning a meet-up or remote work session? Reserve ahead.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-coffee-800 dark:text-zinc-400 mb-2 uppercase">Full Name</label>
              <input type="text" className="px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 outline-none focus:border-coffee-600 dark:focus:border-coffee-400 text-zinc-900 dark:text-white transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-coffee-800 dark:text-zinc-400 mb-2 uppercase">Guests</label>
              <select className="px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 outline-none focus:border-coffee-600 text-zinc-900 dark:text-white transition-colors">
                <option>1 Person</option>
                <option>2 People</option>
                <option>4+ People</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-coffee-800 dark:text-zinc-400 mb-2 uppercase">Special Requests</label>
            <textarea rows="4" className="px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 outline-none focus:border-coffee-600 text-zinc-900 dark:text-white transition-colors" placeholder="Any dietary preferences or accessibility needs?"></textarea>
          </div>
          <div className="text-center">
            <Button variant="primary" className="w-full md:w-auto">Request Reservation</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
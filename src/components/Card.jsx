import { motion } from 'framer-motion';

export const Card = ({ title, price, description, image, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      onClick={onSelect}
      className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-3xl p-5 border border-coffee-100/40 dark:border-zinc-800/40 shadow-xl cursor-pointer overflow-hidden group"
    >
      <div className="relative overflow-hidden rounded-2xl mb-4 h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-coffee-900 dark:text-coffee-100">{title}</h3>
        <span className="text-coffee-600 dark:text-coffee-400 font-bold">{price}</span>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{description}</p>
    </motion.div>
  );
};
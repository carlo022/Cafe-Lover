import { motion } from 'framer-motion';

export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm shadow-md cursor-pointer";
  const variants = {
    primary: "bg-coffee-800 text-white hover:bg-coffee-900 dark:bg-coffee-600 dark:hover:bg-coffee-100 dark:hover:text-coffee-900",
    secondary: "bg-white/20 text-coffee-900 border border-coffee-800/20 dark:text-white dark:border-white/20 hover:bg-white/40"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
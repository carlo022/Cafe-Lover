import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        {/* Box */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-coffee-50 dark:bg-zinc-900 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative border border-white/20"
        >
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full text-white z-10">
            <X size={20} />
          </button>
          <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-coffee-900 dark:text-white">{item.title}</h3>
              <span className="text-xl font-bold text-coffee-600">{item.price}</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">{item.longDescription || item.description}</p>
            <button onClick={onClose} className="w-full py-3 bg-coffee-800 text-white rounded-xl font-medium hover:bg-coffee-900">
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
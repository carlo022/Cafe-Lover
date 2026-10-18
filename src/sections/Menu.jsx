import { useState } from 'react';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';

const MENU_DATA = [
  { id: 1, title: 'Signature Flat White', price: '$4.50', description: 'Double shot espresso balanced smoothly with velvet microfoam.', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=500&auto=format&fit=crop', longDescription: 'Crafted carefully from our single-origin Ethiopian beans, our Signature Flat White boasts tasting notes of rich cacao and stone fruits, mixed flawlessly with textured milk.' },
  { id: 2, title: 'Cold Brew Citrus', price: '$5.20', description: '24-hour slow drip coffee infused with fresh organic orange slices.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500&auto=format&fit=crop' },
  { id: 3, title: 'Matcha Blossom Latte', price: '$5.50', description: 'Ceremonial grade Uji matcha whisked gently with subtle elderflower notes.', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=500&auto=format&fit=crop' },
  { id: 4, title: 'Pistachio Croissant', price: '$4.80', description: 'House-made laminated pastry filled with smooth, pure Sicilian pistachio cream.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500&auto=format&fit=crop' },
];

export const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="menu" className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-coffee-600 uppercase">Curated Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 dark:text-white font-bold mt-2">Flavors For Your Ritual</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_DATA.map((item) => (
            <Card key={item.id} {...item} onSelect={() => setSelectedItem(item)} />
          ))}
        </div>

        <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} item={selectedItem} />
      </div>
    </section>
  );
};
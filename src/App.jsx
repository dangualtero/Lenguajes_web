import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';
import CategoryFilter from './components/CategoryFilter';
import MenuItem from './components/MenuItem';
import SelectedItems from './components/SelectedItems';
import './styles/menu.css';
import brunchBg from './img/fondo2.png'; 
import hamburguesaImg from './img/hamburguesa.jpg';
import pizzaImg from './img/pizza.jpg';
import ensaladaImg from './img/ensalada.jpg';
import jugoImg from'./img/jugo.jpg';
import brownieImg from'./img/brownie.jpg';
import panquequesImg from'./img/panqueques.jpg';
import tostadasImg from'./img/tostadas.jpg';
import arepasImg from'./img/arepas.jpg';
import cheesecakeImg from'./img/cheescake.jpg';
import huevosImg from'./img/huevos.jpg';
import sandwichImg from'./img/sandwich.jpg';
import miloImg from'./img/milo.jpg';
import capuccinoImg from'./img/capuccino.jpg';
import detoxImg from'./img/detox.jpg';
import redvelvetImg from'./img/redvelvet.jpg';
import aguaImg from'./img/agua.jpg';
import latteImg from'./img/latte.jpg';
import chocolateImg from'./img/chocolate.jpg';



const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedItems, setSelectedItems] = useState([]);

  const menuItems = [
    { 
      id: 1, 
      name: 'Pizza', 
      price: 25000, 
      image: pizzaImg,
      category: 'Comidas',
      description: 'Deliciosa pizza con salsa de tomate y mozzarella fresca',
      tags: ['italiana', 'queso'],
      popular: true
    },
    { 
      id: 2, 
      name: 'Hamburguesa', 
      price: 18000, 
      image: hamburguesaImg,
      category: 'Comidas',
      description: 'Hamburguesa jugosa con papas fritas y salsas',
      tags: ['carne', 'clásico']
    },
    { 
      id: 3, 
      name: 'Ensalada César', 
      price: 15000, 
      image: ensaladaImg,
      category: 'Comidas',
      description: 'Fresca ensalada con pollo grillado y aderezo césar',
      tags: ['saludable', 'fresco'],
      popular: true
    },
    { 
      id: 4, 
      name: 'Jugo Natural', 
      price: 8000, 
      image: jugoImg,
      category: 'Bebidas',
      description: 'Jugo 100% natural de frutas frescas',
      tags: ['natural', 'vitaminas']
    },
    { 
      id: 5, 
      name: 'Brownie', 
      price: 12000, 
      image: brownieImg,
      category: 'Postres',
      description: 'Brownie de chocolate con helado de vainilla',
      tags: ['chocolate', 'dulce'],
      popular: true
    },
     { 
      id: 6, 
      name: 'Panqueques', 
      price: 14000, 
      image: panquequesImg,
      category: 'Comidas',
      description: 'Panqueques esponjosos con miel de maple y frutas frescas',
      tags: ['esponjosos', 'dulce'],
      popular: true
    },
    { 
      id: 7, 
      name: 'Tostadas Francesas', 
      price: 16000, 
      image: tostadasImg,
      category: 'Comidas',
      description: 'tostadas francesas con sirope y frutas frescas',
      tags: ['esponjosos', 'dulce'],
      popular: false
    },
    { 
      id: 8, 
      name: 'Trilogia de arepas rellenas', 
      price: 20000, 
      image: arepasImg,
      category: 'Comidas',
      description: 'tres arepas rellenas con diferentes ingredientes (carne, pollo, mixta)',
      tags: ['3', 'rico'],
      popular: false
    },
     { 
      id: 9, 
      name: 'Capuccino', 
      price: 10000, 
      image: capuccinoImg,
      category: 'Bebidas',
      description: 'Café espresso con leche espumada, cremoso y equilibrado',
      tags: ['café', 'leche'],
      popular: false
    }, { 
      id: 10, 
      name: 'Latte', 
      price: 12000, 
      image: latteImg,
      category: 'Bebidas',
      description: 'Espresso suave con abundante leche caliente y un toque de espuma',
      tags: ['café', 'rico'],
      popular: true
    },
    { 
      id: 11, 
      name: 'Sandwich de Pollo', 
      price: 29000, 
      image: sandwichImg,
      category: 'Comidas',
      description: 'Sandwich de pechuga de pollo, en pan masa madre, salsa pesto, tomate, queso, rujula y papas rusticas',
      tags: ['saludable', 'rico'],
      popular: false
    },
     { 
      id: 12, 
      name: 'Huevos Napolitanos', 
      price: 23000, 
      image: huevosImg  ,
      category: 'Comidas',
      description: 'Huevos en cacerola con salsa naopolitana, aguacate, queso',
      tags: ['saludable', 'rico'],
      popular: true
    },
      { 
      id: 13, 
      name: 'Cheesecake de frutos rojos', 
      price: 12000, 
      image: cheesecakeImg,
      category: 'Postres',
      description: 'Cheesecake con frutos rojos y galleta',
      tags: ['frutos rojos', 'rico'],
      popular: false
    },
     { 
      id: 14, 
      name: 'Esfera de chocolate con helado', 
      price: 18500, 
      image: chocolateImg,
      category: 'Postres',
      description: 'Esfera de chocolate elaborada con chocolate 75% cacao, helado, frutos amarillos y frutos rojos',
      tags: ['postre' ],
      popular: true
    },
    { 
      id: 15, 
      name: 'Smoothie detox', 
      price: 15000, 
      image: detoxImg,
      category: 'Bebidas',
      description: 'Elaborado con piña, aguacate, espinaca, pepino y apio',
      tags: ['saludable', 'frio'],
      popular: false
    },
    { 
      id: 16, 
      name: 'Torta red velvet', 
      price: 14000, 
      image: redvelvetImg,
      category: 'Postres',
      description: 'torta personal red velvet con queso crema y frutos rojos',
      tags: ['postre', 'torta'],
      popular: true
    },
    { 
      id: 17, 
      name: 'Milo Frio', 
      price: 14500, 
      image: miloImg,
      category: 'Bebidas',
      description: 'Bebida fría con chocolate milo, con leche deslactosada y borde de ganache de chocolate',
      tags: ['delicioso', 'frio'],
      popular: false
    },
    { 
      id: 18, 
      name: 'Agua sin gas', 
      price: 6500, 
      image: aguaImg,
      category: 'Bebidas',
      description: 'Botella de agua sin gas 500ml',
      tags: ['saludable', 'rico'],
      popular: false
    },

  ];

  const categories = ['Todos', 'Comidas', 'Bebidas', 'Postres'];

  const filteredItems = menuItems.filter(item => {
    const searchLower = searchTerm.toLowerCase().trim();
    const itemNameLower = item.name.toLowerCase();
    
 
    const matchesSearch = searchLower === '' || 
                         itemNameLower.includes(searchLower) ||
                         itemNameLower.split(' ').some(word => word.startsWith(searchLower));
    
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectItem = (item) => {
    const existingItem = selectedItems.find(selected => selected.id === item.id);
    
    if (existingItem) {
      setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (id, change) => {
    setSelectedItems(selectedItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const total = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = selectedItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0
    }}>
      <Navbar />
      <main style={{ 
        flex: 1,
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundImage: `url(${brunchBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
     
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 245, 240, 0.90)',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="menu-app">
            <div className="menu-container">
              <MenuHeader 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />

              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
              />

              <div className={`menu-grid ${selectedItems.length > 0 ? 'with-cart' : ''}`}>
                {filteredItems.map(item => (
                  <MenuItem 
                    key={item.id}
                    item={item} 
                    onSelect={handleSelectItem}
                    isSelected={selectedItems.some(selected => selected.id === item.id)}
                  />
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '4rem', 
                  color: '#CF948E',
                  fontSize: '1.5rem'
                }}>
                  No se encontraron platillos que coincidan con tu búsqueda.
                </div>
              )}
            </div>
          </div>

          {selectedItems.length > 0 && (
            <SelectedItems
              selectedItems={selectedItems}
              onRemove={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
              total={total}
              totalItems={totalItems}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;



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
  ];

  const categories = ['Todos', 'Comidas', 'Bebidas', 'Postres'];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectItem = (item) => {
    const isSelected = selectedItems.some(selected => selected.id === item.id);
    
    if (isSelected) {
      setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (id) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

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
        {/* Overlay semi-transparente para mejorar legibilidad */}
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
              total={total}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;



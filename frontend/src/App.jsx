import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import AdminHome from './pages/admin/Home';
import Cart from './pages/Cart';
import TrackOrder from './pages/TrackOrder';
import Categories from './pages/admin/Categories';
import Category from './pages/admin/Category';
import Product from './pages/admin/Product';
import AddCategory from './pages/admin/AddCategory';
import AddProduct from './pages/admin/AddProduct';
import DelProduct from './pages/admin/DelProduct';
import DelCategory from './pages/admin/DelCategory';
import AdminAuthContext from './Components/AuthContext';

function App() {
  const [AdminAuth] = useState('123456');
  return (
    <AdminAuthContext.Provider value={AdminAuth}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/trackorder" element={<TrackOrder />} />
          <Route path="/admin/dashboard" element={<AdminHome />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/addCategory" element={<AddCategory />} />
          <Route path="/admin/category/:id" element={<Category />} />
          <Route path="/admin/product/:id" element={<Product />} />
          <Route path="/admin/delProduct/:id" element={<DelProduct />} />
          <Route path="/admin/delCategory/:id" element={<DelCategory />} />
        </Routes>
      </BrowserRouter>
    </AdminAuthContext.Provider>
  );
}

export default App;

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
import EditOrder from './pages/admin/EditOrder';
import EditCategory from './pages/admin/EditCategory';
import EditProduct from './pages/admin/EditProduct';
import DelOrder from './pages/admin/DelOrder';
import AdminAuthContext from './Components/AuthContext';
import Orders from './pages/admin/Orders';

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
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/addCategory" element={<AddCategory />} />
          <Route path="/admin/category/:id" element={<Category />} />
          <Route path="/admin/product/:id" element={<Product />} />
          <Route path="/admin/editOrder/:id" element={<EditOrder />} />
          <Route path="/admin/editProduct/:id" element={<EditProduct />} />
          <Route path="/admin/editCategory/:id" element={<EditCategory />} />
          <Route path="/admin/delProduct/:id" element={<DelProduct />} />
          <Route path="/admin/delCategory/:id" element={<DelCategory />} />
          <Route path="/admin/delOrder/:id" element={<DelOrder />} />
        </Routes>
      </BrowserRouter>
    </AdminAuthContext.Provider>
  );
}

export default App;

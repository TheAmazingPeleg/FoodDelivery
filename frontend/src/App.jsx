import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminAuthContext } from './Components/AuthContext/AdminAuthContext';
import { UserAuthContext } from './Components/AuthContext/UserAuthContext';
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
import Orders from './pages/admin/Orders';
import products from './Components/MainPage/ProductData';
import ViewProduct from './pages/ViewProduct';

function App() {
  const [AdminAuth] = useState('123456');
  const [UserAuth] = useState('123456');
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState(products);
  const [ordersList, setOrdersList] = useState([]);

  return (
    <AdminAuthContext.Provider value={AdminAuth}>
      <UserAuthContext.Provider value={UserAuth}>
        <BrowserRouter>
          <Navbar productsList={productsList} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/trackorder" element={<TrackOrder />} />
            <Route path="/product/:id" element={<ViewProduct products={productsList} />} />
            <Route path="/admin/dashboard" element={<AdminHome />} />
            <Route path="/admin/categories" element={<Categories categories={categoriesList} />} />
            <Route path="/admin/orders" element={<Orders orders={ordersList} />} />
            <Route path="/admin/addProduct" element={<AddProduct categories={categoriesList} products={productsList} setProducts={setProductsList} />} />
            <Route path="/admin/addCategory" element={<AddCategory />} categories={categoriesList} setCategories={setCategoriesList} />
            <Route path="/admin/category/:id" element={<Category categories={categoriesList} products={productsList} setCategories={setCategoriesList} />} />
            <Route path="/admin/product/:id" element={<Product />} categories={categoriesList} products={productsList} setProducts={setProductsList} />
            <Route path="/admin/editOrder/:id" element={<EditOrder orders={ordersList} setOrders={setOrdersList} />} />
            <Route path="/admin/editProduct/:id" element={<EditProduct categories={categoriesList} products={productsList} setProducts={setProductsList} />} />
            <Route path="/admin/editCategory/:id" element={<EditCategory categories={categoriesList} setCategories={setCategoriesList} />} />
            <Route path="/admin/delProduct/:id" element={<DelProduct products={productsList} setProducts={setProductsList} />} />
            <Route path="/admin/delCategory/:id" element={<DelCategory categories={categoriesList} setCategories={setCategoriesList} />} />
            <Route path="/admin/delOrder/:id" element={<DelOrder orders={ordersList} setOrders={setOrdersList} />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContext.Provider>
    </AdminAuthContext.Provider>
  );
}

export default App;

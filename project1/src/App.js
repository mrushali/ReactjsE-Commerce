import React from 'react';
import './App.css';
import Category from './pages/category/Category';
import Company from './pages/company/Company';
import SubCategory from './pages/subCategory/SubCategory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CompanyData from './pages/company/CompanyData';
import CategoryData from './pages/category/CategoryData';
import SubCategoryData from './pages/subCategory/SubCategoryData';
import Dashboard from './pages/Dashboard';
import Header from './user_layout/Header';
import Sidebar from './user_layout/Sidebar';
import Footer from './user_layout/Footer';
import Product from './user_page/TrendyProduct';
import UserCategory from './user_page/UserCategory';
import Offer from './user_page/Offer';
import UserDashboard from './user_page/UserDashboard';
import Details from './user_page/Details';
import Contact from './user_page/Contact';
import Checkout from './user_page/Checkout';
import Cart from './user_page/Cart';
import Shop from './user_page/Shop';
import Features from './user_page/Features';
import Subscribe from './user_page/Subscribe';
import JustArriveProduct from './user_page/JustArriveProduct';
import TrendyProduct from './user_page/TrendyProduct';
import Vendor from './user_page/Vendor';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/admin/dashboard' element={<Dashboard></Dashboard>}></Route>

          <Route path='/admin/company/create' element={<Company></Company>}></Route>
          <Route path='/admin/company' element={<CompanyData></CompanyData>}></Route>

          <Route path='/admin/category/create' element={<Category></Category>}></Route>
          <Route path='/admin/category' element={<CategoryData></CategoryData>}></Route>

          <Route path='/admin/sub_category/create' element={<SubCategory></SubCategory>}></Route>
          <Route path='/admin/sub_category' element={<SubCategoryData></SubCategoryData>}></Route>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<UserDashboard></UserDashboard>}></Route>
          <Route path='/category' element={<UserCategory></UserCategory>}></Route>
          <Route path='/feature' element={<Features></Features>}></Route>
          <Route path='/offer' element={<Offer></Offer>}></Route>
          <Route path='/subscribe' element={<Subscribe></Subscribe>}></Route>
          <Route path='/just_arrive_product' element={<JustArriveProduct></JustArriveProduct>}></Route>
          <Route path='/trendy_product' element={<TrendyProduct></TrendyProduct>}></Route>
          <Route path='/vendor' element={<Vendor></Vendor>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

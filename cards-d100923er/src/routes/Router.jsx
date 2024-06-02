import React from 'react'
import { Routes,Route } from "react-router-dom";
import ROUTES from './routesModel';
import CardsPage from '../cards/pages/CardsPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import SandBox from '../sandbox/SandBox';
import Counter from '../sandbox/Counter';
import BoxColor from '../sandbox/BoxColor';
import BoxSize from '../sandbox/BoxSize';
import Form from '../sandbox/FormPage';
import LifeCycle from '../sandbox/LifeCycle';
import Countries from '../sandbox/Countries';
import FormExample from '../sandbox/FormExample';
import MapPage from '../sandbox/map/MapPage';
import WindowSize from '../sandbox/WindowSize';
import Login from '../sandbox/Login';
import Signup from '../sandbox/Signup';
import SignupPage from '../users/pages/SignupPage';
import LoginPage from '../users/pages/LoginPage';
import ParentComponent from '../sandbox/optimization/ParentComponent';
import ParentComponentPage from '../sandbox/context/ParentComponentPage';
import UserProfile from '../users/pages/UserProfile';
import AddCardPage from '../cards/pages/AddCardPage';
import EditCardPage from '../cards/pages/EditCardPage';
import MyCards from '../cards/pages/MyCards';
import FavCards from '../cards/pages/FavCards';
import EditUserPage from '../users/pages/EditUserPage';
import CrmPanel from '../users/pages/CrmPanel';

export default function Router() {
  return (
    <Routes>
       <Route path={ROUTES.ROOT} element={<CardsPage/>}/>
       <Route path={ROUTES.CARDS} element={<CardsPage/>}/>
       <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
       <Route path={ROUTES.CARD_INFO+'/:id'} element={<CardDetailsPage/>}/>
       <Route path={ROUTES.SIGNUP} element={<SignupPage/>}/>
       <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
       <Route path={ROUTES.USER_PROFILE} element={<UserProfile/>}/>
       <Route path={ROUTES.CREATE_CARD} element={<AddCardPage/>}/>
       <Route path={ROUTES.EDIT_CARD+'/:id'} element={<EditCardPage/>}/>
       <Route path={ROUTES.MY_CARDS} element={<MyCards/>}/>
       <Route path={ROUTES.FAV_CARDS} element={<FavCards/>}/>
       <Route path={ROUTES.EDIT_USER} element={<EditUserPage/>}/>
       <Route path={ROUTES.CRM_PANEL} element={<CrmPanel/>}/>

       <Route path={ROUTES.SANDBOX} element={<SandBox/>}>
          <Route path='counter' element={<Counter/>}/>
          <Route path='box color' element={<BoxColor/>}/>
          <Route path='box size' element={<BoxSize/>}/>
          <Route path='form' element={<Form/>}/>
          <Route path='life cycle' element={<LifeCycle/>}/>
          <Route path='countries' element={<Countries/>}/>
          <Route path='form example' element={<FormExample/>}/>
          <Route path='map page' element={<MapPage/>}/>
          <Route path='window size' element={<WindowSize/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='optimization' element={<ParentComponent/>}/>
          <Route path='context' element={<ParentComponentPage/>}/>

       </Route>
       
       <Route path="*" element={<ErrorPage />} />

    </Routes>
  )
}

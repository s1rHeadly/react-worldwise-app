
import {Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form'
import { CitiesProvider } from './context/CitiesContext';







const App = () => {


  return (
   <>

   {/* we could have a global header here */}

    
   <CitiesProvider>
    {/* The Cities Context Provider */}

      <Routes>
      
        <Route index element={<Home />} />
          {/* index lets the route know that this is the default component */}
        <Route path="/app" element={<AppLayout />}>
            {/* NESTED /APP ROUTES */}
            {/* The Route with the index element is the default for when the user lands on '/app' */}
            {/* When the user selected /app/cities then that component will be displayed */}
          <Route index element={<Navigate replace to="cities"/>} /> 
          <Route path="cities" element={<CityList />}/>
          <Route path="cities/:id"element={<City />}/>
          <Route path="countries" element={<CountryList/>}/>
          <Route path="form" element={<Form/>}/>
          </Route>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </CitiesProvider>
    
     {/* we could have a global footer here */}


   </>
  )
}

export default App
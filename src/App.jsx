
import {Routes, Route} from 'react-router-dom';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import useFetchCities from './hooks/useFetch';


const BASE_URL = 'http://localhost:8000'



const App = () => {

// fetch hook for cities => see useFetchCties file
const {cities, loading, error} = useFetchCities(`${BASE_URL}/cities`);


  return (
   <>
   
   {/* we could have a global header here */}

    <Routes>
      {/* index lets the route know that this is the default component */}
      <Route index element={<Home />} />
      <Route path="/app" element={<AppLayout />}>
          {/* The Route with the index element is the default for when the user lands on '/app' */}
          {/* When the user selected /app/cities then that component will be displayed */}
        <Route index element={<CityList cities={cities} isLoading={loading} hasError={error}/>} /> 
        <Route path="cities" element={<CityList cities={cities} isLoading={loading} hasError={error}/>}/>
        <Route path="countries" element={<p>Countries</p>}/>
        <Route path="form" element={<p>Form</p>}/>
      </Route>
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    
   {/* we could have a global footer here */}
   </>
  )
}

export default App
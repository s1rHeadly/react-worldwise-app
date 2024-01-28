
import {Routes, Route} from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';





const App = () => {


  return (
   <>
   {/* we could have a global header here */}
    <Routes>
      <Route index element={<Home />} />
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<p>Cities</p>} />
        <Route path="cities" element={<p>Cities</p>}/>
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
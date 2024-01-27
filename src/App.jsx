
import {Routes, Route} from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';



const App = () => {


  return (
   <>
   {/* we could have a global header here */}
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
   {/* we could have a global footer here */}
   </>
  )
}

export default App
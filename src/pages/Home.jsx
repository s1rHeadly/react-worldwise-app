import {Link} from 'react-router-dom';
import PageNav from '../components/PageNav';
const Home = () => {
  return (
    <div>
    <PageNav />
    <h1>WorldwWise</h1>
    <Link to="/app">Go to App</Link>
    </div>
  )
}

export default Home
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './pages/Blog-Details';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import NavigationBar from './template/Navbar';
import CreateBlog from './pages/Create';
import EditBlog from './pages/Edit';

function App() {
  return (
    <Router>

      <NavigationBar />

      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-blog' element={<CreateBlog />} />
          <Route path='/update-blog/:id' element={<EditBlog />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

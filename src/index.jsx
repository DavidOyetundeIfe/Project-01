import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/vans/About';
import Views from './pages/vans/views';
import List from './pages/vans/List';
import ListDetails from './pages/vans/ListData';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import Dashboard from './pages/host/Dashboard';
import HostLayout from './components/HostLayout';
import Vans from './pages/host/Vans';
import VansDetails from './pages/host/VansDetail';
import DetailsLayout from './components/DetailsLayout';
import Details from './pages/details/Details';
import Pricing from './pages/details/Pricing';
import Photos from './pages/details/Photos';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Layout/>}>
          <Route path="/" element={<App/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="views" element={<Views/>}/>
          <Route path="list" element={<List/>}/>
          <Route path="list/:id" element={<ListDetails/>}/>

          <Route path="host"element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="vans" element={<Vans/>}/>
              <Route path="vans/:id" element={<DetailsLayout/>}>
                    <Route path="details" element={<Details/>}/>
                    <Route path="pricing" element={<Pricing/>}/>
                    <Route path="photos" element={<Photos/>}/>
              </Route>
              <Route path="reviews" element={<Reviews/>}/>
          </Route>
          </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

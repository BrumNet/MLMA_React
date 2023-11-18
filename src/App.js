import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer'
import Check from './pages/check.js'
import Agents from './pages/agents.js'
import MyTickets from './pages/yourtickets.js'
import Pay from './pages/pay.js'
import {createBrowserRouter} from "react-router-dom";
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <div className="h-screen">
        <Header/>
        <Home className/>
        <Footer/>
      </div>
      </>,
      errorElement: <center>Page Not Found</center>//error page
    },
    {
      path: "/check",
      element: <>
      <div className="h-screen">
        <Header/>
        <Check/>
        <Footer/>
      </div>
      </>
    },
    {
      path: "/agents",
      element: <>
      <div className="h-screen">
        <Header/>
        <Agents/>
        <Footer/>
      </div>
      </>
    },
    {
      path: "/pay",
      element: <>
      <div className="h-screen">
        <Header/>
        <Pay/>
        <Footer/>
      </div>
      </>
    },
]) 

export default router;

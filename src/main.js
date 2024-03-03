import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Footer from './pages/footer/footer';
import Home from './pages/Home/Home';
import { useState } from 'react';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/gallery';
import 'typeface-inter';
import { buttFusionFittings } from './Products/allProducts';

function Main() {
    // const selectedPage = useSelector((state) => state.page.selectedPage);
  const [selectedPage,setSelectedPage]=useState("")
    const params = useParams("");
    const { page } = params;
    const {id}=params
    console.log(id)
    console.log(page)   
    useEffect(() => {
      // Scroll to the top of the page smoothly when the component mounts
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  
      if (page === "products") {
        setSelectedPage(<Products setSelectedPage={setSelectedPage} />);
      } else if (page==="home"){
        setSelectedPage(<Home />);
      }
      else if (page==="contactus"){
        setSelectedPage(<Contact></Contact>);
      }
      else if (page==="gallery"){
        setSelectedPage(<Gallery></Gallery>);
      } 
      else if (page==="ppcompressionfittings"){
        setSelectedPage(<Products setSelectedPage={setSelectedPage} products={buttFusionFittings}></Products>)
      }
      // else if (page==="hdpebuttfusionfittings"){
      //   setSelectedPage(<Products setSelectedPage={setSelectedPage} products={ppCompressionFittings}></Products>)
      // }
      // else if (page==="jointingMachines"){
      //   setSelectedPage(<Products setSelectedPage={setSelectedPage} products={ppCompressionFittings}></Products>)
      // }
      // else if (page==="electrofusionfittings"){
      //   setSelectedPage(<Products setSelectedPage={setSelectedPage} products={ppCompressionFittings}></Products>)
      // }
      // else if (page==="toolsandaccessories"){
      //   setSelectedPage(<Products setSelectedPage={setSelectedPage} products={ppCompressionFittings}></Products>)
      // }
      else if(page==="" || selectedPage==="") {
        setSelectedPage(<Home></Home>)

      }
  
      
    }, [page,id]);
  
    // useEffect(() => {
    //   console.log("hamza");
    //   if (id != null) {
    //     setSelectedPage(<ProductDetails />);
    //   }
    // }, [id]);


    const scrollbarStyles = `
    --sb-track-color: #232e33;
    --sb-thumb-color: #6BAF8D;
    --sb-size: 10px;

    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
    scrollbar-width: thin;
  `;
  
    return (
      <div className="bg-slate-100 overflow-x-hidden" style={{ '--sb-track-color': '#232e33',    fontFamily: 'Inter, sans-serif' ,
    }}>
        <style>{scrollbarStyles}</style>
        <Navbar></Navbar>
        {selectedPage ? selectedPage : null}


        <Footer></Footer>
      </div>
    );
  }

export default Main;
  
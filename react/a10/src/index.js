import React from "react"
import ReactDOM from 'react-dom';
import Footer from "./components/Footer";
import MainContent  from "./components/MainContent";
import Header from './components/Header';
import './style/index.css';

function WholePage(){ 
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    );
}
ReactDOM.render(<WholePage />, document.getElementById("root"))


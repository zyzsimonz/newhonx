import { React } from 'react'
import Navigation from '../components/navigation';
import Gallary from '../components/gallary';
import GateFace from '../components/gateface';
import '../style/homePage.css'
import Product from '../components/product';




  

export default function HomePage() {
    return (
        <div className="homePage">
            <Navigation />
            <Gallary />
            <Product />
        </div>
    );
};
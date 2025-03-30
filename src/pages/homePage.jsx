import { React } from 'react'
import Navigation from '../components/navigation';
import Gallary from '../components/gallary';
import GateFace from '../components/gateface';
import '../style/homePage.css'




  

export default function HomePage() {
    return (
        <div className="homePage">
            <Navigation />
            <GateFace />
            <Gallary />
           
        </div>
    );
};
import { React } from 'react'
import Navigation from '../components/navigation';
import Title from '../components/title';
import Gallary from '../components/gallary';


export default function HomePage() {
    return (
        <div>
            <Title />
            <Navigation />
            <Gallary />
        </div>
    );
};

import About from '../components/Home/About';
import Hero from '../components/Home/Hero';
import NavBar from '../components/Home/NavBar';

const HomeLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <NavBar/>
            <Hero/>
            <About/>
        </div>
    );
};

export default HomeLayouts;
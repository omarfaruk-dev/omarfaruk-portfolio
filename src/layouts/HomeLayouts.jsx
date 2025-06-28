
import About from '../components/Home/About';
import Hero from '../components/Home/Hero';
import NavBar from '../components/Home/NavBar';
import Projects from '../components/Home/Projects';
import Skill from '../components/Home/Skills';

const HomeLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <NavBar/>
            <Hero/>
            <About/>
            <Skill/>
            <Projects/>
        </div>
    );
};

export default HomeLayouts;
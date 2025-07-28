
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import NavBar from '../components/Home/NavBar';
import Projects from '../components/Home/Projects';
import Skill from '../components/Home/Skills';

const HomeLayouts = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    return (
        <div>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4">
                <Hero />
                <About />
                <Skill />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayouts;
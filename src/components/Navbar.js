import { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import MyResume from '../assets/MyResume.pdf'

const Navbar = () => {
    const [ navIsOpen, setNavIsOpen ] = useState(false);
    const handleNav = () => {
        setNavIsOpen(!navIsOpen);
    };

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
            <div>
                <img src={Logo} alt="Logo" style={{width: "50px"}}/>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleNav}>
                {!navIsOpen ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            
            {navIsOpen &&
            <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                <li className='py-6 text-4xl'>
                    <Link to="home" smooth={true} duration={500} onClick={handleNav}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="experience" smooth={true} duration={500} onClick={handleNav}>
                        Experience
                    </Link>
                </li>
                <li className='py-6 text-4xl'>                    
                    <Link to="skills" smooth={true} duration={500} onClick={handleNav}>
                        Skills
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link to="work" smooth={true} duration={500} onClick={handleNav}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="contact" smooth={true} duration={500} onClick={handleNav}>
                        Contact
                    </Link>
                </li>
            </ul>}

            {/*Social Media*/}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                        <a className='flex justify-between items-center w-full text-gray-300'  href="https://www.linkedin.com/in/rexhang0212/"> 
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'  href="https://github.com/rexhang0501"> 
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#075e54]'>
                        <a className='flex justify-between items-center w-full text-gray-300'  href="https://api.whatsapp.com/send?phone=60169739397"> 
                            WhatsApps <AiOutlineWhatsApp size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b1]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href={MyResume} download="Resume - SEH ZHAO HANG" target="_blank" rel="noreferrer">
                            Download Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#373741]'>
                        <RouterLink className='flex justify-between items-center w-full text-gray-300' to="/my-resume">
                            View my Resume <CiViewList size={30}/>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
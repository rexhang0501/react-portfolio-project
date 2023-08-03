import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { Link as RouterLink } from 'react-router-dom';
import MyResume from '../assets/MyResume.pdf'

const Home = () => {
    return(
        <div name='home' className='bg-[#0a192f] w-full pt-[80px] md:h-screen'>
            <div className='max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full'>
                <p className='text-2xl text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-4'>Rex Hang</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#797979]'>I am a software developer.</h2>
                <p class='text-[#d8d8d8] py-4 max-w-[700]'>Welcome to my portfolio website! I'm an ambitious and innovative software developer with a relentless passion for transforming cutting-edge ideas into tangible solutions. 
                    I thrive in the dynamic world of technology and relish the challenges it brings. 
                    With a strong foundation in programming languages and a creative approach to problem-solving, 
                    I continuously seek to push the boundaries of what's possible.
                    <br/><br/>
                    What I believe, is that good things come to those who work their asses off. 
                    And the people who reached the top of the mountain didn't just fall there.
                    My motto is, "If you want to win the lottery, you have to make the money to buy the ticket".
                </p>
                <div className='grid'>
                    <a className='md:hidden text-white text-sm border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0A66C2] duration-500 cursor-pointer'
                    href="https://www.linkedin.com/in/rexhang0212/">
                        Go to my LinkedIn
                        <FaLinkedin className='ml-2' size={30}/>
                        <HiArrowNarrowRight className='ml-2'/>
                    </a>
                    <a className='md:hidden text-white text-sm border-2 px-6 py-3 my-2 flex items-center hover:bg-[#333] duration-500 cursor-pointer'
                    href="https://github.com/rexhang0501">
                        Go to my GitHub
                        <FaGithub className='ml-2' size={30}/>
                        <HiArrowNarrowRight className='ml-2'/>
                    </a>
                    <a className='md:hidden text-white text-sm border-2 px-6 py-3 my-2 flex items-center hover:bg-[#075e54] duration-500 cursor-pointer'
                    href="https://api.whatsapp.com/send?phone=60169739397">
                        Contact me via WhatsApps
                        <AiOutlineWhatsApp className='ml-2' size={30}/>
                        <HiArrowNarrowRight className='ml-2'/>
                    </a>
                    <a className='md:hidden text-white text-sm border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b1] duration-500 cursor-pointer'
                    href={MyResume} download="Resume - SEH ZHAO HANG" target="_blank" rel="noreferrer">
                        Download my resume
                        <BsFillPersonLinesFill className='ml-2' size={30}/>
                        <HiArrowNarrowRight className='ml-2'/>
                    </a>
                    <RouterLink className='md:hidden text-white text-sm border-2 px-6 py-3 my-2 flex items-center hover:bg-[#373741] duration-500 cursor-pointer'
                    to="/react-portfolio-project/my-resume">
                        View my resume
                        <CiViewList className='ml-2' size={30}/>
                        <HiArrowNarrowRight className='ml-2'/>
                    </RouterLink>
                </div>
            </div>
        </div>
    );
};

export default Home;
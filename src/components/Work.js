import WorkImg1 from '../assets/workImg1.png';
import WorkImg2 from '../assets/workImg2.png';
import WorkImg3 from '../assets/workImg3.png';
import { Link } from 'react-scroll';

const Work = () => {
    return(
        <div name='work' className="w-full md:h-screen bg-[#0a192f] text-gray-300 pt-16">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-6">// Check our some of my recent works</p>
                </div>
            
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <div style={{backgroundImage: `url(${WorkImg1})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                            {/*Hover Effect */}
                            <div className='opacity-0 group-hover:opacity-100 duration-500'>
                                <div class="text-center items-center flex-wrap">
                                    <span className='text-sm text-white font-bold'>This is a project I did to teach myself more advance functions of React
                                        and the basic of TailwindCSS as well as showcasing my portfolio.</span>
                                </div>
                                <div className='pt-8 text-center'>
                                    <Link to="home" smooth={true} duration={500}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </Link>
                                    <a href="https://github.com/rexhang0501/react-portfolio-project">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className='text-lg font-bold text-[#797979] tracking-wider'>
                            Portfolio Website
                        </span>
                    </div>

                    <div>
                        <div style={{backgroundImage: `url(${WorkImg2})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                            {/*Hover Effect */}
                            <div className='opacity-0 group-hover:opacity-100 duration-500'>
                                <div class="text-center items-center flex-wrap">
                                    <span className='text-sm text-white font-bold'>This is a project I did to teach myself advance JavaScript.</span>
                                </div>
                                <div className='pt-8 text-center'>
                                    <a href="https://rexhang0501.github.io/javascript-amazon-project-main/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="https://github.com/rexhang0501/javascript-amazon-project-main">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className='text-lg font-bold text-[#797979] tracking-wider'>
                            Amazon Sample Website
                        </span>
                    </div>

                    <div>
                        <div style={{backgroundImage: `url(${WorkImg3})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                            {/*Hover Effect */}
                            <div className='opacity-0 group-hover:opacity-100 duration-500'>
                                <div class="text-center items-center flex-wrap">
                                    <span className='text-sm text-white font-bold'>This is a project I did to teach myself the basic of React.</span>
                                </div>
                                <div className='pt-8 text-center'>
                                    <a href="https://rexhang0501.github.io/react-blog-website-project/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="https://github.com/rexhang0501/react-blog-website-project/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className='text-lg font-bold text-[#797979] tracking-wider'>
                            Blog Sample Website
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
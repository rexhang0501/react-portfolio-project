import CsharpLogo from '../assets/cSharpLogo.png';
import SqlLogo from '../assets/sqlLogo.png';
import JavaScriptLogo from '../assets/javascriptLogo.png';
import ReactLogo from '../assets/reactLogo.png';
import HtmlLogo from '../assets/htmlLogo.png';
import CssLogo from '../assets/cssLogo.png';

const Skills = () => {
    return(
        <div name='skills' className='bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the stacks and technologies I have worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CsharpLogo} alt='JavaScript icon'/>
                        <p className='my-4 font-bold text-[#797979]'>C#</p>
                    </div>
                    <div className='shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SqlLogo} alt='JavaScript icon'/>
                        <p className='my-4 font-bold text-[#797979]'>SQL</p>
                    </div>
                    <div className='shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScriptLogo} alt='JavaScript icon'/>
                        <p className='my-4 font-bold text-[#797979]'>JavaScript</p>
                    </div>
                    <div className='shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactLogo} alt='JavaScript icon'/>
                        <p className='my-4 font-bold text-[#797979]'>React</p>
                    </div>
                    <div className='shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HtmlLogo} alt='JavaScript icon'/>
                        <p className='my-4 font-bold text-[#797979]'>HTML</p>
                    </div>
                    <div className='shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CssLogo} alt='JavaScript icon'/>
                        <p className='my-4 font-bold text-[#797979]'>CSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
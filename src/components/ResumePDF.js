import MyResume from '../assets/MyResume.pdf'

const ResumePDF = () => {
    return(
        <div className='h-screen'>
            <iframe src={MyResume} className='w-full h-full'></iframe>
        </div>
    );
};

export default ResumePDF;
import MyResume from '../assets/MyResume.pdf'

const ResumePDF = () => {
    return(
        <div className='h-screen'>
            <iframe src={MyResume} className='w-full h-full' title='Resume - SEH ZHAO HANG'></iframe>
        </div>
    );
};

export default ResumePDF;
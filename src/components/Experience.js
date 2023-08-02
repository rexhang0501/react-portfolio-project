import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { IoMdSchool } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return(
        <div name='experience' className='w-full bg-[#0a192f] text-gray-300 pt-[80px]'>
            <div className='flex flex-col w-full h-full justify-center items-center'>
                <div className="max-w-[1000px] w-full ">
                    <div className="pb-8 pl-4">
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                        <p className="text-gray-300 py-4">// Here is my education background and my work experiences </p>
                    </div>
                </div>
                <div className='w-full'>
                    <VerticalTimeline>
                        <VerticalTimelineElement className="vertical-timeline-element--education" date='2011 - 2015' 
                        iconStyle={{background: "#FFFF00", color: "#0a192f"}} icon={<IoMdSchool />}>
                            <h4 className='text-2xl text-[#0a192f] font-bold'>SMJK YuHua Kajang</h4>
                            <h5 className='text-xl text-[#0a192f]'>SPM graduated in 2015 | 3As</h5>
                            <span className='text-[#0a192f]'>• Member of Persatuan Sejarah and Geografi (History and Geography Society)<br/></span>
                            <span className='text-[#0a192f]'>• Member of Kelab Bola Tampar ( Volley Ball Club )<br/></span>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--education" date='2016 - 2017' 
                        iconStyle={{background: "#FFFF00", color: "#0a192f"}} icon={<IoMdSchool />}>
                            <h3 className='text-2xl text-[#0a192f] font-bold'>Asia Pacific University of Technology and Innovation</h3>
                            <h4 className='text-xl text-[#0a192f]'>Foundation in Computing graduated in 2017 | 3.16 CGPA</h4>
                            <span className='text-[#0a192f]'>• Participant of Mathematics Competition (A) held in conjunction
                                with Mathematics, Accountings and Finance (MAF) Week<br/></span>
                            <span className='text-[#0a192f]'>• Participant of Mathexplorace held in conjunction with
                            Mathematics, Accountings and Finance (MAF) Week<br/></span>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--education" date='2017 - 2022' 
                        iconStyle={{background: "#FFFF00", color: "#0a192f"}} icon={<IoMdSchool />}>
                            <h3 className='text-2xl text-[#0a192f] font-bold'>Sunway University</h3>
                            <h4 className='text-xl text-[#0a192f]'>BSc (Hons) Information Technology graduated in 2022 | 3.05 CGPA</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--education" date='2021 - 2022' 
                        iconStyle={{background: "#3e497a", color: "#fff"}} icon={<MdWork />}>
                            <h3 className='text-2xl text-[#0a192f] font-bold'>Spassolab Sdn. Bhd.</h3>
                            <h4 className='text-xl text-[#0a192f]'>Internship ( Dec 2021 - Mar 2022 )</h4>
                            <span className='text-[#0a192f]'>• Develop the frontend and backend of an e-commerce website during this period of time<br/></span>
                            <span className='text-[#0a192f]'>• Utilised Stacks: HTML, CSS, JavaScript, Bootstrap, Laravel, PHP, SQL<br/></span>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--education" date='2022 - 2023' 
                        iconStyle={{background: "#3e497a", color: "#fff"}} icon={<MdWork />}>
                            <h3 className='text-2xl text-[#0a192f] font-bold'>Credential Daxonet Sdn. Bhd.</h3>
                            <h4 className='text-xl text-[#0a192f]'>Full Time ( Oct 2022 - May 2023 )</h4>
                            <span className='text-[#0a192f]'>• Develop and customise additional functions for the AutoCount Accounting
                                software according to clients' requirements<br/></span>
                            <span className='text-[#0a192f]'>• Develop custom mobile application for clients to allow them to access data
                                and information on their AutoCount Accounting account on their phones using AutoCount Accounting API Calls<br/></span>
                            <span className='text-[#0a192f]'>• Utilised Stacks: C#, SQL, React Native, JavaScript, CSS<br/></span>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;
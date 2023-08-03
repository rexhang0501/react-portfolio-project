const Contact = () => {
    return(
        <div name="contact" className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="" className="flex flex-col max-w-[1000px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">// Submit the form below of shoot me and email </p>
                </div>
                <input type="text" placeholder="Name" name='name' className="p-2 bg-[#ccd6f6]"/>
                <input type="email" placeholder="Email" name='email' className="my-4 p-2 bg-[#ccd6f6]"/>
                <textarea name="message" rows="10" placeholder="Message" className="p-2 bg-[#ccd6f6]"></textarea>
                <div className="text-gray-300 border-2 hover:bg-pink-600 px-4 py-3 my-8 text-center items-center justify-center duration-500">
                    <p>Submit !</p>
                </div>
            </form>
        </div>
    );
};

export default Contact;
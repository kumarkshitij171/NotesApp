import React from 'react'
import heroImg from "../assets/HeroImg.jpeg"
import { Link } from 'react-router-dom'
function HeroSection() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Ultimate Note-Taking Companion
                            {/* <br className="hidden lg:inline-block"/>readymade gluten */}
                        </h1>
                        <p className="mb-8 leading-relaxed">Experience the future of note-taking with our innovative iNotebook, designed to effortlessly store all your notes in one place. Stay organized, access your ideas anytime, anywhere.</p>
                        <div className="flex justify-center">
                            <Link to="/addnote"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button></Link>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">SignUp</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded-lg brightness-50" alt="hero" src={heroImg}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection

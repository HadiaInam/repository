import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto" >
            <div className="w-full grid justify-between sm:flex md:grid-cols-1">
                <div>
                    <Link to="/" className='self-center text-lg sm:text-xl font=semi-bold whitespace-nowrap pr-6 mt-5' >
                        <span className="px-2 py-1 bg-gradient-to-r from from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Hadia's</span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                100 JS Projects
                            </Footer.Link>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                
                                Hadia's Blog
                            </Footer.Link>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                Journey
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                GitHub
                            </Footer.Link>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                
                                Instagram
                            </Footer.Link>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                Website
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href='#' target ='_blank' rel='noopener noreferrer'>
                                
                                Terms and Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>

                </div>
            </div>
            <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <div >
                        <Footer.Copyright href="#" by="Hadia Inam" year={new Date().getFullYear()}/>
                    </div>  
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook   } />
                        <Footer.Icon href='#' icon={BsInstagram   } />
                        <Footer.Icon href='#' icon={BsTwitter  } />
                        <Footer.Icon href='#' icon={BsGithub   } />
                        <Footer.Icon href='#' icon={BsDribbble   } />
                    </div>

                </div>
                    
        </div>
    </Footer>
  )
}

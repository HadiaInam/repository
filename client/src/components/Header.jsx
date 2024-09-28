import { Navbar, TextInput, Button, NavbarLink, Dropdown, Avatar} from "flowbite-react";
import { Link, useLocation } from "react-router-dom"; // Go to the page without refreshing it
import {AiOutlineSearch} from "react-icons/ai";
import { FaMoon } from "react-icons/fa"
import {useSelector} from 'react-redux'

//self-center whitespace-nowrap text-sm sm:text-xl font=semi-bold dark:text-white
// border-b-2 is to set the bottom border
//px-2 py-1 bg-gradient-to-r from from-indigo-500 via-purple-500 to-pink-500 rounded-lg
export default function Header() {
   const path = useLocation().pathname;
   const {currentUser} = useSelector(state => state.user)
  return (
    <Navbar className="border-b-2"> 
         <Link to="/" className='self-center text-sm sm:text-xl font=semi-bold whitespace-nowrap' >
            <span className="px-2 py-1 bg-gradient-to-r from from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Hadia's</span>
            Blog
         </Link>
        <form>
        <TextInput type='text' placeholder='Search' rightIcon={AiOutlineSearch} className="hidden lg:inline" />
        </form>
        <Button pill className="w-12 h-10 lg:hidden" color='gray'><AiOutlineSearch /></Button>
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          {currentUser ? (
            <Dropdown arrowIcon={false} inline label={
              <Avatar alt='User' img={currentUser.profilePicture} rounded />
            }>


              <Dropdown.Header>
                <span className='block text-sm'>@{currentUser.username}</span>
                <span className='block text-sm font-medium truncate'>{currentUser.email}</span>

              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider/>
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : 
          (
            <Link to='/sign-in'>
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
             </Link>
          )}
         
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path ==="/"} as={'div'}>
              <Link to='/'>
              Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path ==="/about"} as={'div'}>
              <Link to='/about'>
              About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path ==="/projects"} as={'div'} >
              <Link to='/projects'>
              Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
          

    </Navbar>
    
  )
}
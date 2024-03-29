import { useState, useEffect } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import Button from '../Components/Button'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Avatar from '../Components/Avatar';
import Card from '../Components/Card';
import { SignUp } from '../Components/SignUp';
import { SignIn } from '../Components/SignIn';
import { BlogPage } from '../Components/BlogPage';
import Input from '../Components/Input';
import BareLayout from './BareLayout/BareLayout';
import Demo from '../Delete/Demo';
import CollapseMenu from './Core/CollapseMenu';
import { FcFlowChart } from 'react-icons/fc'
import AxiosInterceptors from '../Functions/AxiosInterceptors';
import PowerupFunctions from '../Functions/PowerupFunctions';
import Technologies from '../MetaData/Technologies';
import Resources from '../MetaData/Resources';
import Libraries from '../MetaData/Libraries';
import Essentials from '../MetaData/Essentials';
import { AboutUsPage } from './AboutUsPage';
import { Error404Page } from './Error404Page';
import { LandingPage } from './LandingPage';
import { PricingPage } from './PricingPage';
import { ContactUs } from './ContactUs';
import { TablePage } from './TablePage';
import ScrollHandleCss from '../Functions/ScrollHandleCss';
import Chat from '../Components/Chat';
import AdminLayout from '../Delete/AdminLayout';
import Ds from '../Delete/Ds';
import FormGenerator from '../Delete/FormGenerator/FormGenerator';
import AbsolutePath from '../Functions/AbsolutePath';
import Form1 from '../Delete/FormGenerator/Form1';
import ApiPattern from '../Functions/ApiPattern';

function Sidebar() {
    const [showSidebar, setshowSidebar] = useState(false)
    const navigate = useNavigate()

    const menuList = [
        {
            icon: <BarChart size={14} />, menuName: 'Components', path: null, subMenuStatus: true, subMenu: [
                { menuName: 'Button', path: '/button', subMenu: [] },
                { menuName: 'Avatar', path: '/avatar', subMenu: [] },
                { menuName: 'Card', path: '/card', subMenu: [] },
                { menuName: 'Signup', path: '/signup', subMenu: [] },
                { menuName: 'Signin', path: '/signin', subMenu: [] },
                { menuName: 'Input', path: '/input', subMenu: [] },
                { menuName: 'Chat', path: '/chat', subMenu: [] },
            ]
        },
        {
            icon: <BarChart size={14} />, menuName: 'Pages', path: null, subMenuStatus: true, subMenu: [
                { menuName: 'Blog Page', path: '/blog-page', subMenu: [] },
                { menuName: 'AboutUs Page', path: '/aboutus-page', subMenu: [] },
                { menuName: '404 Page', path: '/error404-page', subMenu: [] },
                { menuName: 'Landing Page', path: '/landing-page', subMenu: [] },
                { menuName: 'Pricing Page', path: '/pricing-page', subMenu: [] },
                { menuName: 'Contact Page', path: '/contact-page', subMenu: [] },
                { menuName: 'Table Page', path: '/table-page', subMenu: [] },
            ]
        },
        {
            icon: <BarChart size={14} />, menuName: 'Layouts', path: null, subMenuStatus: true, subMenu: [
                { menuName: 'Bare Layout', path: '/bare-layout', subMenu: [] },
            ]
        },
        {
            icon: <BarChart size={14} />, menuName: 'Functions', path: null, subMenuStatus: true, subMenu: [
                { menuName: 'Axio Interceptors', path: '/axiosinterceptors', subMenu: [] },
                { menuName: 'PowerUps', path: '/powerups', subMenu: [] },
                { menuName: 'ScrollHandle', path: '/scroll-handle', subMenu: [] },
                { menuName: 'Vite-Config', path: '/vite-config', subMenu: [] },
                { menuName: 'Api-Pattern', path: '/api-pattern', subMenu: [] },
            ]
        },
        // ------------------- NO NEED OF THIS NOW ONLY CODE SNIPPETS WILL BE VISIBLE  -------------
        // {
        //     icon: <BarChart size={14} />, menuName: 'Meta Data', path: null, subMenuStatus: true, subMenu: [
        //         { menuName: 'Technologies', path: '/technologies', subMenu: [] },
        //         { menuName: 'Resources', path: '/resources', subMenu: [] },
        //         { menuName: 'Libraries', path: '/libraries', subMenu: [] },
        //         { menuName: 'Essentials', path: '/essentials', subMenu: [] },
        //     ]
        // },
        {
            icon: <BarChart size={14} />, menuName: 'Tools', path: null, subMenuStatus: true, subMenu: [
                // { menuName: 'Admin Layout', path: '/admin-layout', subMenu: [] },
                { menuName: 'Form Generator', path: '/form-generator', subMenu: [] },
            ]
        },
    ]

    const navigateToComponent = (data) => {
        setshowSidebar(false)
        navigate(data?.route)
    }

    return (

        <div>
            <div className='md:hidden'>
                {!showSidebar && <button onClick={() => setshowSidebar(true)} type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 " >
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                    </svg>
                </button>}
                {showSidebar && <button onClick={() => setshowSidebar(false)} type="button" className="inline-flex items-center  mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                    <span className='px-4 py-2 rounded-lg  font-semibold hover:bg-gray-100' >X</span>
                </button>}
            </div>

            {/* COMPONENT VIEW SECTION */}
            <div className="p-4 sm:ml-64 h-screen overflow-x-hidden overflow-y-auto">
                <Routes>

                    {/* 1 DUMMY */}
                    <Route path='/test/:id' element={<Demo />}></Route>

                    {/* 2 COMPONENTS */}
                    <Route path='/' element={<Card />} />
                    <Route path='/button' element={<Button />}></Route>
                    <Route path='/avatar' element={<Avatar />}></Route>
                    <Route path='/card' element={<Card />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/signin' element={<SignIn />}></Route>
                    <Route path='/input' element={<Input />}></Route>
                    <Route path='/chat' element={<Chat />}></Route>

                    {/* 3 PAGES */}
                    <Route path='/blog-page' element={<BlogPage />}></Route>
                    <Route path='/aboutus-page' element={<AboutUsPage />}></Route>
                    <Route path='/error404-page' element={<Error404Page />}></Route>
                    <Route path='/landing-page' element={<LandingPage />}></Route>
                    <Route path='/pricing-page' element={<PricingPage />}></Route>
                    <Route path='/contact-page' element={<ContactUs />}></Route>
                    <Route path='/table-page' element={<TablePage />}></Route>

                    {/* 4 BARE LAYOUTS */}
                    <Route path='/bare-layout' element={<BareLayout />}></Route>

                    {/* 5 FUNCTIONS */}
                    <Route path='/axiosinterceptors' element={<AxiosInterceptors />}></Route>
                    <Route path='/powerups' element={<PowerupFunctions />}></Route>
                    <Route path='/scroll-handle' element={<ScrollHandleCss />}></Route>
                    <Route path='/vite-config' element={<AbsolutePath />}></Route>
                    <Route path='/api-pattern' element={<ApiPattern />}></Route>

                    {/* 5 TECHNOLOGIES */}
                    <Route path='/technologies' element={<Technologies />}></Route>
                    <Route path='/resources' element={<Resources />}></Route>
                    <Route path='/libraries' element={<Libraries />}></Route>
                    <Route path='/essentials' element={<Essentials />}></Route>

                    {/* 5 DELETE */}
                    <Route path='/admin-layout' element={<AdminLayout />}></Route>
                    <Route path='/ds' element={<Ds />}></Route>
                    <Route path='/df' element={<Form1 />}></Route>
                    <Route path='/form-generator' element={<FormGenerator />}></Route>

                </Routes>
            </div>
            {/* COMPONENT VIEW SECTION END */}

            <aside className={`absolute left-0 top-10 transition-all z-2 flex w-screen md:w-64 md:h-screen md:px-5 md:py-8 ${showSidebar ? 'h-[80vh]' : 'h-0'} flex-col  border-r bg-gray-200 ${showSidebar && 'px-5 py-8'} overflow-hidden`}>
                <a href="#">
                    <svg
                        width="40"
                        height="46"
                        viewBox="0 0 50 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                        />
                    </svg>
                </a>
                <div className="mt-6 flex flex-1 flex-col justify-between">
                    <nav className="-mx-3 space-y-6 ">
                        <div className="space-y-3 ">
                            {
                                menuList?.map((data, index) => (
                                    <CollapseMenu setshowSidebar={setshowSidebar} key={`sidebar_menu${index}`} title={data.menuName} path={data?.path} subMenu={data?.subMenu} subMenuStatus={data?.subMenu?.length != 0 ? true : false} icon={<FcFlowChart size={14} />} />
                                ))
                            }

                            {/* {
                                navList?.map((data, index) => (
                                    <span onClick={() => navigateToComponent(data)}
                                        className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                        href="#"
                                    >
                                        <BarChart className="h-5 w-5" aria-hidden="true" />
                                        <span className="mx-2 text-sm font-medium">{data?.menuName}</span>
                                    </span>
                                ))

                            } */}

                        </div>
                        {/* <div className="space-y-3 ">
                            <label className="px-3 text-xs font-semibold uppercase text-gray-900">content</label>
                            <a
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >
                                <Newspaper className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Blogs</span>
                            </a>
                            <a
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >
                                <BellRing className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Notifications</span>
                            </a>
                            <a
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >
                                <Paperclip className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Checklists</span>
                            </a>
                        </div> */}
                    </nav>
                </div>
            </aside>

        </div>



    )
}

export default Sidebar
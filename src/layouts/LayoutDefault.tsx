import { lazy, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsYoutube, BsFillMicFill, BsThreeDotsVertical } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { VscMenu } from 'react-icons/vsc'
import { Outlet } from 'react-router-dom'
import SimpleSidebar from '../components/SimpleSidebar'

const Sidebar = lazy(() => import('../components/Sidebar'))

const LayoutDefault = () => {
    const [isOpen, setOpen] = useState(false)

    const handleSidebar = () => {
        setOpen(prev => prev = !prev)
    }

    const menu = [
        'All', 'Gaming', 'Music', 'Live', 'Otomotive', 'Album', 'Camping', 'Villages', 'Playlist', 'Mountains', 'Motorcycles', 'Human', 'Animals', 'Street food', 'Trains', 'Rain', 'Wildlife', 'History'
    ]

    return (
        <div className='max-h-screen overflow-hidden'>
            <header className="fixed top-0 md:relative flex w-full py-3 px-4 justify-between items-center">
                <div className="flex items-center gap-5">
                    <VscMenu className="w-6 h-fit" onClick={handleSidebar} />
                    <div className="flex items-center">
                        <BsYoutube className='w-7 h-fit fill-red-600' aria-hidden={false} />
                        <h1 className='text-xl font-bold font-serif'>YoutubeID</h1>
                    </div>

                </div>
                <div className="w-1/2 items-center px-3 rounded-full border border-gray-300 hidden md:flex">
                    <input type="text" className='w-full py-1 outline-none placeholder:text-sm' placeholder='search' />
                    <AiOutlineSearch className='w-5 h-fit' />
                </div>
                <div className="flex items-center gap-5">
                    <AiOutlineSearch className='w-5 h-fit md:hidden' />
                    <BsFillMicFill className='w-4 h-fit' />
                    <BsThreeDotsVertical className='w-4 h-fit' />

                    <div className="flex items-center gap-2 text-blue-600">
                        <CgProfile className='w-5 h-fit' />
                        <p>Sign in</p>
                    </div>
                </div>
            </header>

            <div className="flex items-start mt-10 md:mt-0">
                <Sidebar handleSidebar={handleSidebar} isOpen={isOpen} />
                <SimpleSidebar />

                <div className="w-full pb-32 h-screen overflow-hidden">
                    <div className="mt-3 w-full overflow-x-scroll text-xs sm:text-sm flex gap-x-10 py-2 px-6 items-center mb-5 category-scroll">
                        {
                            menu.map((v, i) => (<p className={`px-2 py-1 ${i === 0 ? 'bg-black/90 text-white' : 'bg-black/10'} rounded whitespace-nowrap`} key={v}>{v}</p>))
                        }
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutDefault
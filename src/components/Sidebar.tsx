import { BsYoutube, BsNewspaper, BsFlag } from "react-icons/bs"
import { VscMenu } from "react-icons/vsc"
import { AiFillHome, AiOutlineFire, AiOutlineSetting } from "react-icons/ai"
import { GiSpinningRibbons } from "react-icons/gi"
import { MdOutlineVideoLibrary, MdOutlineFeedback, MdHistory, MdOutlineLocalMovies, MdOutlineSubscriptions } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { IoMusicalNoteOutline } from "react-icons/io5"
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si"
import { TfiCup, TfiYoutube, TfiHelpAlt } from "react-icons/tfi"

type Props = {
  handleSidebar(): void
  isOpen: boolean
}

const Sidebar = ({ handleSidebar, isOpen }: Props) => {
  return (
    <aside className={`z-10 flex-1 fixed xl:relative xl:block xl:w-fit inset-0 bg-black/20 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="w-60 bg-white">
        <div className="xl:hidden flex items-center gap-5 py-3 px-6">
          <VscMenu onClick={handleSidebar} className="w-6 h-fit" />
          <div className="flex items-center">
            <BsYoutube className='w-7 h-fit fill-red-600' />
            <h1 className='text-xl font-bold font-serif'>YoutubeID</h1>
          </div>
        </div>

        <div className="pb-20 max-h-screen overflow-y-scroll pl-6 sidebar-scroll">
          <section className="mt-7">
            <div className="space-y-6 text-sm">
              <div className="flex gap-5 items-center">
                <AiFillHome className="w-5 h-fit" />
                <p>Home</p>
              </div>

              <div className="flex gap-5 items-center">
                <GiSpinningRibbons className="w-5 h-fit" />
                <p>Shorts</p>
              </div>

              <div className="flex gap-5 items-center">
                <MdOutlineSubscriptions className="w-5 h-fit" />
                <p>Subscriptions</p>
              </div>

              <div className="space-y-6 py-8 border-y border-gray-300">
                <div className="flex gap-5 items-center">
                  <MdOutlineVideoLibrary className="w-5 h-fit" />
                  <p>Library</p>

                </div>
                <div className="flex gap-5 items-center">
                  <MdHistory className="w-5 h-fit" />
                  <p>History</p>
                </div>
              </div>

              <div className="space-y-3">
                <p>Sign in to like videos, comment and subscribe. </p>
                <div className="flex items-center gap-2 pl-3 text-blue-600">
                  <CgProfile className='w-6 h-fit' />
                  <p>Sign in</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h1>Explore</h1>
            <div className="space-y-6 text-sm mt-4">
              <div className="flex gap-5 items-center">
                <AiOutlineFire className="w-5 h-fit" />
                <p>Trending</p>
              </div>

              <div className="flex gap-5 items-center">
                <IoMusicalNoteOutline className="w-5 h-fit" />
                <p>Music</p>
              </div>

              <div className="flex gap-5 items-center">
                <MdOutlineLocalMovies className="w-5 h-fit" />
                <p>Movies</p>
              </div>

              <div className="flex gap-5 items-center">
                <SiYoutubegaming className="w-5 h-fit" />
                <p>Gaming</p>
              </div>

              <div className="flex gap-5 items-center">
                <BsNewspaper className="w-5 h-fit" />
                <p>News</p>
              </div>

              <div className="flex gap-5 items-center">
                <TfiCup className="w-5 h-fit" />
                <p>Sports</p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h1>More from YouTube</h1>
            <div className="space-y-6 text-sm mt-4">
              <div className="flex gap-4 items-center">
                <BsYoutube className='w-6 h-fit fill-red-600' />
                <p>YouTube Premium</p>
              </div>

              <div className="flex gap-4 items-center">
                <SiYoutubemusic className='w-6 h-fit fill-red-600' />
                <p>YouTube Music</p>
              </div>

              <div className="flex gap-4 items-center">
                <BsYoutube className='w-6 h-fit fill-red-600' />
                <p>YouTube Kids</p>
              </div>

              <div className="flex gap-4 items-center">
                <TfiYoutube className='w-6 h-fit fill-red-600' />
                <p>YouTube TV</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="space-y-6 text-sm mt-4">
              <div className="flex gap-4 items-center">
                <AiOutlineSetting className='w-5 h-fit' />
                <p>Setting</p>
              </div>

              <div className="flex gap-4 items-center">
                <BsFlag className='w-5 h-fit' />
                <p>Report history</p>
              </div>

              <div className="flex gap-4 items-center">
                <TfiHelpAlt className='w-5 h-fit' />
                <p>Help</p>
              </div>

              <div className="flex gap-4 items-center">
                <MdOutlineFeedback className='w-5 h-fit' />
                <p>Send feedback</p>
              </div>
            </div>
          </section>

          <section className="mt-10 text-xs font-light text-gray-700 space-y-3">
            <p>About Press Copyright Contact us Creators Advertise Developers</p>
            <p>Terms Privacy policy & Safety How Youtube works Test new features</p>
            <p className="text-xs font-light text-gray-500">@ 2022 Google LLC</p>
          </section>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
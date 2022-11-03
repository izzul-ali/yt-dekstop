import { AiFillHome } from "react-icons/ai"
import { GiSpinningRibbons } from "react-icons/gi"
import { MdHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md"

const SimpleSidebar = () => {
    return (
        <div className="hidden w-20 md:block xl:hidden mt-5 space-y-10 text-xs font-light -tracking-wider">
            <div className="flex flex-col justify-center items-center gap-y-1 ">
                <AiFillHome className="w-5 h-fit" />
                <p>Home</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1 ">
                <GiSpinningRibbons className="w-5 h-fit" />
                <p>Shorts</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1 ">
                <MdOutlineSubscriptions className="w-5 h-fit" />
                <p className="text-[11px]">Subscribtions</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1 ">
                <MdOutlineVideoLibrary className="w-5 h-fit" />
                <p>Library</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1 ">
                <MdHistory className="w-5 h-fit" />
                <p>History</p>
            </div>
        </div>
    )
}

export default SimpleSidebar
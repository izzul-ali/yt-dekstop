import { BsYoutube } from "react-icons/bs"

const Fallback = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <BsYoutube className='animate-pulse w-40 h-fit fill-red-600' />
        </div>
    )
}

export default Fallback
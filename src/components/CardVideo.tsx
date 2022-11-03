import { CgProfile } from "react-icons/cg"

const CardVideo = ({ index }: { index: number }) => {
    const title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam.'

    return (
        <div className="w-8/12 sm:w-11/12 mx-auto hover:scale-105 duration-300">
            <img className="rounded-lg w-full h-36 object-cover" src={`https://source.unsplash.com/random/?tech/${index}}`} alt={`img - ${index}`} />
            <div className="flex mt-2 items-start gap-2">
                <span className="block rounded-full p-1">
                    <CgProfile className='w-7 h-fit' />
                </span>
                <div>
                    <h1 className="text-sm font-semibold">{
                        index % 2 === 0 ? title.toLocaleUpperCase() : title
                    }</h1>
                    <p className="text-xs font-light mt-1">Repairer</p>
                    <p className="text-xs font-light">243K ~ 1 year ago</p>
                </div>
            </div>
        </div>
    )
}

export default CardVideo
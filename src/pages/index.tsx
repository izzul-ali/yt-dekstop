import CardVideo from "../components/CardVideo"


const Home = () => {
    const numArry = () => {
        let nums: Array<number> = []

        for (let index = 1; index <= 100; index++) {
            nums.push(index)
        }

        return nums
    }

    return (
        <div className="p-3 h-full overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
            {
                Array.from(numArry()).map(v => {
                    return (
                        <CardVideo key={v} index={v} />
                    )
                })
            }
        </div>
    )
}

export default Home
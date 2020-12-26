import arrow from '../assets/home/down-arrow.png';


const Home = () => {
    return (
        <div className="text-center my-48 2xl:my-56 h-screen">
            <h1>natura</h1>
            <h3>Track current natural events as they happen</h3>
            <div className="mt-48 text-lg">
                <p>Search by category</p>
                <img src={ arrow } alt="down arrow" className="w-11 m-auto cursor-pointer"/>
            </div>
        </div>
    )
}

export default Home

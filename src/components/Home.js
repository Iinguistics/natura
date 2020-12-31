import arrow from '../assets/home/down-arrow.png';
import Category from './Category';


const Home = ({ homeEventId }) => {

  
    return (
        <div>
         <div className="text-center mt-48 2xl:mt-56 h-screen">
            <h1>natura</h1>
            <h3>Track current natural events as they happen</h3>
            <div className="mt-48 text-lg">
                <p>Search by category</p>
               <a href="#categories"><img src={ arrow } alt="down arrow" className="w-11 m-auto bg-white rounded-md"/></a> 
            </div>
        </div>

        <div id="categories" className="mb-5">
            <Category eventId={homeEventId} />
            </div>
        </div>
        
    )
}

export default Home

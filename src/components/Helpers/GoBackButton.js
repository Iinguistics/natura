import { Link } from 'react-router-dom';



const GoBackButton = ()=>{

    return(
        <div className="ml-3 inline-flex rounded-md shadow mt-2 xl:mt-4">
        <Link to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
          Go Back
        </Link>
      </div>
    )
}

export default GoBackButton;
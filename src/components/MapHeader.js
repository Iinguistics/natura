import GoBackButton from './Helpers/GoBackButton';

const MapHeader = ({events, categoryName}) => {

    return (
        <header className="header text-center">
            {events.length === 0 ?  (<h1 className="text-lg lg:text-3xl">There are no current {categoryName} event's at this time.</h1>): (
             <h1 className="text-lg lg:text-3xl">{ categoryName } event's</h1>
            )
            }

          <GoBackButton />
        </header>
    )
}

export default MapHeader

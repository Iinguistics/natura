import GoBackButton from './Helpers/GoBackButton';

const MapHeader = ({events, categoryName}) => {

    return (
        <header className="header text-center">
            {events.length === 0 ?  (<h1>There are no current {categoryName} event's at this time.</h1>): (
             <h1>{ categoryName } event's</h1>
            )
            }

          <GoBackButton />
        </header>
    )
}

export default MapHeader

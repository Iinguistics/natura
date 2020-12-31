
const LocationInfo = ({ info }) => {
    return (
        <div className="location-info text-white font-sans mt-6">
            <h3 className="text-white p-2">Event Location Info</h3>
            <ul className="p-1">
                <li>ID: {info.id}</li>
                <li>Title: {info.title}</li>
            </ul>
            
        </div>
    )
}

export default LocationInfo

import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import axios from 'axios'



const MyMap = () => {
    
    const position = [17.385044, 78.486671]
    
    return(

    <div>
        
        <MapContainer center={position} zoom={13} style={{height: "100vh", width: "100%" }}>

            <TileLayer  url={`https://api.geoapify.com/v1/routing?waypoints=50.96209827745463%2C4.414458883409225%7C50.429137079078345%2C5.00088081232559&mode=drive&apiKey=1800779777654fe28628fb22b7809016`}
                attribution='&copy; <a href=https://www.geoapify.com/>Geoapify <a/> contributors'
            />
            
            <Marker position={position}>

                <Popup>6    
                    You Are Here Hyderabad
                </Popup>

            </Marker>

        
        </MapContainer>
            

     </div>
    )
}

export default MyMap
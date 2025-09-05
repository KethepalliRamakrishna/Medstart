import { Typography } from "@mui/material"
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent"
import { useNavigate } from "react-router-dom"

const Instructions = () => {
    const navigation = useNavigate()
    return(
        
        <div onClick={() => navigation('/MyMap')}>

            <Card sx={{border:2, borderRadius:5, width:1800, marginLeft:-40, marginRight:-40}}>

                <CardContent>

                    <Typography variant="h4" sx={{fontWeight:700}}>
                        Instructions On building the project
                    </Typography>

                    <Typography variant="h4">
                        <p style={{marginLeft:-440}}>Get the user location and do an API call to Geoapify to get the nearby hospitals data.</p>
                        <p style={{marginLeft:-840}}>Once the data is fetched, show the data on the homepage.</p>
                        <p style={{marginLeft:-160}}>When the user clicks on the hospitals, the user should be navigated to a different page with 2 columns.</p>
                        <p style={{marginLeft:-190}}>On the left the hospital details should be present, along with the hospital's lat long and users lat long.</p>
                        <p style={{marginLeft:-20}}>With the details of user lat long, you can use the addresses api from Geoapify to get the user formatted address.</p>
                        <p>With the user formatted address and hospital formatted address, you can now make another api call.(Routes api)</p>
                        <p style={{marginLeft:-8}}>This API will give you the step by step instructions and marker points on how to travel from one address to other. </p>

                    </Typography>

                </CardContent>    

            </Card>
            
        </div>
    )
}

export default Instructions
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Card  from '@mui/material/Card'
import  CardContent  from "@mui/material/CardContent"
import { Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"



const Location = () => {

    const navigation = useNavigate()
    return(
        <div style={{display:"flex", alignContent:"center"}}>
            <Row>

                <Col>

                    <Card onClick = {() => navigation('/instructions')} sx={{border:1, borderRadius:3, width:795, paddingRight:7, marginLeft:-30, marginRight:10}}>

                        <CardContent>

                            <Typography variant="h2" component="div" sx={{marginLeft:-12}}>Sultania Zanana Hospital</Typography>
                            <hr></hr>
                            <Typography variant="h4"  sx={{marginTop:3, marginLeft:-67}}>User Latitude:</Typography>
                            <Typography variant="h4" sx={{marginTop:1, marginLeft:-64}}>User Longitude:</Typography>
                            <Typography variant="h4" sx={{marginTop:1, marginBottom:3, marginLeft:-47}}>User Formatted Address:</Typography>
                            <hr></hr>
                            <Typography variant="h4" sx={{marginTop:3, marginLeft:-61}}>Hospital Latitude:</Typography>
                            <Typography variant="h4" sx={{marginTop:1, marginLeft:-58}}>Hospital Longitude:</Typography>
                            <Typography variant="h4" sx={{ marginTop:1, marginBottom:3, marginLeft:-41}}>Hospital Formatted Address:</Typography>
                            <hr></hr>
                            <Typography variant="h4" sx={{marginTop:3, marginLeft:-63}}>Hosptal Website:</Typography>
                            <Typography variant="h4" sx={{marginTop:1, marginLeft:-67}}>Hospital Email:</Typography>
                            <Typography variant="h4" sx={{marginTop:1, marginLeft:-85}}>State:</Typography>
                            <Typography variant="h4" sx={{marginTop:1, marginLeft:-87, marginBottom:5}}>City:</Typography>
                            
                        </CardContent>

                    </Card>

                 </Col>   

            </Row>

            <Row>

                <Col>

                    <Card onClick = {() => navigation('/instructions')} sx={{border:1, borderRadius:3, width:795, paddingRight:7}}>

                        <CardContent>

                            <Typography variant="h4" sx={{fontWeight:700, marginLeft:-45 }}>Directions to Hospital </Typography>
                            <Typography variant="h4">
                                <ul style={{marginTop:50}}>
                                    <li style={{marginTop:50}}>Enter Singer Chowrangi and take the 2nd.Main Korangi Road exit onto</li>
                                    <li style={{marginTop:50}}>Exit the roundabout onto .Main Korangi Road</li>
                                    <li style={{marginTop:50}}>Enter Indus Chowrangi and take the 3rd exit .Main Korangi Road onto</li>
                                    <li style={{marginTop:50}}>Enter Bilal Chowrangi and take the 4th exit .Main Korangi Road onto</li>
                                    <li style={{marginTop:50, marginBottom:50}}>Enter Vita Chowrangi and take the 3rd exit onto .Main Korangi Road onto</li>
                                </ul>
                            </Typography>

                        </CardContent>    

                    </Card>

                </Col>

            </Row>


        </div>
    )
}


export default Location
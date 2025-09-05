import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Home = () => {

const navigation = useNavigate()

    
    return(
        <div className="className" style={{display:'flex', alignItems:'center'}}>
            <Row style={{marginLeft:-180}}>
                <Col>


                    <Card onClick={() => navigation('/location')} sx={{border: 1, borderRadius:5, width:800}}>

                        <CardContent>
                            <Typography variant='h2' component="div">Sultania Zanana Hospital</Typography>
                            <hr></hr>
                            <Typography variant='h6' component='div' sx={{marginRight:6}}>Sultania Road, Ibrahimpura, Bhopal - 462001, Madhya Pradesh, India</Typography>
                            <Typography variant='h6' sx={{marginTop:2, marginRight:30}}>Bhopal, Madhya Pradesh, Sultania@gmail.com,</Typography>
                            <Typography variant='h6' sx={{marginRight:50}}>WWW.SultanyaHospitals.com</Typography>
                        </CardContent>

                    </Card>
   
                
                </Col>

                <Col style={{marginTop:"40px"}}>


                    <Card  onClick={() => navigation('/location')} sx={{border: 1, borderRadius:5}}>

                        <CardContent>
                            <Typography variant='h2' component="div">Sultania Zanana Hospital</Typography>
                            <hr></hr>
                            <Typography variant='h6' component='div' sx={{marginRight:6}}>Sultania Road, Ibrahimpura, Bhopal - 462001, Madhya Pradesh, India</Typography>
                            <Typography variant='h6' sx={{marginTop:2, marginRight:30}}>Bhopal, Madhya Pradesh, Sultania@gmail.com,</Typography>
                            <Typography variant='h6' sx={{marginRight:50}}>WWW.SultanyaHospitals.com</Typography>
                        </CardContent>

                    </Card>
   
                
                </Col>

                <Col style={{marginTop:"40px"}}>


                    <Card  onClick={() => navigation('/location')}  sx={{border: 1, borderRadius:5}}>

                        <CardContent>
                            <Typography variant='h2' component="div">Sultania Zanana Hospital</Typography>
                            <hr></hr>
                            <Typography variant='h6' component='div' sx={{marginRight:6}}>Sultania Road, Ibrahimpura, Bhopal - 462001, Madhya Pradesh, India</Typography>
                            <Typography variant='h6' sx={{marginTop:2, marginRight:30}}>Bhopal, Madhya Pradesh, Sultania@gmail.com,</Typography>
                            <Typography variant='h6' sx={{marginRight:50}}>WWW.SultanyaHospitals.com</Typography>
                        </CardContent>

                    </Card>
   
                
                </Col>
            </Row>

            <Row style={{marginLeft:100}}>
                <Col>


                    <Card onClick={() => navigation('/location')}  sx={{border: 1, borderRadius:5, width:800}}>

                        <CardContent>
                            <Typography variant='h2' component="div">Sultania Zanana Hospital</Typography>
                            <hr></hr>
                            <Typography variant='h6' component='div' sx={{marginRight:6}}>Sultania Road, Ibrahimpura, Bhopal - 462001, Madhya Pradesh, India</Typography>
                            <Typography variant='h6' sx={{marginTop:2, marginRight:30}}>Bhopal, Madhya Pradesh, Sultania@gmail.com,</Typography>
                            <Typography variant='h6' sx={{marginRight:50}}>WWW.SultanyaHospitals.com</Typography>
                        </CardContent>

                    </Card>
   
                
                </Col>

                <Col style={{marginTop:"40px"}}>


                    <Card  onClick={() => navigation('/location')}  sx={{border: 1, borderRadius:5}}>

                        <CardContent>
                            <Typography variant='h2' component="div">Sultania Zanana Hospital</Typography>
                            <hr></hr>
                            <Typography variant='h6' component='div' sx={{marginRight:6}}>Sultania Road, Ibrahimpura, Bhopal - 462001, Madhya Pradesh, India</Typography>
                            <Typography variant='h6' sx={{marginTop:2, marginRight:30}}>Bhopal, Madhya Pradesh, Sultania@gmail.com,</Typography>
                            <Typography variant='h6' sx={{marginRight:50}}>WWW.SultanyaHospitals.com</Typography>
                        </CardContent>

                    </Card>
   
                
                </Col>

                <Col style={{marginTop:"40px"}}>


                    <Card  onClick={() => navigation('/location')} sx={{border: 1, borderRadius:5}}>

                        <CardContent>
                            <Typography variant='h2' component="div">Sultania Zanana Hospital</Typography>
                            <hr></hr>
                            <Typography variant='h6' component='div' sx={{marginRight:6}}>Sultania Road, Ibrahimpura, Bhopal - 462001, Madhya Pradesh, India</Typography>
                            <Typography variant='h6' sx={{marginTop:2, marginRight:30}}>Bhopal, Madhya Pradesh, Sultania@gmail.com,</Typography>
                            <Typography variant='h6' sx={{marginRight:50}}>WWW.SultanyaHospitals.com</Typography>
                        </CardContent>

                    </Card>
   
                
                </Col>
            </Row>
        </div>
    )
}



export default Home
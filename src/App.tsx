import React from "react"
import Button from '@material-ui/core/Button'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import Header from './Components/Header'

const App = () =>{
  return(
    <div>
       <Typography variant="h3" component="h2" gutterBottom>
              Start Building Apps Faster with Material-UI <ImportantDevicesIcon style={{fontSize:40, color:'purple'}} />
          </Typography>
      <Button variant="contained" color="primary">
      <GitHubIcon style={{padding:5}} /> start coding now
      </Button>

      <Header />

      
    </div>
    )
}


export default App
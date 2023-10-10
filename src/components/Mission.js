import React from 'react'
import { People, BroadcastOnPersonal, Visibility } from '@mui/icons-material';
import "./Mission.css"
function Mission() {
  return (
    <>
     <div className='mission'>
        
         <div className='who'>
            <div className='people'>
            <People  className='people-icon' style={{ fontSize: 130 }} />
            <h3>who are we </h3>
            </div>
            <p>Galitech Integrated systems is the number one leading IT solutions 
                With Over 10 years of Industry experience and counting.
            </p>
         </div>
        

         <div className='mission-state'>
            <span>
            <BroadcastOnPersonal  style={{ fontSize: 80 }} className='broad'/>
            <h3>Mission </h3>
            </span>
            <p>To deliver IT solution to the world With Over
               10 years of Industry experience and counting 
            </p>
            <p></p>
            
         </div>

         <div className='vision'>
            <span>
            <Visibility  style={{ fontSize: 80 }} className='visible'/>
            <h3>Vision </h3>
            </span>
            <p>To be the leadding IT firm With Over 10 years of Industry experience and counting</p>
            

         </div>
      </div>
    </>
  )
}

export default Mission

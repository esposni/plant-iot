import React, { useState, 
    // useEffect 
} from "react";

import {Button,

} from "reactstrap";
import axios from 'axios';
import AlertDialogSlide from "./PopUpButton"


// deactivate ad block  <<<<------

export default function ChatComponent(props) {

    // const [messageHumidity,setmessageHumidity] = useState("");
    const [messageTemp,setmessageTemp] = useState("");
    const [time,setTime] = useState("");

    const updateHistory=()=>{
        axios.get('https://plant-backend.herokuapp.com/api/')
        .then((response) => {
            let post= response.data[0];
            // console.log('Data has been received!!');
            // console.log(post)
            props.modVal(post);
            setTime(()=>{
                return new Date().getHours()+":"+new Date().getMinutes()
                // return new Date(parseInt(post.date)).getHours()+":"+new Date(parseInt(post.date)).getMinutes()
            })
            let mex_Temperature="";
            if (parseInt(post.temperatureC)<20){
                mex_Temperature+="Low Temperature";
            }else if(parseInt(post.temperatureC)>40){
                if (parseInt(post.temperatureC)>50){
                mex_Temperature+="High Temperature : -> Connect the sensor";
                }
                else{
                mex_Temperature+="High Temperature";
                }
            }else{
                mex_Temperature+="Temperature OK";
            }
            let mex_Humidity="";
            if (parseInt(post.humidity)<400)
            {
                if (parseInt(post.humidity)<170){
                mex_Humidity+="High Humidity : -> Watering the plant?";
                }
                else{
                mex_Humidity+="High Humidity : -> Move the plant to a dry place!";
                }
                
            }
            else if(parseInt(post.humidity)>600)
            {
                if (parseInt(post.humidity)>670){
                    mex_Humidity+="Low Humidity : -> Put the sensor into the terrain!";
                }
                else{
                    mex_Humidity+="Low Humidity : ->  Water the plant!";
                }
                
            }else{
                mex_Humidity+="Humidity OK";
            }
              
            setmessageTemp(post.mex+": "+mex_Temperature+", "+mex_Humidity)
            // setmessageHumidity("Temperature "+post.mex);
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        });
       
        
    }
    // updateHistory()
   
    // setInterval(function(){ updateHistory() }, 60000);
    

    const viewPlantStatus = () => {        
        setmessageTemp("");
        // setmessageHumidity("");
        setTime("")
        props.modVal({ "temperature": "",
        "humidity": "",
        "luminosity": "",
        });
        updateHistory()
        
    };
    
    return (
            <>
                <div className="box">
                    <div style={{width: "100%"}}>
                            <AlertDialogSlide/>
                    </div>
                    <div style={{color:"black",width: "100%"}}>
                        <h5>{messageTemp}</h5>
                        {/* <h5>{messageHumidity}</h5> */}
                    </div>
                    <div style={{color:"black",width: "100%"}}>{time}</div>
                </div>
                <Button
                    block
                    className="btn-round"
                    onClick={viewPlantStatus}
                    size="lg"
                >
                    Click to update your plant status
                    </Button>  

               
            </>
    );
}
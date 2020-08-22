import React, { useState, 
    // useEffect 
} from "react";

import {Button,

} from "reactstrap";
import axios from 'axios';
import AlertDialogSlide from "./PopUpButton"


// deactivate ad block  <<<<------

export default function ChatComponent(props) {

    const [messageHumidity,setmessageHumidity] = useState("");
    const [messageTemp,setmessageTemp] = useState("");
    const [time,setTime] = useState("");

    const updateHistory=()=>{
        axios.get('https://plant-backend.herokuapp.com/api/')
        .then((response) => {
            let post= response.data[0];
            // console.log('Data has been received!!');
            props.modVal(post);
            setTime(()=>{
                return new Date(parseInt(post.date)).getHours()+":"+new Date(parseInt(post.date)).getMinutes()})
            setmessageTemp("Humidity "+post.mex)
            setmessageHumidity("Temperature "+post.mex);
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        });
       
        
    }
    // updateHistory()
   
    // setInterval(function(){ updateHistory() }, 60000);
    

    const viewPlantStatus = () => {        
        setmessageTemp("");
        setmessageHumidity("");
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
                        <h5>{messageHumidity}</h5>
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
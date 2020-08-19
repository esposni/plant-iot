import React, { useState, 
    // useEffect 
} from "react";

import {Button,

} from "reactstrap";



// deactivate ad block  <<<<------

export default function ChatComponent(props) {
    

   
    // var iden_dev="ujATs9PznpcsjwSUQueKHs"
    // var iden_dev_arduino="ujATs9PznpcsjzEtrr7jae"
   

    

    const [messageHumidity,setmessageHumidity] = useState("");
    const [messageTemp,setmessageTemp] = useState("");
    const [time,setTime] = useState("");

    const updateHistory=()=>{
       
        setmessageTemp("Humidity OK")
        setmessageHumidity("Temperature OK");
        props.modVal(()=>{
            let text = "Temperature: 277 C° - Humidity: 1023- Time: 15:20"
            let arr = text.split("-")
            if (arr.length<2){
                return []
            }else{
                arr[0]=arr[0].replace("Temperature: ","");
                arr[0]=arr[0].replace("C°","");
                arr[0]=arr[0].trim()
                arr[1]=arr[1].replace("Humidity: ","");
                arr[2]=arr[2].replace(" Time: ","");
                setTime(new Date().getHours()+":"+new Date().getMinutes());
                // console.log(arr)
                return arr
            }
            
        });
    }
    // updateHistory()
   
    // setInterval(function(){ updateHistory() }, 60000);
    

    const viewPlantStatus = () => {        
        setmessageTemp("");
        setmessageHumidity("");
        props.modVal([]);
        updateHistory()
        
    };
    
    return (
            <>
                <div className="box">
                    <div style={{width: "100%"}}>
                        <img
                            alt="..."
                            className="rounded-circle img-fluid img-raised"
                            style={{width:"6em",height:"6em", marginTop:"30px"}}
                            src={require("assets/img/logo1.png")}
                            ></img>
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
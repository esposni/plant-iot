import React, { useState, 
    // useEffect 
} from "react";

import {Button,

} from "reactstrap";



// deactivate ad block  <<<<------

export default function ChatComponent(props) {
    

    // go to Pushbullet --> settings --> Account --> Access Token
    var accessToken="o.w7blMkA795tcKbOAINtVkw7VUaXAq3wm"
    var PushBullet = require('pushbullet');
    var pusher = new PushBullet(accessToken);
    // var iden_dev="ujATs9PznpcsjwSUQueKHs"
    // var iden_dev_arduino="ujATs9PznpcsjzEtrr7jae"
   

    

    const [messageHumidity,setmessageHumidity] = useState("");
    const [messageTemp,setmessageTemp] = useState("");
    const [time,setTime] = useState("");

    const updateHistory=()=>{
        // pusher.deleteAllPushes(function(error, response) {});
        var options = {
            limit: 3,
            modified_after: 1400000000.00000
        };
        pusher.history(options, function(error, response) {
            // console.log(response.pushes)
            // response.pushes.forEach(el =>{
          
            //     // console.log(el.sender_name)
            //     // console.log(el.body)
            //     // console.log(new Date(el.created))
            //     // console.log("--------------")
            //     setMessage(el.body);
            // });
            // token telegram bot 1348421001:AAFmmQLN0L9mU0vlGRujDcz1jiigMBya_a4

            if (response!==undefined){
                setmessageTemp(response.pushes[2].body)
                setmessageHumidity(response.pushes[1].body);
                props.modVal(()=>{
                    let text = response.pushes[0].body;
                    let arr = text.split("-")
                    if (arr.length<2){
                        return []
                    }else{
                        arr[0]=arr[0].replace("Temperatura: ","");
                        arr[0]=arr[0].replace("C°","");
                        arr[0]=arr[0].trim()
                        arr[1]=arr[1].replace(" Umidità: ","");
                        arr[2]=arr[2].replace(" Ora: ","");
                        setTime(arr[2]);
                        // console.log(arr)
                        return arr
                    }
                    
                });
            }
            
        })
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
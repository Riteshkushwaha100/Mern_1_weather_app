import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cardcom(props) {
  let [verifydata, setVerifydata] = useState("");
  console.log("Card Component");
  console.log(props.onData);
  let myData = props.onData;
  console.log(myData.length)
  if(myData.length>0) {
    console.log(myData[0].current.condition.icon);
  }
  //console.log(myData.current.condition.icon);
  //alert(Object.keys(myData).length)
  // if(Object.keys(myData).length)
  // if(myData.length)
  //alert(props.onCheckdata)

  return (
    <>
    {
      myData.length==0 ? (
      <>
        <div className="mx-auto" >No data Found</div>
      </>
      ) : (
       <div className="mx-auto" >   
      <Card
        style={{ width: "18rem", display: props.onCheckdata ? "" : "" }}
      >
        <Card.Img variant="top"  className="mx-auto"  style={{ width: '50%', height: '50%'}}  src={myData[0].current.condition.icon} />
        <Card.Body>
          <Card.Title>Location : {myData[0].location.name} </Card.Title>
          <Card.Title>Region :  {myData[0].location.region} </Card.Title>
          <Card.Title>Country :  {myData[0].location.country} </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Temperature in Celsius :  {myData[0].current.temp_c}</ListGroup.Item>
            <ListGroup.Item>Temperature in Fahrenheit : {myData[0].current.temp_f}</ListGroup.Item>
            <ListGroup.Item>Weather conditions : {myData[0].current.condition.text}</ListGroup.Item>
            <ListGroup.Item>Wind Speed : {myData[0].current.wind_kph} KPH </ListGroup.Item>
            <ListGroup.Item>Humidity :  {myData[0].current.humidity}</ListGroup.Item>
            <ListGroup.Item>Cloud Coverage : {myData[0].current.cloud}</ListGroup.Item>
            <ListGroup.Item>Last Updated : {myData[0].current.last_updated}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </div>
      )
    }
    </>
  );
}

export default Cardcom;

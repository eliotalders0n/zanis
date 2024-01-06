import React from "react";
import { Nav } from "react-bootstrap";

function Sidepane(props) {
  return (
    <div>
      <Nav defaultActiveKey="/home" style={{ width: "30vh", marginTop: "30px", fontSize:"12px"}}>
        <Nav.Link href="/mypage" style={{color: "white", width:"100%",}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/person.png" alt="profile"/> John Doe</Nav.Link>
        <Nav.Link eventKey="link-1" style={{color: "white", width:"100%"}}><img style={{width: "30px", marginBottom: "5px" }} src="assets/work.png" alt="profile"/> Jobs</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: "white", width:"100%", }}><img style={{width: "30px", marginBottom: "5px"}} src="assets/mug.png" alt="profile"/> Teaspot</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: "white", width:"100%",}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/community.png" alt="profile"/> My Tribe</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: "white", width:"100%",}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/calender.png" alt="profile"/> Events</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: "white", width:"100%",}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/channel.png" alt="profile"/> Channels</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: "white", width:"100%",}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/executive.png" alt="profile"/> Executive Networking</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: "white", width:"100%",}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/field.png" alt="profile"/> Cultivate</Nav.Link>
        <Nav.Link eventKey="link-2" style={{color: "white", width:"100%",}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/community2.png" alt="profile"/> Feedback</Nav.Link>
        <hr/>
        <br/>
        <br/>
        <br/>
        <Nav.Link eventKey="link-2" style={{color: "white"}}><img style={{width: "30px", marginBottom: "5px"}} src="assets/invite.png" alt="profile"/> Invite Peeps</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidepane;

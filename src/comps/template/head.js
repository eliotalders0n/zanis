import React from 'react';
import { Stack, Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';


function Head(props) {
  const TopNav = () => (
    <div style={{backgroundColor: "green", borderRadius: "0 0 20px 20px", position: "fixed", top: 0, left: 0, width: "100%"}}>
      <Stack direction="horizontal" gap={3}>
      <div className="p-1" style={{color: "white"}}><img src='zanis.jpeg' alt='zanis logo' style={{width: "40px", borderRadius: "5px"}}/></div>
      <div style={{color: "white", fontWeight: "700", marginTop: "8px"}}><p>Ministry of Information <br/> and Media</p></div>
    </Stack>
    </div>
  );
  
  // Bottom Navigation Component
  const BottomNav = () => (
    <>
    <div style={{backgroundColor: "green", borderRadius: "0 0 15px 15px", position: "fixed", top: 0, left: 0, width: "100%"}}>
      <Stack direction="horizontal" gap={3}>
      <div className="p-1" style={{color: "white"}}><img src='zanis.jpeg' alt='zanis logo' style={{width: "40px", borderRadius: "5px"}}/></div>
      <div style={{color: "white", fontWeight: "700", marginTop: "8px"}}><p>Ministry of Information <br/> and Media</p></div>
    </Stack>
    </div>

    <div style={{backgroundColor: "green", borderRadius: "10px 10px 0 0", position: "fixed", bottom: 0, left: 0, width: "100%"}}>
     <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/"><img src='assets/home.png' style={{width: "30px"}}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/reels"><img src='assets/reel.png' style={{width: "30px"}}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-2"><img src='assets/profile.png' style={{width: "30px"}}/></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    </>
  );
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the breakpoint as needed

  return (
    <div>
    {isMobile ? <BottomNav /> : <TopNav />}
    </div>
  );
}

export default Head;
import React from 'react';
import { Stack } from 'react-bootstrap';

function Head(props) {
  return (
    <div style={{backgroundColor: "green", borderRadius: "0 0 20px 20px"}}>
      <Stack direction="horizontal" gap={3}>
      <div className="p-1" style={{color: "white"}}><img src='zanis.jpeg' alt='zanis logo' style={{width: "40px", borderRadius: "5px"}}/></div>
      <div style={{color: "white", fontWeight: "700", marginTop: "8px"}}><p>Ministry of Information <br/> and Media</p></div>
    </Stack>
    </div>
  );
}

export default Head;
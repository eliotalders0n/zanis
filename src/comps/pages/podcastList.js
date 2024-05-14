import React from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import AudioPlayer from '../template/player';
import { useLocation } from "react-router-dom";
import { Container, Typography, List, ListItem, Button, Box } from '@mui/material';
import useGetPodcasts from "../hooks/useGetPodcasts";

function PodcastList() {
  const location = useLocation();
  const { data } = location.state || {};
  const { audioData } = useGetPodcasts();
  const [currentSongIndex, setCurrentSongIndex] = React.useState(-1);
  const currentSong = audioData[currentSongIndex];

  // Filter the audioData array to include only songs where song.ministry equals data.id
  const filteredAudioData = audioData.filter(song => song.ministry === data.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#121212', color: '#ffffff' }}>
      <Container maxWidth="md" style={{ minHeight: "60vh" }}>
        <Typography variant="h1" style={{ marginTop: '80px', marginBottom: '14px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          {data.name}
        </Typography>
        {filteredAudioData.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <Typography variant="h6">No Podcasts available for this ministry yet</Typography>
          </Box>
        ) : (
          <Box flex="1" overflow="auto" style={{ maxHeight: '45vh' }}>
          <List>
            {filteredAudioData.map((song, index) => (
              <ListItem key={song.title} style={{ backgroundColor: currentSongIndex === index ? '#1976D2' : 'transparent', color: currentSongIndex === index ? '#ffffff' : '#000000', }}>
                <Button onClick={() => setCurrentSongIndex(index)} fullWidth variant="text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body1">
                    {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                  </Typography>
                  <Typography variant="body1" style={{ flex: 1, color: "white" }}>
                    {song.title}
                  </Typography>
                  <span>
                    {index === currentSongIndex ? (
                      <MdPause size={20} style={{ marginLeft: '8px' }} />
                    ) : (
                      <MdPlayArrow size={20} style={{ marginLeft: '8px' }} />
                    )}
                  </span>
                </Button>
              </ListItem>
            ))}
          </List>
          </Box>
        )}
      </Container>
      {filteredAudioData.length > 0 && (
        <div style={{ position: 'fixed', bottom: "7vh", left: 0, width: '100%', zIndex: 999 }}>
          <AudioPlayer key={currentSongIndex} currentSong={currentSong} songCount={filteredAudioData.length} songIndex={currentSongIndex} onNext={() => setCurrentSongIndex((i) => i + 1)} onPrev={() => setCurrentSongIndex((i) => i - 1)} />
        </div>
      )}
    </div>
  );
}

export default PodcastList;
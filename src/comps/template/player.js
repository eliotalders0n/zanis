import React, { useRef, useState, useEffect } from "react";
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
import IconButton from "./iconButton";
import AudioProgressBar from "./audioProgressBar.js";
import { Container, Typography, Grid, Box } from "@mui/material";

function formatDurationDisplay(duration) {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  const formatted = [min, sec].map((n) => (n < 10 ? "0" + n : n)).join(":");

  return formatted;
}

export default function AudioPlayer({
  currentSong,
  songCount,
  songIndex,
  onNext,
  onPrev,
}) {
  const audioRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const [isPlaying, setIsPlaying] = useState(false);

  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currentProgress);

  useEffect(() => {
    audioRef.current?.pause();

    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [songIndex]);

  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleBufferProgress = (e) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  return (
    <Container>
      <Box bgcolor="black" color="slate400" p={3} position="relative">
        {currentSong && (
          <audio
            ref={audioRef}
            preload="metadata"
            onDurationChange={(e) => setDuration(e.currentTarget.duration)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleNext}
            onCanPlay={(e) => {
              e.currentTarget.volume = volume;
              setIsReady(true);
            }}
            onTimeUpdate={(e) => {
              setCurrentProgress(e.currentTarget.currentTime);
              handleBufferProgress(e);
            }}
            onProgress={handleBufferProgress}
            onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
          >
            <source type="audio/mpeg" src={currentSong.src} />
          </audio>
        )}
        <AudioProgressBar
          duration={duration}
          currentProgress={currentProgress}
          buffered={buffered}
          onChange={(e, value) => {
            if (!audioRef.current) return;

            audioRef.current.currentTime = value;
            setCurrentProgress(value);
          }}
        />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box textAlign="center" mb={1}>
            <Typography variant="h6">
              {currentSong?.title ?? "Select a podcast"}
            </Typography>
            <Typography variant="body2">{new Date(
                currentSong?.createdAt.seconds * 1000 +
                currentSong?.createdAt.nanoseconds / 1000000
              ).toLocaleDateString() ?? "Date"}</Typography>
          </Box>
        </Box>
        <Grid
          container
          justifyContent="center"
          // justifyContent="space-between"
          alignItems="center"
         
        >
          <Typography variant="caption">
            {elapsedDisplay} / {durationDisplay}
          </Typography>
          <br/><br/>
          <Grid item container justifyContent="center" spacing={4}>
            <Grid item>
              <IconButton
                onClick={handlePrev}
                disabled={songIndex === 0}
                aria-label="go to previous"
                intent="secondary"
              >
                <MdSkipPrevious size={24} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={!isReady}
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause" : "Play"}
                size="lg"
              >
                {!isReady && currentSong ? (
                  <CgSpinner size={24} className="animate-spin" />
                ) : isPlaying ? (
                  <MdPause size={30} />
                ) : (
                  <MdPlayArrow size={30} />
                )}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={handleNext}
                disabled={songIndex === songCount - 1}
                aria-label="go to next"
                intent="secondary"
              >
                <MdSkipNext size={24} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

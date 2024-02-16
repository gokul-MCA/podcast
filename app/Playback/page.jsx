// pages/playback.js
import { useContext, useEffect } from 'react';
import { AudioContext } from '@/components/AudioContext';

const Playback = () => {
  const { recordedAudioData } = useContext(AudioContext);

  useEffect(() => {
    if (recordedAudioData) {
      const audioUrl = URL.createObjectURL(recordedAudioData);
      const audio = new Audio(audioUrl);
      audio.play();
    }
  }, [recordedAudioData]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold">Playback Recorded Audio</h1>
      {/* You can add additional UI here if needed */}
    </div>
  );
};

export default Playback;

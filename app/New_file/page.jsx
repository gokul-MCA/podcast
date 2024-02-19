// pages/record.js
'use client'
import { Button } from '@/components/ui/button';
import React,{ useState, useEffect } from 'react';
import { Mic, Disc2,Disc3,Circle,Check, X, AudioLines } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { GiMusicalScore } from "react-icons/gi";

const Record = () => {
  const [mediaStream, setMediaStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [hasPlaybacked, setHasPlaybacked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getMicrophone() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMediaStream(stream);
      } catch (err) {
        console.error('Error accessing microphone:', err);
      }
    }

    getMicrophone();

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (mediaStream) {
      const recorderInstance = new MediaRecorder(mediaStream);
      recorderInstance.ondataavailable = e => {
        if (e.data.size > 0) {
          setAudioChunks(prevChunks => [...prevChunks, e.data]);
        }
      };
      setRecorder(recorderInstance);
    }
  }, [mediaStream]);

  const handleStartRecording = () => {
    if (recorder) {
      recorder.start();
      setIsRecording(true);
    }
  };

  const handleStopRecording = () => {
    if (recorder) {
      recorder.stop();
      setIsRecording(false);
    }
  };

  // const handlePlayback = () => {
  //   const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
  //   const audioUrl = URL.createObjectURL(audioBlob);
  //   const audio = new Audio(audioUrl);
  //   audio.play();
  //   setHasPlaybacked(true);
  // };

  const handleCancel = () => {
    window.location.reload(); 
 };

//  const handleCheck = (recordedAudioData) => {
//    // Ensure there's recorded audio
//   if (audioChunks.length === 0) {
//     console.error('No audio recorded.');
//     return;
//   }
//   localStorage.setItem('recordedAudio', recordedAudioData);
//   router.push('/upload');

//  }
const handleCheck = () => {
  // Ensure there's recorded audio
  if (audioChunks.length === 0) {
    console.error('No audio recorded.');
    return;
  }

  // Convert audio chunks to Blob
  const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

  // Convert Blob to base64 string
  const reader = new FileReader();
  reader.onload = function () {
    const audioBase64 = reader.result.split(',')[1];

    // Store the recorded audio in localStorage
    localStorage.setItem('recordedAudio', audioBase64);

    // Redirect to the upload page
    router.push('/upload');
  };
  reader.readAsDataURL(audioBlob);
};

  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen '>

      <Image src="/logo.png" alt="logo" width={130} height={130} priority className="absolute top-0 left-0 p-3 "/>

      <Button radius="full" className=" absolute top-10 right-5 mr-10 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <Link href="/upload" className="text-white">
        Choose File
       </Link>
      </Button>

      <h1 className='absolute top-[100px] bg-gradient-to-tr from-pink-500 to-yellow-500 rounded scroll-m-20 p-4 text-4xl font-semibold tracking-tight first:mt-0'>
      Record Your Podcast</h1>

      
      <div className='flex items-center'>
      <AudioLines className='w-[70px] h-[50px]'/><Mic className=' w-[150px] h-[150px]'/><AudioLines className='w-[70px] h-[50px]'/>
      </div>

      <div className='p-5 space-x-8 absolute bottom-[200px]'>
        <Button onClick={handleStartRecording} disabled={isRecording} className="border-4 border-green-500">
          Start Recording &nbsp; <Disc2/>
        </Button>
        <Button onClick={handleStopRecording} disabled={!isRecording} className={`border-4 ${isRecording ? 'border-green-500' : ''}`}>
          Stop Recording &nbsp; <Circle/>
        </Button>
        {/* <Button onClick={handlePlayback} disabled={audioChunks.length === 0} className={`border-4 ${ isRecording || !isRecording ? 'border-green-500' : ''}`}>
          Playback Music &nbsp; <Disc3/>
        </Button> */}
        </div>

        <div className='p-0 space-x-[100px] absolute bottom-[100px]'>
        <Button className='hover:border-4 border-red-500' onClick={handleCancel}><X/></Button>
        <Button className='bg-green-500' onClick={handleCheck} disabled={!hasPlaybacked || isRecording}><Check/></Button> 
        </div>

      
    </div>
  );
};

export default Record;

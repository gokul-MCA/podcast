'use client'
import Image from 'next/image';
import React,{ useState} from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { Check, X, AudioLines } from 'lucide-react';
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";
// import * from './style.css'
// import styles from './style.module.css';

export default function App() {
  const [audioUrl, setAudioUrl] = useState(null); 
  const router = useRouter();

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
    console.log(url)
    // const audio = document.createElement('audio');
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
  };

  const handleCancel = () => {
    window.location.reload(); 
 };

  const handleCheck = () => {
       // Ensure there's recorded audio
      if (!audioUrl) {
        console.error('No audio recorded.');
        return;
      }
      localStorage.setItem('audioUrl', audioUrl);
      router.push('/upload');
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    
    <Image src="/logo.png" alt="logo" width={130} height={130} priority className="absolute top-0 left-0 p-3 "/>
    <Button radius="full" className=" absolute top-10 right-5 mr-10 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <Link href="/upload" className="text-white">
        Choose File
       </Link>
    </Button>
    <Button variant='outline' className='absolute top-14 left-5'>
        <Link href='/' target='' className='flex items-center gap-1' ><HomeIcon className='w-5 h-5'/>Home</Link>
      </Button>

      <h1 className='absolute top-[100px] bg-gradient-to-tr from-pink-500 to-yellow-500 
      rounded-lg  p-4 text-4xl font-semibold tracking-tight first:mt-0'>
      Record Your Podcast
      </h1>

      <div className='flex items-center absolute top-[300px]'>
      <AudioLines className='w-[50px] h-[30px]'/>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        // downloadOnSavePress={true}
        // downloadFileExtension="mp3"
        showVisualizer={true}
        classes={{
            AudioRecorderStartSaveClass: 'audio-recorder-svg-color',
            AudioRecorderPauseResumeClass: 'audio-recorder-svg-color',
            AudioRecorderDiscardClass: 'audio-recorder-svg-color',
          }}
        />
      <AudioLines className='w-[50px] h-[30px]'/>
      </div>

     <div className='p-4 flex space-x-8 absolute top-[420px]'>

      <Button 
      className="bg-white hover:bg-green-200 text-black font-bold py-2 px-4 rounded"
      onClick={recorderControls.startRecording}>Start recording</Button>
      <br />
      
      <Button 
      className="bg-white hover:bg-red-200 text-black font-bold py-2 px-4 rounded"
      onClick={recorderControls.stopRecording}>Stop recording</Button>
      <br />

      </div>

      <div className='absolute top-[570px] '>
      {audioUrl && (
        <div className="mb-4">
          <audio className="mx-auto" controls src={audioUrl}></audio>
        </div>
      )}
      </div>

      <div className='p-0 space-x-[100px] absolute top-[700px]'>
        <Button className='hover:bg-red-200' onClick={handleCancel}><X/></Button>
        <Button className='bg-green-300' onClick={handleCheck}><Check/></Button> 
        </div>

    </div>
    
  );
}
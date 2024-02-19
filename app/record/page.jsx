'use client'
import { Button } from '@/components/ui/button'
import React,{useState} from 'react'
import { ReactMic } from 'react-mic'
import { useRouter } from "next/navigation";

export default function Record () {
      const [voice,setVoice] = useState(false)
      const [audioLink,setaudioLink] = useState('')
      const router = useRouter();
      
      const onStop =(blob)=>{
        console.log(blob)
        setaudioLink(blob.blobURL)
      }


      const startHandle =()=>{
          setVoice(true)
    }

      const stopHandle =()=>{
        setVoice(false)
      }

      const clearHandle =()=>{
        setVoice(false)
        setaudioLink("")
      }

    //   const submit = () => {
    //     router.push({
    //         pathname: '/record1',
    //         query: { audioLink: audioLink }
    //     });
    // }

    const submit = () => {
        // setAudioLink(audioLink); // Set the audioLink value
        router.push('/record1');// Navigate to record1 page if needed
    };


  return (
    <div>
        <h2>hello Record</h2>

        <ReactMic className='w-48' record={voice} onStop={onStop}/>

        <div className='border py-4 px-6 mx-auto bg-black text-white'>
           {audioLink? <Button onClick={clearHandle}>Clear</Button>: ''}
        </div>

        <div className=''>
            {!voice ? <Button onClick={startHandle} className=''>Start</Button> : <Button onClick={stopHandle}>Stop</Button>}
        </div>

        <div>
            {audioLink ? <audio controls src={audioLink} className='mt-6'/>:null}
        </div>

        <div>
            <Button onClick={submit}>submit</Button>
        </div>

    </div>
  )
}

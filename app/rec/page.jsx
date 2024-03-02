"use client";
import React, { useState , useEffect , useRef } from "react";
import { Input } from "@/components/ui/input";
import { Mic, AudioLines } from 'lucide-react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription , AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline} from "react-icons/io5";
import { FaRegFileImage, FaRegFileAudio } from "react-icons/fa";
import { BsCardHeading} from "react-icons/bs";
import { GrFormUpload } from "react-icons/gr";
import { MdCancelPresentation , MdOutlineDescription , MdOutlineCheckBox, MdOutlineQueue} from "react-icons/md";


function formatFileSize(sizeInBytes) {
  const fileSizeInKB = sizeInBytes / 1024;
  if (fileSizeInKB < 1000) {
    // If less than 100KB, show in KB with one decimal place
    return `${Math.round(fileSizeInKB * 10) / 10} KB`;
  } else {
    // If equal to or more than 100KB, show in MB with one decimal place
    return `${Math.round((sizeInBytes / (1024 * 1024)) * 10) / 10} MB`;
  }
}

export default function PodcastForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [category, setCategory] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [episode,setEpisode] = useState("");
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null); 

//   back button
  const goBack = () => {
    router.back();
  };

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
    setSelectedAudio(new File([blob], "audio.mp3"));
    console.log(url)
    // const audio = document.createElement('audio');
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
  };

  const audioInputRef = useRef(null);
  const cancelAudio = () => {
    setAudioUrl(null);
    if (audioInputRef.current) {
      audioInputRef.current.value = "";
    }
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    const image = new window.Image();
    image.src = URL.createObjectURL(imageFile);
    image.onload = function () {
      if (image.width !== image.height) {
        alert(
          "Please select an image with equal width and height (square image)."
        );
        event.target.value = "";
        setSelectedImage(null);
      } else {
        setSelectedImage(imageFile);
      }
    };
  };

  const imageInputRef = useRef(null)
  const cancelImage = () => {
    setSelectedImage(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const submitPodcast = () => {
    // Perform logic to submit the podcast
    // You can use selectedAudio, selectedImage, heading, and description state values here
    if (
      !selectedAudio ||
      !selectedImage ||
      !category ||
      !heading ||
      !description
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    alert("Podcast submitted!");
    router.push("/");
    // Optional: Navigate to a new page or show a success message
    // router.push('/success-page');
  };

 
  useEffect(() => {
    // Show the alert
    setShowAlert(true);

    // Set a timeout to hide the alert after 2 seconds
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="p-2">

      <div className="relative items-center ">
      <div className="absolute left-3 flex p-3">
      <Image
        src="/logo.png"
        alt="logo"
        width="100"
        height="100"
        priority
      />
      </div>

      <h2 className="flex items-center justify-center scroll-m-20 border-b p-2 text-3xl font-semibold tracking-tight first:mt-0">
        Record <Mic className="w-10 h-10"/>
      </h2>
      </div>
      
     

      <div className="pl-10 pt-3 flex gap-2">
      <Button variant='outline' onClick={goBack} className ='flex items-center gap-1'> <IoArrowBackOutline className="w-4 h-4"/> Back</Button>

      {showAlert && (
        <Alert
          variant="destructive"
          className="w-[300px] h-10 flex justify-center items-center"
        >
          <AlertDescription className='flex gap-2 items-center'>Record Audio File <FaRegFileAudio /></AlertDescription>
        </Alert>
      )}
      </div>

      {/* record section */}

      <div className="flex space-x-5 px-10 py-3">
        <div className="w-full border rounded-md p-5 space-y-8">

     <h2 className="flex justify-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
     Record Audio
     </h2>     
      <div className='flex items-center justify-center p-10'>
      <AudioLines className='w-[50px] h-[30px]'/>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        // downloadOnSavePress={true}
        // downloadFileExtension="mp3"
        showVisualizer={true}
        />
      <AudioLines className='w-[50px] h-[30px]'/>
      </div>

    {/* start and stop button */}
     <div className=' flex space-x-8 items-center justify-center p-10'>
      <Button 
      className="bg-white hover:bg-green-200 text-black font-bold py-2 px-4 rounded"
      onClick={recorderControls.startRecording}>Start recording</Button>
      <br />
      
      <Button 
      className="bg-white hover:bg-red-200 text-black font-bold py-2 px-4 rounded"
      onClick={recorderControls.stopRecording}>Stop recording</Button>
      <br />
      </div>

      <div className='p-10'>
      {audioUrl && (
        <div className="mb-4">
          <audio className="mx-auto flex items-center" controls src={audioUrl}></audio>
        </div>
      )}
      </div>

        </div>

        {/* filled section */}

        <div className="w-full border rounded-md p-5">
        <form className="w-full space-y-6">
            <h2 className="flex justify-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Add Podcast
            </h2>
            {/* heading part */}
            <div className="grid grid-cols-4 items-center gap-1 ">

              <div className="col-span-1 flex gap-2 items-center">
              <BsCardHeading className="w-4 h-4"/>
              <Label>Heading </Label>
              </div>

              <Input
                id="heading"
                type="text"
                placeholder="Enter Podcast Heading"
                className="col-span-3"
                required
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>

            {/* description part */}
            <div className="grid grid-cols-4 items-center gap-4 ">

              <div className="col-span-1 flex gap-2 items-center">
              <MdOutlineDescription className="w-4 h-4"/>
              <Label> Description</Label>
              </div>

              <Textarea
                id="description"
                rows="5"
                cols="5"
                required
                placeholder="Enter Podcast Description"
                className="col-span-3 h-10"
                value={description}
                onChange={(e) => {
                  // condition to only accept 250 letters
                  const inputValue = e.target.value;
                  if (inputValue.length <= 250) {
                    setDescription(inputValue);
                  }
                }}
              />
            </div>

            {/* category part */}
            <div className="grid grid-cols-4 items-center gap-4 ">

              <div className="col-span-1 flex gap-2 items-center">
              <MdOutlineCheckBox className="w-4 h-4"/>
              <Label> Genre</Label>
              </div>

              <Select required>
                <SelectTrigger className="col-span-3 w-auto">
                  <SelectValue
                    placeholder="Select a Genre"
                    value={category}
                    id="genre"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem value="conversation">Conversation</SelectItem>
                    <SelectItem value="storytelling">Storytelling</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            {/* episode */}
            <div className="grid grid-cols-4 items-center gap-1 ">

              <div className="col-span-1 flex gap-2 items-center">
              <MdOutlineQueue className="w-4 h-4"/>
              <Label>Episodes </Label>
              </div>

                <Input
                    id="episode"
                    type='text'
                    placeholder="Episode 1"
                    className="col-span-3"
                    required
                    // value="Episode 1"
                    onChange={(e) => setEpisode(e.target.value)}
                />
  
            
            </div>

            {/* image part  */}
            <div className="grid grid-cols-4 items-center gap-4 ">

              <div className="col-span-1 flex gap-2 items-center">
              <FaRegFileImage className="w-4 h-4"/>
              <Label> Thumbnail </Label>
              </div>

              <div className="col-span-3 flex items-center">
              <Input
                id="imageFile"
                type="file"
                placeholder="Select image file"
                accept="image/*"
                required
                onChange={handleImageChange}
                ref={imageInputRef}
              />
               <Button type="cancel">
                <MdCancelPresentation className="w-5 h-5" onClick={cancelImage} />
              </Button>
              </div>

            </div>

            {selectedImage &&
              selectedImage.type &&
              selectedImage.type.startsWith("image/") && (
                  <div className="flex items-center justify-end space-x-20 ">
                    {/* <p>Podcast Image:</p> */}
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Podcast Image"
                      className="inherit border-4  "
                      style={{
                        maxWidth: "100%",
                        maxHeight: "90px",
                        objectFit: "contain",
                      }}
                    />
                    <p className="pr-20">{formatFileSize(selectedImage.size)}</p>
                 
                </div>
              )}

            {/* audio part */}
            <div className="grid grid-cols-4 items-center gap-4 ">

              <div className="col-span-1 flex gap-2 items-center">
              <FaRegFileAudio className="w-4 h-4"/>
              <Label id="audioFile">Audio File </Label>
              </div>

               <div className="col-span-3 flex items-center">   
               <audio className="mx-auto w-full" controls src={audioUrl} onChange={addAudioElement}></audio>

               {audioUrl && (
                <div className="flex items-center w-[100px]">
                  <p className="p-1 ">{formatFileSize(selectedAudio.size)}</p>
              </div>
            )}

              <Button type="cancel">
                <MdCancelPresentation className="w-5 h-5" onClick={cancelAudio} />
              </Button>
              </div>

            </div>

            

            {/* button */}
            <div className="flex justify-between">

              <Button type="button" onClick={handleCancel}
              className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white gap-1'>Cancel  
              <MdCancelPresentation className="w-6 h-6" />
              </Button>

              <Button type="submit" onClick={submitPodcast}
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white">Upload 
              <GrFormUpload className="w-6 h-6"/>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

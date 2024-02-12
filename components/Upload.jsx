"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
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

function formatFileSize(sizeInBytes) {
  const fileSizeInKB = sizeInBytes / 1024;
  if (fileSizeInKB < 1000) {
    // If less than 100KB, show in KB with one decimal place
    return `${Math.round((fileSizeInKB) * 10) / 10} KB`;
  } else {
    // If equal to or more than 100KB, show in MB with one decimal place
    return `${Math.round((sizeInBytes / (1024 * 1024)) * 10) / 10} MB`;
  }
}

export default function PodcastForm() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Create a ref for the audio element
//  play pause
  const playPauseToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [selectedAudio, setSelectedAudio] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleAudioChange = (event) => {
    const audioFile = event.target.files[0];
    setSelectedAudio(audioFile);
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    const image = new Image();
    image.src = URL.createObjectURL(imageFile);
    image.onload = function() {
    if (image.width !== image.height) {
      alert('Please select an image with equal width and height (square image).');
      event.target.value = '';
      setSelectedImage(null);
    } else {
      setSelectedImage(imageFile);
    }
  };
  };

  const audioInputRef = useRef(null);
  const cancelAudio = () =>{
    setSelectedAudio(null);
    if (audioInputRef.current) {
      audioInputRef.current.value = "";
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

  return (
    <div className="flex w-full">

      <div className="w-full border p-5">
        <form className="w-full space-y-8">
          <h2 className="flex justify-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Add Music
          </h2>
          {/* heading part */}
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label>Heading</Label>
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
            <Label>Description</Label>
            <Textarea
              id="description"
              rows="5"
              cols="5"
              required
              placeholder="Enter Podcast Description"
              className="col-span-3"
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
            <Label>Genre</Label>

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

          {/* image part  */}
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label> Thumbnail </Label>
            <Input
              id="imageFile"
              type="file"
              placeholder="Select image file"
              accept="image/*"
              required
              className="col-span-3 "
              onChange={handleImageChange}
            />
          </div>

          {selectedImage &&
            selectedImage.type &&
            selectedImage.type.startsWith("image/") && (
              <div>
                <div className="flex items-center justify-end space-x-20 ">
                  {/* <p>Podcast Image:</p> */}
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Podcast Image"
                    className="inherit border-4  "
                    style={{
                      maxWidth: "100%",
                      maxHeight: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <p className="pr-20">
                    {formatFileSize(selectedImage.size)}
                  </p>
                </div>
              </div>
            )}

          {/* audio part */}
          <div className="grid grid-cols-5 items-center gap-4 ">
            <Label id="audioFile" className="col-span-1">
             Audio File
            </Label>
            <Input
              id="audioFile"
              type="file"
              placeholder="Select audio file"
              accept=".mp3,.wav,audio/*"
              required
              className="col-span-3"
              onChange={handleAudioChange}
              ref={audioInputRef}
            /><Button type="cancel" className="col-span-1" >
                <MdOutlineCancel className="w-5 h-5" onClick={cancelAudio}/>
                </Button>
          </div>

          {selectedAudio && (
            <div>
              <div className="flex items-center justify-end space-x-10">
                {/* <p>Podcast Audio:&nbsp;</p> */}

                <audio controls controlsList="nodownload">
                  <source 
                    src={URL.createObjectURL(selectedAudio)}
                    type={selectedAudio.type}
                  />
                  Your browser does not support the audio element.
                </audio>
                

                <p className="pr-10">
                  {formatFileSize(selectedAudio.size)}
                </p>
              </div>
            </div>
          )}

          {/* button */}
          <div className="space-x-10">
            <Button type="cancel" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" onClick={submitPodcast}>
              Submit
            </Button>
          </div>
        </form>
      </div>

      {/* preview section */}

      <div className="border w-full p-5">
        <h2 className="flex justify-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Preview
        </h2>
        {selectedAudio && heading &&  description && selectedImage &&
          selectedImage.type &&
          selectedImage.type.startsWith("image/") && (


            <div className="flex flex-col justify-center items-center p-10">

              {/* embedded audio and image */}
              <div className="relative">
                {/* image */}
                <div className="">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Podcast Image"
                  className=" border-4 object-contain z-index-0"
                />
                </div>

              {/* audio */}
              <div className="absolute bottom-0 right-0 flex justify-center ">
                <audio ref={audioRef} controlsList="nodownload">
                  <source
                    src={URL.createObjectURL(selectedAudio)}
                    type={selectedAudio.type}
                    className=""
                  />
                  Your browser does not support the audio element.
                </audio>
                
                <button onClick={playPauseToggle} className="btn border rounded-full bg-black w-16 h-16 flex justify-center items-center z-index-1">
                  {isPlaying ? <IoPauseOutline className="w-5 h-5"/> : <IoPlayOutline className="w-5 h-5"/>}
                </button>
                
              </div>
              </div>

              {/* heading and description */}
              <div className="p-5">
              <h2 className="flex justify-center border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">{heading}</h2>
              </div>
              <div className="">
              <p className="break-words tracking-tight hover:tracking-wide">{description}</p>
              </div>
              
            </div>

          )}
      </div>
 


    </div>
  );
}
'use client'
import React,{useState} from  'react';
import { useRouter } from "next/navigation";

export default function Record1() {
    const [blobURL, setBlobURL] = useState(null);
    const router = useRouter();
    // const { audioLink } = ();
    const fetchBlobURL = async () => {
        try {
            const response = await fetch('YOUR_BLOB_URL');
            const blob = await response.blob();
            const blobURL = URL.createObjectURL(blob);
            setBlobURL(blobURL);
        } catch (error) {
            console.error('Error fetching Blob URL:', error);
        }
    };


    return (
        <div>
            <h2>Record1 Page</h2>
            {blobURL && 
            <audio controls src={blobURL} alt="Blob" />
            }
        </div>
    );
}
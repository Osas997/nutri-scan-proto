import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";

const Tensor = () => {
   const [model, setModel] = useState(null);
   const [onCamera, setOnCamera] = useState(false);
   const [predictions, setPredictions] = useState([]);
   const webcamRef = useRef(null);

   useEffect(() => {
      tf.ready().then(() => {
         loadModel();
      });

      if (onCamera) {
         const interval = setInterval(() => {
            prediction();
         }, 1000);

         return () => clearInterval(interval);
      }
   }, [onCamera]);

   const loadModel = async () => {
      try {
         const model = await cocoSsd.load();
         setModel(model);
         console.log("dataset loaded");
      } catch (error) {
         console.log(error);
      }
   };

   const prediction = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const imageElement = document.createElement("img");
      imageElement.onload = async () => {
         if (imageElement.width > 0 && imageElement.height > 0) {
            const predictions = await model.detect(imageElement);
            setPredictions(predictions);
            console.log(predictions);
         } else {
            console.error("Invalid image dimensions");
         }
      };
      imageElement.src = imageSrc;
   };

   const handleClick = () => {
      setOnCamera(!onCamera);
   };

   const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "environment",
   };

   return (
      <div>
         <h1>kocak</h1>
         <button type="button" onClick={handleClick}>
            {onCamera ? "Off Camera" : "On Camera"}
         </button>
         <h2>Hasil</h2>
         <ul>
            {predictions.map((prediction, index) => (
               <li key={index}>
                  Objek :{prediction.class} Nilai :{prediction.score}
               </li>
            ))}
         </ul>
         {onCamera && (
            <div>
               <Webcam
                  mirrored={true}
                  audio={false}
                  height={480}
                  width={1280}
                  videoConstraints={videoConstraints}
                  id="video"
                  ref={webcamRef}
               />
            </div>
         )}
      </div>
   );
};

export default Tensor;

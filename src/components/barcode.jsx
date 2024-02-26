import { useState, useEffect } from "react";
import Quagga from "quagga";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Barcode = ({ onDetected }) => {
   useEffect(() => {
      Quagga.init(
         {
            inputStream: {
               name: "Live",
               type: "LiveStream",
               target: document.querySelector("#barcode-scanner"),
               mirror: true, // Tidak menggunakan efek mirror
               constraints: {
                  width: 480,
                  height: 480,
                  facingMode: "environment", // atau "user" untuk kamera depan
               },
            },
            decoder: {
               readers: ["ean_reader"], // atau tambahkan pembaca lain seperti "code_128_reader"
            },
         },
         (err) => {
            if (err) {
               console.error(err);
               return;
            }
            console.log("Quagga initialization finished.");
            Quagga.start();
         }
      );

      Quagga.onDetected((data) => {
         console.log(data.codeResult.code);
         onDetected(data.codeResult.code);
         Quagga.stop();
      });

      return () => {
         Quagga.stop();
      };
   }, [onDetected]);

   return (
      <div>
         <div id="barcode-scanner"></div>
      </div>
   );
};

export default Barcode;

import { useState } from "react";
import Barcode from "./components/barcode";

const Tes = () => {
   const [barcode, setBarcode] = useState("Tidak ada Scan");

   const handleBarcodeDetected = (data) => {
      setBarcode(
         `https://world.openfoodfacts.org/api/v0/product/${data}.json?fields=product_name`
      );
   };

   return (
      <div>
         <Barcode onDetected={handleBarcodeDetected} />
         <h1>{barcode}</h1>
      </div>
   );
};

export default Tes;

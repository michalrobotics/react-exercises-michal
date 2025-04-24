import { useState } from "react";

const ImageUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadFileHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    }

    return <input type='file' onChange={uploadFileHandler}/>;
}

export default ImageUploader;

import { useState, useEffect } from 'react';

const useCamera = () => {
  const [cameraStream, setCameraStream] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraStream(stream);
      } catch (error) {
        console.error('Camera access error:', error);
      }
    };
    startCamera();

    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraStream]);

  const captureImage = () => {
    const video = document.querySelector('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    setImage(canvas.toDataURL('image/png'));
    
    // Đảm bảo khai báo biến imgData đúng cách
    const imgData = canvas.toDataURL('image/png'); // Khai báo biến imgData
  
    console.log('Captured Image:', imgData); // In ra giá trị imgData để kiểm tra
  
    setImage(imgData); // Cập nhật state với imgData
  };

  return { cameraStream, image, captureImage };
};

export default useCamera;
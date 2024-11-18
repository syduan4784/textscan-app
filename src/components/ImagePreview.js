// components/ImagePreview.js
import React from 'react';

const ImagePreview = ({ image }) => {
  console.log(image);  // Kiểm tra giá trị image

  return image ? (
    <img src={image} alt="Captured" style={{ width: '20%' }} />// điều chỉnh kích thước ảnh đã chụp
  ) : (
    <p>No image captured yet</p> // Thông báo nếu chưa có ảnh
  );
};

export default ImagePreview;

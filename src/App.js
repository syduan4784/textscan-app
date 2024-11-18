// App.js
import React  from 'react';
import Camera  from './components/Camera';
import TextScanner  from './components/TextScanner';
import ImagePreview  from './components/ImagePreview';
import useCamera  from './hooks/useCamera';
import './App.css';


function App() {
  const { image, captureImage } = useCamera();
  const [searchText, setSearchText] = React.useState(''); // Luu trang thai tim kiem
  const [scannedText, setScannedText] = React.useState(''); // Luu van ban quet duoc
  
  // Ham xu ly khi nguoi dung nhap vao o tim kiem
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    console.log("Search Text:", searchText);
    

  };

  const normalizedScannedText = scannedText.toLowerCase(); // Chuẩn hóa văn bản quét
  const normalizedSearchText = searchText.toLowerCase();   // Chuẩn hóa chuỗi tìm kiếm
    
  const isFound = normalizedScannedText.includes(normalizedSearchText); // Kiểm tra chuỗi

  return (
    <div className="App">
      <h1>Text Scanner App</h1>
      
      {/* Them o tim kiem*/}
      <input
        type='text'
        placeholder='Enter text to search...'
        value={searchText}
        onChange={handleSearch}
        className='search-input'
      />

      <Camera onCapture={captureImage} />
      {image && (
        <>
          <ImagePreview image={image} />
          <TextScanner 
            image={image}
            onScanned={(text) => setScannedText(text)} // Cap nhat van ban quet
            />
        </>
      )}

      {/* Ket qua tim kiem */}
      {scannedText && (
        <div className='search-results'>
          {isFound ? (
            <p>Found: {searchText}</p>
          ) : (
            <p>Text not found</p>
          )}
        </div>
      )}
    
    </div>
  );
}

export default App;

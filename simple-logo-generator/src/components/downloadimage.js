// downloadImage.js

const downloadImage = (node, filename = 'download.png') => {
    domtoimage.toBlob(node)
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Failed to download the image:', error);
      });
  };
  
  export default downloadImage;
  
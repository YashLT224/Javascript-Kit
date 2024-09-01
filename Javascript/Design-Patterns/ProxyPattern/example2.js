class RealImage {
    constructor(fileName) {
      this.fileName = fileName;
      this.loadImage();
    }
  
    loadImage() {
      console.log(`Loading image: ${this.fileName}`);
    }
  
    display() {
      console.log(`Displaying image: ${this.fileName}`);
    }
  }
  
  class ImageProxy {
    constructor(fileName) {
      this.fileName = fileName;
      this.image = null;
    }
  
    display() {
      if (!this.image) {
        this.image = new RealImage(this.fileName);
      }
      this.image.display();
    }
  }
  
  const image1 = new ImageProxy('image1.jpg');
  const image2 = new ImageProxy('image2.jpg');
  
  image1.display(); // Lazy-loaded
  image2.display(); // Lazy-loaded
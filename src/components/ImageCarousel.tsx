interface ImageCarouselProps {
  images: [{ src: string; alt: string }];
}
const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageCarousel;

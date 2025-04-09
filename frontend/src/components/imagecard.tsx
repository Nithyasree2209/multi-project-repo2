interface ImageCardProps {
    imageUrl: string;
    altText?: string;
  }
  
  const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText = "Card Image" }) => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg w-full h-48 object-cover" src={imageUrl} alt={altText} />
        </a>
      </div>
    );
  };
  
  export default ImageCard;
  
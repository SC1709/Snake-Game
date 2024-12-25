import React from "react";

interface ImageProps {
  className?: any;
  src: any;
  alt?: any;
}

const ImageComponent: React.FC<ImageProps> = ({ className, src, alt }) => {
  return (
    <div>
      <img className={className} src={src} alt={alt} srcSet="" />
    </div>
  );
};

export default ImageComponent;
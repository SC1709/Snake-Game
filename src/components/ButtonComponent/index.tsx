interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLImageElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLImageElement>;
  }
  
  const ButtonComponent: React.FC<ImageProps> = ({
    src,
    alt,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
  }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  };
  
  export default ButtonComponent;
  
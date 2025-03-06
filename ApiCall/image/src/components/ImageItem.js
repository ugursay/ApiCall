function ImageItem({ image }) {
  console.log(image);
  debugger;
  return (
    <div>
      <img
        className="imageListImg"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;

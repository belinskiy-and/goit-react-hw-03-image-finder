import PropTypes from 'prop-types';
import { ImageGalleryStyled } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";

export const ImageGallery = ({ items, onClick }) => {

    
    return (
        <ImageGalleryStyled>            
            {items.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    onClick={() => onClick(largeImageURL)}
                />
            ))}
        </ImageGalleryStyled>
    );

}

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
import PropTypes from 'prop-types';
import { ImageGalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
    return (<ImageGalleryItemImage
        onClick={() => onClick(largeImageURL)}
        src={webformatURL}
        alt={tags} />);
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired,
}

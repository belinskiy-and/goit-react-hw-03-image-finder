import Box from 'components/Box';
import PropTypes from 'prop-types';

export const IdleCaption = ({caption}) => {
    return (
        <Box
              m={0}
              pt={30}
              fontSize="24px"              
              fontWeight="bold"
              textAlign="center"
              as="p"
            >
              {caption}
            </Box>
    );
}

export default IdleCaption;

Error.propTypes = {  
    caption: PropTypes.string.isRequired,      
};
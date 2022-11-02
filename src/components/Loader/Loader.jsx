import Box from 'components/Box';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" pt={10}>
            <ThreeDots color="#303f9f" height={80} width={80} />
        </Box>
    );
}

export default Loader;
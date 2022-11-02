import { Component } from "react";
import PropTypes from 'prop-types';
import { ModalBox, ModalContainer } from './Modal.styled';

class Modal extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.onEscapePress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onEscapePress);
    }

    onEscapePress = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
    
    render() {
        return (
            <ModalContainer onClick={this.onBackdropClick}>
                <ModalBox>
                    <img src={this.props.imageURL} alt="Full version" />
                </ModalBox>
            </ModalContainer>
        );
    }
}

export default Modal;

Modal.propTypes = {  
    onClose: PropTypes.func.isRequired,
    imageURL: PropTypes.string.isRequired,
};
import styled from 'styled-components'
import Error from '../../../resources/error.png'

const StyledContainer = styled.div`
    position: relative;
    width: ${props => props.width || '280px'};
`
const StyledInput = styled.input`
    background-color: #616161;
    border: none;
    font-size: 14px;
    text-indent: 20px
    position: relative;
    width: 100%;
    height: 34px;
    color: #fff;
    padding: 0 0 0 15px;
`
const StyledError = styled.div`
    width: 34px;
    height: 34px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    background-image: url(${Error});
    background-repeat: no-repeat;
    background-position: center center;
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => props.error ? 1 : 0};
`

export { StyledContainer, StyledInput, StyledError }

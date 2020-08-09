import styled from 'styled-components'

const Selector = styled.select`
    background-color: ${props => props.error ? '#FF5050' : '#616161'};
    height: 34px;
    font-size: 13px;
    width: ${props => props.width};
    color: #fff;
    padding-left: 10px;
    margin: ${props => props.margin};
    border: none;
    transition: all 0.5s ease-in-out;
`
const Option = styled.option`
    padding:0 2px 1px;
    background-color: #fff;
    color: #000
`
export { Selector, Option }

import styled from "@emotion/styled";

const Touchable = styled.div<{onClick?: ()=> void}>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding:0.5rem;
    cursor: pointer;

    transition: background-color 0.1s ease-in-out;
    &:hover{
        background-color:${({onClick})=> onClick ? "grey" :"while"} ;
    }
`
export default Touchable;
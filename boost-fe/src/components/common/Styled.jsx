import {styled} from "styled-components";

// Header
export const HeadContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center; 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding-bottom: 10px;
`
export const logo = styled.img`
    width: 137px;
    height: 48px;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
`
export const Button = styled.button`
    width: 200px;
    height: 45px;
    font-size : 16px;
    text-align: center;
    background-color: #282828;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; 
    right: 20px;
    margin-right: 180px;
`

// Search
export const ButtonContainer = styled.div`
    display : flex;
    justify-content: center;
    background-color : #ffffff;
    position: absolute;
    margin: 100px 180px;
    top: 80px;
    left: 0px;
    z-index: 10;
`;

export const ToggleButton = styled.button`
    width: auto;
    display: inline-block;
    height: 45px;
    font-size: 14px;
    background-color: ${(props) => (props.active ? "#1f1f1f" : "#e0e0e0")};
    color: ${(props) => (props.active ? "white" : "black")};
    border: none;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
        background-color: #3a3a3a;
        color: white;
    }
`

export const Dropdown = styled.select`
    height: 45px;
    width : 160px;
    font-size: 14px;
    color:black;
    padding: 5px 10px;
    background-color: #FAFAFA;
    border: 1px solid #282828;
    border-radius: 6px;
    margin-left: 20px;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fafafa;
    border-radius: 6px;
    padding: 5px 10px;
    margin-left: 10px;
    width: 1153px;
    max-width: 100%;
`;

export const SearchBar = styled.input`
    width: 100%;
    padding: 10px 10px 10px 30px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

// Button
export const MoreButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: bold;
    color: #282828;
    background-color: #FFFFFF;
    border: 1px solid #282828;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    width: 1460px;
    height: 50px;

    &:hover {
        background-color: #FAFAFA;
    }

    &:active {
        transform: scale(0.95);
    }
`;
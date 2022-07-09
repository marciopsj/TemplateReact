import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    bottom: 0;
    left: 30px;
    width: 210px;
    height: 210px;    
    border-radius: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 33.6px 24.5px;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        strong {
        
            font-weight: 500;
        }
    }

    
`;

export const Chart = styled.div`
    margin-top: 28px;
`;

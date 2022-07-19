import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    
    left: 65px;
    background-color: #DAAAFF;
    color: #fff;
    width: 154px;
    height: 77px;
    border-radius: 12px;    
    text-align: left;
    padding: 11px;
    overflow: hidden;

    animation: showCard 0.5s linear forwards;
    top: 75px;
    opacity: 0;

    small {
        font-size: 15px;
    }

    div {
        display: flex;
        align-items: center;
        

        span {
            font-size: 20px;
            font-weight: 400;
            margin-right: 5px;
        }
        
    }

    i {
        width: 154px;
        height: 77px;
        position: absolute;
        border-radius: 50px;

        &.circle1 {
            left: 104px;
            top: -20px;
            background: rgba(255, 255, 255, 0.3);
        }

        &.circle2 {
            left: 81px;
            bottom: -50px;
            background: rgba(255, 255, 255, 0.15);
            transform: rotate(45deg);
        }

        &.circle3 {
            top: -54px;
            left: 47px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transform: rotate(-72deg);
        }
        
        
    }

    @keyframes showCard {

        to {
            top: 105px;
            opacity: 1;
        }
    }
    
` 
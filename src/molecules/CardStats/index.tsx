import * as S from './styles';
import {CgArrowLongLeft} from 'react-icons/cg';
import {CgArrowLongRight} from 'react-icons/cg';
import { useCallback } from 'react';


const CardStats = () => {
    const amountBars = Array.from(Array(12).keys());    
    const fillZero = useCallback((value: number) => {
        const number = (value + 1).toString();

        return number.padStart(2, "0");
    }, []);
    
    return (
        <S.Container>
            <div> 
                <CgArrowLongLeft />
                <strong>Stats</strong>
                <CgArrowLongRight />
            </div>

            <S.Chart>{amountBars.map((item) => (
                <div key={String(item)}>
                    <div>
                        <span></span>
                    </div>
                    <small>{fillZero(item)}</small>
                </div>
            ))}
            </S.Chart>            
        </S.Container>

    );
}

export default CardStats;
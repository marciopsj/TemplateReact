import * as S from './styles';
import {CgArrowLongLeft} from 'react-icons/cg';
import {CgArrowLongRight} from 'react-icons/cg';


const CardStats = () => {
    const amountBars = Array.from(Array(12).keys());     
    return (
        <S.Container>
            <div> 
                <CgArrowLongLeft />
                <strong>Stats</strong>
                <CgArrowLongRight />
            </div>

            <S.Chart>{amountBars.map((item) => (
                <span>{item + 1}</span>
            ))}
            </S.Chart>            
        </S.Container>

    );
}

export default CardStats;
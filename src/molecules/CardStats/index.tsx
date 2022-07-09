import * as S from './styles';
import {CgArrowLongLeft} from 'react-icons/cg';
import {CgArrowLongRight} from 'react-icons/cg';


const CardStats = () => {
    return (
        <S.Container>
            <div> 
                <CgArrowLongLeft />
                <strong>Stats</strong>
                <CgArrowLongRight />
            </div>

            <S.Chart>teste</S.Chart>            
        </S.Container>

    );
}

export default CardStats;
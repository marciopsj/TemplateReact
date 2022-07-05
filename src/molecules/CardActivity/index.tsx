import * as S from './styles';
import {TbArrowBigTop} from 'react-icons/tb';

const CardActivity = () => (
    <S.Container>
        <small>Activity</small>
        <div>
            <span>18</span>
            <TbArrowBigTop size={20} />
        </div>
    </S.Container>
);

export default CardActivity;
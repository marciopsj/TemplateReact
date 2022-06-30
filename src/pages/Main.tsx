import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/frontend'
import * as S from './Styles'



function Main() {
  return (
  <Frontend>

    <S.Container>
      <div>
        <h1>Design driven development of your web products</h1>
        <h6>We are a full service digital agency that builds immesive user experience.</h6>
        <ButtonContact></ButtonContact>
      </div>
      <div>Coluna 2</div>
    </S.Container>
        
  </Frontend>
  );
}

export default Main

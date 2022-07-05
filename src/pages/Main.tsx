import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/frontend'
import * as S from './Styles'

import HeroHeaderImage from '../assets/hero-header-image.png'
import CardActivity from '../molecules/CardActivity';



function Main() {
  return (
  <Frontend>

    <S.Container>
      <div>
        <h1>Design driven development of your web products</h1>
        <h6>We are a full service digital agency that builds immesive user experience.</h6>
        <ButtonContact />
      </div>
      <S.ColumnImage>
        <CardActivity />
        <img src={HeroHeaderImage} alt="Uma mulher fazendo pesquisa no tablet" />         
      </S.ColumnImage>
    </S.Container>
        
  </Frontend>
  );
}

export default Main

import { Container } from 'react-bootstrap';
import ProfileBox from '../../Components/ProfileBox/Index';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';
import Properties from '../../Components/Properties/Index';
import { UserProfileStyled } from './style';

function Index() {
  return (
    <UserProfileStyled>
    <SocialFooter/>
    <Container>
    <ProfileBox/>
    <Properties/>
    </Container>
    </UserProfileStyled>
  )
}

export default Index
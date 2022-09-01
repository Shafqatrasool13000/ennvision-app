
import { StyledContainer } from './style';
import searchIcon from '../../assets/icons/ic_search(1).svg';
import notificationIcon from '../../assets/icons/ic_notification.svg';
import avatar from '../../assets/icons/ic_user_role.svg'; import flag from '../../assets/icons/ic_pakistan.svg';
import { Container } from 'react-bootstrap';

function Index() {
    return (
            <Container>
        <StyledContainer>
                <img src={searchIcon} alt="" />
                <img src={notificationIcon} alt="" />
                <img src={flag} alt="flag" />
                <p className="name ms-2">Hi, Adnan</p>
                <img src={avatar} alt="" />
         </StyledContainer>
            </Container>
    );
}

export default Index;
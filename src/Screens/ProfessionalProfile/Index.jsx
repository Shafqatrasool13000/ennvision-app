import { Container } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import { ProfessionalProfileStyled } from "./style";
import HeadingViewMore from '../../Components/HeadingViewMore/Index';
import Properties from "../../Components/Properties/Index";
import ResourcesList from "./ResourcesList";
import StoriesList from "./StoriesList";
import PostList from "./PostList";

const Index = () => {
    return (
        <ProfessionalProfileStyled>
            <Container>
                <ProfileBox />
                <HeadingViewMore title='Property Listing' listing='VIEW MORE PROPERTIES'/>
                <Properties/>
                <div className="resources-listing">
                <HeadingViewMore title='Resources Listing' listing='VIEW MORE RESOURCES' />
                <HeadingViewMore title='Post Listing' listing='VIEW MORE POST' />
                </div>
                <StoriesList/>
                <ResourcesList/>
                <PostList/>
            </Container>
        </ProfessionalProfileStyled>
    )
}

export default Index
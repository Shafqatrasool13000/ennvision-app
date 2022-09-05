import React from 'react';
import { useContext } from 'react';
import expandIcon from '../../assets/icons/ic_blog_detail_arrow.svg';
import { SidebarContext } from '../../App';
import { SidebarStyled } from './Style';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate=useNavigate();
    const {showSidebar}=useContext(SidebarContext);

    const naivgateDashboard=()=>{
        navigate('/');
    }
    const navigateHandler=(link)=>{
        navigate(link);
    }
    const sidebarData = [
        {link:'user-list',name:'User'}, {link:'professional-list',name:'Propessional'}, {link:'property-list',name:'Property'}, {link:'post-list',name:'Post'},
        {link:'story-list',name:'Story'}, {link:'newsfeed-list',name:'Newfeed'}, {link:'post-list',name:'Boost'}, {link:'request-list',name:'Request'}, 
        {link:'user-list',name:'User'}, {link:'professional-list',name:'Propessional'}, {link:'property-list',name:'Property'}, {link:'post-list',name:'Post'},
        {link:'story-list',name:'Story'}, {link:'newsfeed-list',name:'Newfeed'}, {link:'post-list',name:'Boost'}, {link:'request-list',name:'Request'}, 
    ]
    return (
        <SidebarStyled className={`${showSidebar?'d-block':'d-none'}`}>
            <p onClick={naivgateDashboard}>Dashboard</p>
            {
                sidebarData.map(({name,link}, index) => (
                    <div className='inner-container'>
                        <p className='mt-2' onClick={()=>navigateHandler(link)}>{name}</p>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <p>- Create</p>
                            <img src={expandIcon} alt="expand" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <p>- List</p>
                            <img src={expandIcon} alt="expand" />
                        </div>
                    </div>
                ))
            }
        </SidebarStyled>
    )
}

export default Sidebar
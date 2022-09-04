import React from 'react';
import { useContext } from 'react';
import expandIcon from '../../assets/icons/ic_blog_detail_arrow.svg';
import { SidebarContext } from '../../App';
import { SidebarStyled } from './Style';

const Sidebar = () => {

    const {showSidebar}=useContext(SidebarContext);

    const sidebarData = [
        'User', 'Propessional', 'Property', 'Post',
        'Story', 'Booking', 'Newfeed', 'Boost', 'Invoice', 'Reports'
    ]
    return (
        <SidebarStyled className={`${showSidebar?'d-block':'d-none'}`}>
            <p>Dashboard</p>
            {
                sidebarData.map((title, index) => (
                    <div className='inner-container'>
                        <p className='mt-2'>{title}</p>
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
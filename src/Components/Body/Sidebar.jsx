import React, { useState } from 'react';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState();

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div>
            <div className="sidebar-with-toggle">
                <div className="">
                    <div className="header-right-side-menu">
                        <a onClick={handleToggleSidebar} style={{ cursor: 'pointer' }}><i className="ti-menu text-white" aria-hidden="true" /></a>
                    </div>
                </div>
                <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                    <div id="sideMenuClose" onClick={handleToggleSidebar}>
                        <i className="ti-close" />
                    </div>
                    <ul>
                        <div className="nav-side-menu">
                            <div className="menu-list">
                                <h6>Categories</h6>
                                <ul id="menu-content" className="menu-content collapse out">
                                    <li data-toggle="collapse" data-target="#women" className="collapsed active">
                                        <a href="#">Woman wear <span className="arrow" /></a>
                                        <ul className="sub-menu collapse" id="women">
                                            <li><a href="#">Midi Dresses</a></li>
                                            <li><a href="#">Maxi Dresses</a></li>
                                            <li><a href="#">Prom Dresses</a></li>
                                            <li><a href="#">Little Black Dresses</a></li>
                                            <li><a href="#">Mini Dresses</a></li>
                                        </ul>
                                    </li>
                                    <li data-toggle="collapse" data-target="#man" className="collapsed">
                                        <a href="#">Man Wear <span className="arrow" /></a>
                                        <ul className="sub-menu collapse" id="man">
                                            <li><a href="#">Man Dresses</a></li>
                                            <li><a href="#">Man Black Dresses</a></li>
                                            <li><a href="#">Man Mini Dresses</a></li>
                                        </ul>
                                    </li>
                                    <li data-toggle="collapse" data-target="#kids" className="collapsed">
                                        <a href="#">Children <span className="arrow" /></a>
                                        <ul className="sub-menu collapse" id="kids">
                                            <li><a href="#">Children Dresses</a></li>
                                            <li><a href="#">Mini Dresses</a></li>
                                        </ul>
                                    </li>
                                    <li data-toggle="collapse" data-target="#bags" className="collapsed">
                                        <a href="#">Bags &amp; Purses <span className="arrow" /></a>
                                        <ul className="sub-menu collapse" id="bags">
                                            <li><a href="#">Bags</a></li>
                                            <li><a href="#">Purses</a></li>
                                        </ul>
                                    </li>
                                    <li data-toggle="collapse" data-target="#eyewear" className="collapsed">
                                        <a href="#">Eyewear <span className="arrow" /></a>
                                        <ul className="sub-menu collapse" id="eyewear">
                                            <li><a href="#">Eyewear Style 1</a></li>
                                            <li><a href="#">Eyewear Style 2</a></li>
                                            <li><a href="#">Eyewear Style 3</a></li>
                                        </ul>
                                    </li>
                                    <li data-toggle="collapse" data-target="#footwear" className="collapsed">
                                        <a href="#">Footwear <span className="arrow" /></a>
                                        <ul className="sub-menu collapse" id="footwear">
                                            <li><a href="#">Footwear 1</a></li>
                                            <li><a href="#">Footwear 2</a></li>
                                            <li><a href="#">Footwear 3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="catagories-side-menu">


            </div>
        </div>
    )
}

export default Sidebar
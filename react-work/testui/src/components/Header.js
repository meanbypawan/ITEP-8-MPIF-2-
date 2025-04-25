import { Component } from "react";

class Header extends Component {
    render() {
        return <>
            <header class="header_section">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg custom_nav-container">
                        <a class="navbar-brand" href="index.html">
                            <span>
                                Healet
                            </span>
                        </a>
                        <div class="" id="">

                            <div class="custom_menu-btn">
                                <button onclick="openNav()">
                                    <span class="s-1"> </span>
                                    <span class="s-2"> </span>
                                    <span class="s-3"> </span>
                                </button>
                                <div id="myNav" class="overlay">
                                    <div class="overlay-content">
                                        <a href="index.html">Home</a>
                                        <a href="about.html">About</a>
                                        <a href="shop.html">Shop</a>
                                        <a href="blog.html">Blog</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>
            <section class="slider_section position-relative">
                <div class="slider_bg_box">
                    <img src="images/slider-bg.jpg" alt="" />
                </div>
                <div class="slider_bg"></div>
                <div class="container">
                    <div class="col-md-9 col-lg-8">
                        <div class="detail-box">
                            <h1>
                                Best Jewellery
                                <br /> Collection
                            </h1>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem
                            </p>
                            <div>
                                <a href="" class="slider-link">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    }
}
export default Header;
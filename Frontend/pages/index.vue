<!--
    Home page
-->
<template>
    <div>
    <head>
      <meta name="description" content="Home page of VenTour - Discover the best investment opportunities.">
    </head>
    <main>
        <section class="responsive-section1">
            <div class="column-container">
                <div class="column-left2">
                    <div class="content__container">
                        <ul class="content__container__list">
                            <li class="content__container__list__item">Innovation !</li>
                            <li class="content__container__list__item">Power !</li>
                            <li class="content__container__list__item">Potential !</li>
                            <li class="content__container__list__item">VenTour !</li>
                        </ul>
                    </div>
                    <h2> Fly with us to a journey of growth!</h2>
                    <p class="section-text4">Transforming the investment landscape and fueling innovation.<br>
                        <br>Our focus is your success!
                    </p>
                    <router-link to="/aboutus" class="sec-tex">
                        <p class="section-text41">LEARN MORE</p>
                    </router-link>
                </div>
                <div class="column-right">
                    <div class="row-container">
                        <div class="row-top1">
                            <a href="#numbers"><img class="firstimg3" src="~/assets/img/logo_transparent3.png" alt ="In 3 continents"></a>
                            <a href="#areasrep"><img class="firstimg2" src="~/assets/img/logo_transparent2.png" alt ="4 investment areas"></a>
                        </div>
                        <div class="row-bottom1">
                            <img class="firstimg" src="~/assets/img/logo_transparent.png" alt ="We are growth">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="responsive-section">
            <div v-if="!isMobile">
                <desktop>
                    <div class="column-container">
                        <div class="column-left">
                            <h1 class="u-section-text">why ventour</h1>
                            <h2>What do we represent?</h2>
                            <p>"Ven" meaning "come"...Come in a tour with us!...At VenTour, we embody
                                the
                                spirit of innovation and embrace the limitless potential of entrepreneurial ventures. As a
                                venture
                                capital firm, we specialize in providing crucial support and funding to early-stage and
                                high-growth
                                companies that are reshaping industries and driving forward societal progress. <br> <br>We
                                understand
                                that
                                the journey of transforming groundbreaking ideas into successful businesses can be
                                challenging,
                                which is why we strive to be more than just financial backers. Our mission is to be your
                                strategic
                                partner, offering not only capital but also expertise, guidance, and an extensive network of
                                industry connections.</p>
                            <div class="sec-butt">
                                <router-link to="/contact">
                                    <a class="us-button">join us</a>
                                </router-link>
                            </div>
                        </div>

                        <div class="column-right">
                            <div class="row-container">
                                <div class="row-top">
                                    <div class="card card11">
                                        <img class="icon-circle" src="~/assets/img/innovation.png" alt="Innovation">
                                        <h2 class="titleofcard">Empowering Innovation</h2>
                                        <p>Innovation is at the core of everything we do. We actively
                                            seek
                                            out the most innovative and disruptive ideas across a wide range of
                                            industries,
                                            from technology and healthcare to energy and beyond. </p>
                                    </div>
                                    <div class="card card11">
                                        <img class="icon-circle" src="~/assets/img/fuel.png" alt="Growth">
                                        <h2 class="titleofcard">Fuelling growth</h2>
                                        <p>We believe in the transformative power of ideas.We are a
                                            leading
                                            venture capital firm dedicated to fueling the growth of groundbreaking
                                            startups
                                            and empowering them to reach their full potential.</p>
                                    </div>
                                </div>
                                <div class="row-bottom">
                                    <div class="card card11">
                                        <img class="icon-circle" src="~/assets/img/unlock.png" alt="Potential">
                                        <h2 class="titleofcard">Unlocking potential</h2>
                                        <p>We partner with visionary entrepreneurs and startups at
                                            every
                                            stage of their journey, providing financial support, but also
                                            invaluable expertise, resources, and a vast network of industry connections.</p>
                                    </div>
                                    <div class="card card11">
                                        <img class="icon-circle" src="~/assets/img/worldwide.png" alt="Global reach">
                                        <h2 class="titleofcard">Global Reach, Local Impact</h2>
                                        <p>We are rooted in
                                            startups in every country. Our experts
                                            combine deep industry knowledge with a passion for supporting entrepreneurs.
                                            We create a dynamic environment that drives
                                            positive change. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </desktop>
            </div>
            <div v-else>
                <mobile>
                    <div class="column-container-Mobile">
                        <div class="column-left-Mobile">
                            <h1 class="u-section-text-mobile">why ventour</h1>
                            <h2>What do we represent?</h2>
                            <p>"Ven" meaning "come"...Come in a tour with us!...At VenTour, we embody
                                the
                                spirit of innovation and embrace the limitless potential of entrepreneurial ventures. As a
                                venture
                                capital firm, we specialize in providing crucial support and funding to early-stage and
                                high-growth
                                companies that are reshaping industries and driving forward societal progress. <br> <br>We
                                understand
                                that
                                the journey of transforming groundbreaking ideas into successful businesses can be
                                challenging,
                                which is why we strive to be more than just financial backers. Our mission is to be your
                                strategic
                                partner, offering not only capital but also expertise, guidance, and an extensive network of
                                industry connections.</p>
                            <div class="sec-butt2">
                                <router-link to="/contact">
                                    <a class="us-button">join us</a>
                                </router-link>
                            </div>
                        </div>
                        <div class="columnMobile">
                            <div class="card card11Mobile">
                                <img class="icon-circle-mobile" src="~/assets/img/innovation.png" alt="Innovation">
                                <h2 class="titleofcardMobile">Empowering Innovation</h2>
                                <p>Innovation is at the core of everything we do. We actively
                                    seek
                                    out the most innovative and disruptive ideas across a wide range of
                                    industries,
                                    from technology and healthcare to energy and beyond. </p>
                            </div>
                            <div class="card card11Mobile">
                                <img class="icon-circle-mobile" src="~/assets/img/fuel.png" alt="Growth">
                                <h2 class="titleofcardMobile">Fuelling growth</h2>
                                <p>We believe in the transformative power of ideas.We are a
                                    leading
                                    venture capital firm dedicated to fueling the growth of groundbreaking
                                    startups
                                    and empowering them to reach their full potential.</p>
                            </div>
                            <div class="card card11Mobile">
                                <img class="icon-circle-mobile" src="~/assets/img/unlock.png" alt="Potential">
                                <h2 class="titleofcardMobile">Unlocking potential</h2>
                                <p>We partner with visionary entrepreneurs and startups at
                                    every
                                    stage of their journey, providing financial support, but also
                                    invaluable expertise, resources, and a vast network of industry connections.</p>
                            </div>
                            <div class="card card11Mobile">
                                <img class="icon-circle-mobile" src="~/assets/img/worldwide.png" alt="Global reach">
                                <h2 class="titleofcardMobile">Global Reach, Local Impact</h2>
                                <p>We are rooted in
                                    startups in every country. Our experts
                                    combine deep industry knowledge with a passion for supporting entrepreneurs.
                                    We create a dynamic environment that drives
                                    positive change. </p>
                            </div>
                        </div>
                    </div>
                </mobile>
            </div>
        </section>
        <section id="numbers">
            <div class="midl-container">
                <h4 class="subtitle-midl">A wide investment map</h4>
                <div class="midl-list">
                    <div class="repeater">
                        <div class="first-rep">
                            <img class="rep-icon" src="~/assets/img/europe.png" alt="Europe">
                            <h7 class="number-text">EUROPE</h7>
                            <div class="text-container-list">
                                <h8 class="text-up">strategically allocated 60% of our investments</h8>
                                <p class="text-down">Committed to fueling innovation in
                                    Europe, where we have strategically allocated 60% of our investments. With a thriving
                                    startup ecosystem and a rich pool of talent, Europe offers immense growth potential for
                                    entrepreneurs and investors alike.</p>
                            </div>
                        </div>
                        <div class="first-rep2">
                            <img class="rep-icon" src="~/assets/img/asia.png"  alt="Asia">
                            <h7 class="number-text">ASIA</h7>
                            <div class="text-container-list">
                                <h8 class="text-up">dedicated 30% of our investments to this region</h8>
                                <p class="text-down">We recognize the immense opportunities in Asia's dynamic market. That's
                                    why we have dedicated 30% of our investments to this region, capitalizing on the rapid
                                    technological advancements and the unprecedented growth potential across various
                                    industries.</p>
                            </div>
                        </div>
                        <div class="first-rep3">
                            <img class="rep-icon" src="~/assets/img/america.png"  alt="South America">
                            <h7 class="number-text">SOUTH AMERICA</h7>
                            <div class="text-container-list">
                                <h8 class="text-up">10% of our portfolio dedicated to this vibrant
                                    region</h8>
                                <p class="text-down">Unlocking the untapped potential of South America is a key focus for
                                    our venture capital investments. With 10% of our portfolio dedicated to this vibrant
                                    region, we aim to support visionary entrepreneurs and drive innovation in an emerging
                                    market filled with promising opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="best-comp">
            <h4 class="subtitle-midl">Our Top 4 Investments</h4>
            <div class="container-top4">
                <div class="box1">
                    <div class="imgBx">
                        <img src="~/assets/img/Dell.png" alt="Dell Logo">
                    </div>
                    <div class="content">
                        <div>
                            <p>Giving light to technology with one of the best trending companies in todays' market.
                            </p>
                            <router-link to="/companies/27" class="read-more">
                                <h2>Read More</h2>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="box1">
                    <div class="imgBx">
                        <img src="~/assets/img/nike.png" alt="Nike Logo">
                    </div>
                    <div class="content">
                        <div>
                            <p>The top leading company in sportswear trusted on us to become the most wanted one.
                            </p>
                            <router-link to="/companies/33" class="read-more">
                                <h2>Read More</h2>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="box1">
                    <div class="imgBx">
                        <img src="~/assets/img/canadiansolar.png" alt="CanadianSolar Logo">
                    </div>
                    <div class="content">
                        <div>
                            <p>Producing power from the support they gained from us and leading the energy market.
                            </p>
                            <router-link to="/companies/38" class="read-more">
                                <h2>Read More</h2>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="box1">
                    <div class="imgBx">
                        <img src="~/assets/img/Cigna.png" alt="Cigna Logo">
                    </div>
                    <div class="content">
                        <div>
                            <p>Being your insurance and health companion in international markets just like us are for our
                                companies.
                            </p>
                            <router-link to="/companies/24" class="read-more">
                                <h2>Read More</h2>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="areasrep">
            <h4 class="subtitle-midl">Leading in 4 directions</h4>
            <div v-if="!isMobile">
                <desktop>
                    <div class="row-areas">
                        <AreaHome v-for="area of Allareas" :name="area.name" :p1="area.p1" :ph="area.ph" :p2="area.p2"
                            :link="'/areas/' + area.id" />
                    </div>
                </desktop>
            </div>
            <div v-else>
                <mobile>
                    <div class="column">
                        <AreaHome v-for="area of Allareas" :name="area.name" :p1="area.p1" :ph="area.ph" :p2="area.p2"
                            :link="'/areas/' + area.id" />
                    </div>
                </mobile>
            </div>


        </section>
    </main>
</div>
</template>

<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: Allareas } = await useFetch(useRuntimeConfig().public.serverURL + '/areas')
</script>

<script>

//import { reactive } from 'vue';

const searchText = ref("");
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    methods: {
        detectMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
        },
    },
    mounted() {
        this.isMobile = this.detectMobile();
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".search")) {
                this.isSearchExpanded = false;
            }
        });
    },
};
</script>


<style>
/*Intro Home Page Style*/
.responsive-section1 {
    background-color: #d9f3f3;
    display: flex;
    justify-content: center;
}

.responsive-section {
    display: flex;
    justify-content: center;
}

.column-container {
    margin-right: 10%;
    flex-direction: row;
    width: 100%;
    display: flex;
}

.column-container-Mobile {
    flex-direction: column;
}

.column-right {
    width: 50%;
}

.row-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.row-top {
    gap: 5%;
    padding: 20px;
    margin-bottom: 5px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.row-bottom {
    gap: 5%;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 768px) {

    /* Adjust styles for screens up to 768px width */
    .row-top,
    .row-bottom {
        flex-wrap: wrap;
        justify-content: center;
    }

    .row-top>*,
    .row-bottom>* {
        flex-basis: 100%;
    }
}


.row-top1,
.row-bottom1 {
    gap: 5%;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}

.card {
    width: 40%;
    background-color: white;
    padding: 10px;
    flex-basis: 48%;
}

.card11 {
    background-color: rgb(15, 108, 126);
    margin-bottom: 30px;
    font-size: 18px;
    margin: -10px auto 0 0;
}

.titleofcard {
    font-size: 20px;
    padding-left: 10%;
    color: #d9f3f3;
}

.card11 p {
    color: #d9f3f3;
    padding-left: 10%;
    padding-right: 10%;
}

/* Media Query for smaller screens */
@media screen and (max-width: 768px) {
    .column-container {
        flex-direction: column;
    }

    .column-left,
    .column-right {
        width: 100%;
        padding: 0;
    }

    .card {
        flex-basis: 100%;
        margin-bottom: 10px;
    }
}

.content__container {
    font-weight: 600;
    overflow: hidden;
    height: 44px;
    position: relative;
}

.content__container__text {
    font-family: sans-serif;
    font-size: 30px;
    display: inline;
    float: left;
    margin: 0;
}

/* Media Query for phones */
@media screen and (max-width: 480px) {
    .content {
        font-size: 20px;
        line-height: 30px;
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
    }

    .content2 {
        width: 60%;
        font-size: 60px;
        top: 80px;
        height: 100px;
        font-size: 25px;
        display: block;
        margin: 0 auto;
    }

    .content__container {
        height: 32px;
        padding: 0 16px;
        display: block;
    }

    .content__container__text {
        font-size: 16px;
    }
}

.content__container__list {
    margin-top: 0;
    text-align: left;
    list-style: none;
    font-size: 42px;
    font-family: sans-serif;
    -webkit-animation-name: change;
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    animation-name: change;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

.content__container__list__item {
    line-height: 40px;
    margin: 0;
}

@-webkit-keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-webkit-keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

@-o-keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-o-keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

@-moz-keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-moz-keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

@keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

.section-text4 {
    width: 30%;
    padding-right: 15%;
    font-size: 24px;
    line-height: 120%;
    z-index: 3;
}

.section-text41 {
    padding-right: 15%;
    font-size: 24px;
    line-height: 120%;
    z-index: 3;
}

.section-text41:hover {
    color: #225160;
}

.firstimg {
    position: relative;
    width: 50%;
    left: 35%;
}

.firstimg2 {
    top: 69%;
    cursor: pointer;
    position: relative;
    left: 26%;
    width: 100%;
    height: auto;
    z-index: 2;
}

.firstimg3 {
    top: 69%;
    cursor: pointer;
    position: relative;
    left: 13%;
    width: 100%;
    height: auto;
    z-index: 2;
}

.column-left2 {
    padding-left: 5%;
    padding-top: 10%;
    width: 50%;
    padding-right: 30px;
}

.column-left2 p {
    width: 120%;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 200;
    line-height: 120%;
}

.column-left2 h2 {
    font-family: sans-serif;
    font-size: 60px;
    font-weight: 700;
}

/*Section two*/

.left-layout {
    font-family: 'Open Sans', sans-serif;
    position: relative;
    flex: 1;
    max-width: 100%;
    padding: 15% 0% 0 30%;
    color: rgb(10, 10, 10);
}

.u-section-text {
    color: #1e9ec9;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 1000;
}

.u-section-text-mobile {
    color: #1e9ec9;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 1000;
    padding-left: 5%;
}

.column-left {
    margin-left: 10%;
    padding-top: 6%;
    width: 50%;
}

.column-left h2 {
    font-family: sans-serif;
    font-size: 40px;
    font-weight: 700;
}

.column-left p {
    width: 70%;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 200;
    line-height: 120%;
    padding-bottom: 2%;
}

.column-left-Mobile {
    padding-top: 6%;
    width: 100%;
}

.column-left-Mobile h2 {
    font-family: sans-serif;
    font-size: 40px;
    font-weight: 700;
    padding-left: 5%;
}

.column-left-Mobile p {
    width: 90%;
    padding-left: 5%;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 106%;
    padding-bottom: 2%;
}

.columnMobile {
    flex-direction: column;
    padding-top: 18%;
    padding-left: 5%;
}

.card11Mobile {
    background-color: rgb(15, 108, 126);
    font-size: 15px;
    width: 90%
}

.titleofcardMobile {
    font-size: 17px;
    color: #d9f3f3;
    padding-left: 10%;
    padding-right: 10%;
}

.card11Mobile p {
    color: #d9f3f3;
    padding-left: 10%;
    padding-right: 10%;
}

.u-section-text3 {
    line-height: 120%;
    font-size: 20px;
    margin: 28px 0 0;
}

.sec-tex p {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    font-size: 16px;
    color: rgb(11 11 11);
}

.sec-butt2 {
    padding-left: 10%;
    padding-top: 10%;
}

.sec-butt2 a {
    text-decoration: none;
}

.sec-butt a {
    text-decoration: none;
}

.us-button {
    position: relative;
    text-decoration: none;
    border-style: none;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.125rem;
    letter-spacing: 2px;
    background-image: none;
    margin-left: 20%;
    padding: 15px 46px 15px 45px;
    color: #060606 !important;
    background-color: #d9f3f3 !important;
    border-radius: 50px !important;
}

.us-button:hover {
    color: #060606 !important;
    background-color: rgb(15, 108, 126) !important;
}

.icon-circle {
    height: 75px;
    width: 75px;
    background-image: #d9f3f3;
    margin: 0 auto 0 0;
}

.icon-circle-mobile {
    height: 60px;
    width: 65px;
    background-image: #d9f3f3;
    margin: 0 auto 0 0;
}

/*Section three*/
#numbers {
    width: 100%;
    height: 40%;
    color: #111111;
    position: relative;
    text-align: left;
}

.midl-container {
    background-image: url("~/assets/img/wepik-export-202306111838401U6j.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: static;
    margin: 0 auto;
    display: block;
    min-height: 150%;
}

@media (max-width: 767px) {

    /* Styles for mobile devices */
    .midl-container {
        background-size: contain;
    }

    .midl-container {
        background-image: none;
    }
}

.midl-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 2;
    z-index: -1;
}

.repeater {
    gap: 10%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -20px;
}

.first-rep {
    border-radius: 5% !important;
    position: relative;
    max-width: 28% !important;
    transition-duration: inherit;
    max-width: 80%;
    margin-left: 10%;
    background-color: rgb(212, 220, 228, 0.8);
}

.first-rep2 {
    border-radius: 5% !important;
    position: relative;
    max-width: 28% !important;
    transition-duration: inherit;
    max-width: 80%;
    margin-left: 20%;
    background-color: rgb(212, 220, 228, 0.8);
}

.first-rep3 {
    border-radius: 5% !important;
    position: relative;
    max-width: 28% !important;
    transition-duration: inherit;
    max-width: 80%;
    margin-left: 40%;
    background-color: rgb(212, 220, 228, 0.8);
}

.rep-icon img {
    width: 80px;
    height: 80px;
    background-image: none;
    margin: 23px auto 0 0;
    padding: 16px;
}

.text-container-list {
    margin-bottom: 5%;
    text-align: left;
}

.number-text {
    font-weight: 700;
    font-size: 20px;
    font-family: sans-serif !important;
    margin-bottom: 20%;
    word-wrap: break-word;
    position: relative;
    color: rgb(15, 108, 126);
}

.text-up {
    font-size: 20px;
    margin-top: 2%;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    font-family: sans-serif !important;
    word-wrap: break-word;
    position: relative;
    line-height: 1.2;
    padding-right: 10%;
    padding-left: 10%;
    display: inline-block;
}

.text-down {
    font-size: 18px;
    margin: 10px 0 0;
    word-wrap: break-word;
    position: relative;
    padding-right: 10%;
    padding-left: 10%;
}

@media (max-width: 768px) {
    .text-down {
        font-size: 15pt;
        margin: 10px 0 0;
        word-wrap: break-word;
        position: relative;
        padding-right: 10%;
        padding-left: 10%;
    }
}

.subtitle-midl {
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin: 12px 0 0;
    position: relative;
    max-width: 100%;
    padding: 2% 30% 0 12%;
}

.midl-list {
    margin-top: 45px;
    padding-bottom: 2%;
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    position: relative;
}

/*Section top 4*/

.container-top4 {
    gap: 2%;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin-bottom: 2%;
}

.container-top4 .box1 {
    position: relative;
    width: 18%;
    height: 280px;
    background: #d9f3f3;
    transition: 0.5s;
    transform-style: preserve-3d;
    overflow: hidden;
    margin-top: 45px;
}

/* Add a media query for smaller screens */
@media (max-width: 768px) {
    .subtitle-midl {
        font-family: 'Open Sans', sans-serif;
        font-size: 24pt;
        font-display: bold;
        margin: 12px 0 0;
        position: relative;
        max-width: 100%;
        padding: 2% 10% 0 10%;
    }

    .repeater {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: -20px;
        flex-direction: column;
        padding-right: 8%;
        gap: 20px;
    }

    .repeater>div {
        margin-bottom: 20px;
        /* Margine inferiore tra i box */
    }
}

.container-top4:hover .box1 {
    transform: rotateY(25deg);
}

.container-top4 .box1:hover~.box1 {
    transform: rotateY(-25deg);
}

.container-top4 .box1:hover {
    transform: rotateY(0deg) scale(1.25);
    z-index: 1;
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
}

.container-top4 .box1 .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.container-top4 .box1 .imgBx:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #225160, #60888d);
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
    mix-blend-mode: multiply;
}

.container-top4 .box1:hover .imgBx:before {
    opacity: 1;
}

.container-top4 .box1 .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container-top4 .box1 .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    padding: 20px;
    align-items: flex-end;
    box-sizing: border-box;
}

.container-top4 .box1 .content h2 {

    color: #fff;
    transition: 0.5s;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 20px;
    transform: translateY(200px);
    transition-delay: 0.3s;
}

.read-more {
    text-decoration: underline;
    color: #1e9ec9;
}

.container-top4 .box1:hover .content h2 {
    transform: translateY(0px);
}

.container-top4 .box1 .content p {
    color: #fff;
    transition: 0.5s;
    font-size: 14px;
    transform: translateY(200px);
    transition-delay: 0.4s;
}

.container-top4 .box1:hover .content p {
    transform: translateY(0px);
}

@media (max-width: 768px) {
    .container-top4 .box1 {
        width: 70%;
        /* Adjust the width to fit the container */
        margin: 0 auto;
        /* Center the box horizontally */
        margin-top: 20px;
        /* Adjust the top margin */
        margin-bottom: 20px;
        /* Add bottom margin */
    }

    .container-top4 .box1 .imgBx img {
        position: relative;
        object-fit: contain;
    }

    .container-top4 .box1 .content h2 {

        color: #fff;
        transition: 0.5s;
        text-transform: uppercase;
        font-size: 12pt;
        transform: translateY(200px);
        transition-delay: 0.3s;
    }

    .container-top4 .box1 .content p {
        color: #fff;
        transition: 0.5s;
        font-size: 8pt;
        transform: translateY(200px);
        transition-delay: 0.4s;
    }
}


@media (max-width: 768px) {

    .firstimg2,
    .firstimg3 {
        width: 30%;
        left: 35%;
    }
}


@media screen and (max-width: 480px) {
    .content__container {
        height: auto;
        padding: 10px;
    }

    .content__container__text {
        font-size: 20px;
        float: none;
        display: block;
        text-align: center;
    }

    .content__container__list {
        font-size: 28px;
        text-align: center;
    }

    .content__container__list__item {
        line-height: 26px;
    }
}

/* Responsive adjustments for larger screens */

@media screen and (min-width: 301px) and (max-width: 768px) {
    .content__container {
        height: auto;
        padding: 10px;
    }

    .content__container__text {
        font-size: 24px;
        float: none;
        display: block;
        text-align: center;
    }

    .content__container__list {
        width: 100%;
        padding-top: 10%;
        font-size: 16px;
        text-align: center;
    }

    .content__container__list__item {
        line-height: 30px;
    }

    .section-text4 {
        width: 100%;
    }

    .column-left p {
        width: 207%;
    }

    .column-left2 {
        padding-top: 30%;
    }

    .column-left2 h2 {
        font-size: 30px;
        width: 186%;
    }

    .column-left2 p {
        width: 186%;
    }

    .firstimg2,
    .firstimg3 {
        width: 121%;
        left: -10%;
    }

    .firstimg {
        position: relative;
        width: 73%;
        left: 15%;
    }

    .first-rep {
        border-radius: 5% !important;
        position: relative;
        max-width: 96% !important;
        transition-duration: inherit;
        max-width: 80%;
        margin-left: 6%;
    }

    .first-rep3 {
        border-radius: 5% !important;
        position: relative;
        max-width: 96% !important;
        transition-duration: inherit;
        max-width: 80%;
        margin-left: 6%;
    }

    .first-rep2 {
        border-radius: 5% !important;
        position: relative;
        max-width: 96% !important;
        transition-duration: inherit;
        max-width: 80%;
        margin-left: 6%;
    }

    .sec-butt {
        width: 171%;
    }

    .us-button {
        font-size: 16px;
        margin-right: -11%;
    }

    .row-top,
    .row-bottom {
        flex-wrap: wrap;
        gap: 5%;
        padding: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }

    .container-top4 .box1 {
        position: relative;
        width: 166px;
        height: 159px;
        background: #d9f3f3;
        transition: 0.5s;
        transform-style: preserve-3d;
        overflow: hidden;
        margin-top: 45px;
    }
}

@media screen and (max-width: 480px) {
    .homeintro {
        margin-bottom: 4%;
        /* Adjusted margin for smaller screens */
    }

    .content {
        font-size: 20px;
        /* Adjusted font size for smaller screens */
        line-height: 30px;
        /* Adjusted line height for smaller screens */
        width: 100%;
        height: 100%;
        position: relative;
    }

    .content2 {
        width: 60%;
        /* Adjusted width for smaller screens */
        font-size: 60px;
        /* Adjusted font size for smaller screens */
        top: 80px;
        /* Adjusted positioning */
        height: 100px;
        /* Adjusted height for smaller screens */
        font-size: 25px;
    }

    .content__container {
        height: 32px;
        /* Adjusted height for smaller screens */
        padding: 0 16px;
        /* Adjusted padding for smaller screens */
    }

    .content__container__text {
        font-size: 16px;
        /* Adjusted font size for smaller screens */
    }
}
</style>
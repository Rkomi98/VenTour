<template>
    <main id="back">
        <div class="info-group">
            <div class="arrow">
                <div class="arrow-left">
                    <router-link to="/consumer">
                        <img src="~/assets/img/left-arrows.png" alt="Left Arrow">
                    </router-link>
                </div>
                <router-link to="/companies">
                    <div class="arrow-right">
                        <img src="~/assets/img/right-arrows.png" alt="Right Arrow">
                    </div>

                </router-link>
            </div>

            <h1 class="name">Sustainability Investments</h1>
            <hr />
            <div class="row">
                <div class="columna">
                    <img id="area-img" src="~/assets/img/sustainability-team.png" />
                </div>
                <div class="columna2">
                    <div class="button-container" style="position: sticky; top: 0; z-index: 1;">
                        <button class="section-button" :class="{ active: activeSection === 1 }" @click="activeSection = 1">
                            <br>
                            DESCRIPTION
                        </button>
                        <button class="section-button" :class="{ active: activeSection === 2 }" @click="activeSection = 2">
                            <br>
                            PROJECTS
                        </button>
                    </div>
                    <div class="description-containera">
                        <div v-if="activeSection === 1">
                            <p2 class="description">
                                As a venture capital firm committed to sustainability, VenTour seeks to invest in companies
                                that prioritize environmental, social, and governance (ESG) considerations.
                                The firm is particularly interested in supporting innovative solutions that promote the
                                transition to a low-carbon economy, enhance resource efficiency, and reduce waste.
                                <br>
                                One area of focus for VenTour is renewable energy, including companies developing
                                technologies for solar, wind, and geothermal power.
                                The firm also seeks out opportunities in energy storage and distribution, as well as in the
                                electrification of transportation.VenTour also supports companies focused on improving
                                supply chain transparency and reducing food waste.
                            </p2>
                        </div>
                        <div v-else-if="activeSection === 2">
                            <p2 class="description">
                                Current Portfolio of the investment projects in the field of Sustainability:
                            </p2>
                            <ul class="comp-list">
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.ge.com/" target="_blank" style="text-decoration: none;">General
                                        Electric Co.</a></li>
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.iberdrola.it/" target="_blank"
                                        style="text-decoration: none;">Iberdrola SA</a></li>
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.canadiansolar.com/" target="_blank"
                                        style="text-decoration: none;">Canadian Solar, Inc. </a></li>
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.jinkosolar.com/en/" target="_blank"
                                        style="text-decoration: none;">JinkoSolar Holding Co., Ltd. </a></li>
                                <li style="list-style: none; text-decoration: none;"><a href="https://www.enelx.com/"
                                        target="_blank" style="text-decoration: none;font-size: medium;">Enel X</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        <div class="row">
            <div class="text-center">
                <p>HAPPY INVESTORS:</p>
            </div>
        </div>
        <div id="flex-container" class="testimonials">
            <div id="left-zone">
                <ul class="list">
                    <li class="item">
                        <input type="radio" id="radio_testimonial3-1" name="basic_carousel" checked="checked" />
                        <label class="label_testimonial3-1" for="radio_testimonial3-1">Canadian Solar</label>
                        <div class="content-test content_testimonial3-1">
                            <span class="picto"></span>

                            <p>"I have been investing with VenTour for years, and I can say with confidence that they are
                                one of the best in the business when it comes to sustainability. They have a clear vision of
                                the kind of world they want to help create. It's been a pleasure to be a part of their
                                journey."
                            </p>
                            <p class="testimonialFrom">Shawn Qu, Founder</p>
                            <p class="testimonialState">Guelph, Canada</p>
                        </div>
                    </li>
                    <li class="item">
                        <input type="radio" id="radio_testimonial3-2" name="basic_carousel" />
                        <label class="label_testimonial3-2" for="radio_testimonial3-2">Enel X</label>
                        <div class="content-test content_testimonial3-2">
                            <span class="picto"></span>

                            <p>"Working with VenTour has been a fantastic experience. Not only are they dedicated to
                                sustainability, but they are also incredibly knowledgeable about the latest trends and
                                technologies in the field. I feel confident that my investment is not only supporting a good
                                cause, but also in the hands of experts who know how to make it grow."</p>
                            <p class="testimonialFrom">Francesco Venturini, CEO</p>
                            <p class="testimonialState">Rome, Italy</p>
                            <br>
                        </div>
                    </li>
                    <li class="item">
                        <input type="radio" id="radio_testimonial3-3" name="basic_carousel" />
                        <label class="label_testimonial3-3" for="radio_testimonial3-3">Iberdrola SA</label>
                        <div class="content-test content_testimonial3-3">
                            <span class="picto"></span>

                            <p>"VenTour has truly shown us that investing in sustainability can be both profitable and good
                                for the planet. They have a keen eye for identifying companies that are making a real impact
                                on the environment, and their support has been instrumental in helping these businesses
                                thrive."</p>
                            <p class="testimonialFrom">Juan de Urrutia, Founder</p>
                            <p class="testimonialState">Bilbao, Spain</p>
                        </div>
                    </li>
                    <li class="item">
                        <input type="radio" id="radio_testimonial3-4" name="basic_carousel" />
                        <label class="label_testimonial3-4" for="radio_testimonial3-4">General
                            Electric Co.</label>
                        <div class="content-test content_testimonial3-4">
                            <span class="picto"></span>

                            <p>"I am so impressed with VenTour's commitment to sustainability. Their portfolio of companies
                                includes some of the most innovative and environmentally-conscious businesses I have ever
                                seen. As an investor, I am proud to be associated with a company that is making a real
                                difference in the world."</p>
                            <p class="testimonialFrom">Thomas Alva Edison, Founder</p>
                            <p class="testimonialState">Boston, MA</p>
                            <br>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="right-zone"></div>
        </div>
    </main>
</template>
        
        <!--
        <p id="description" v-html="newLineOnFullStop(person.description)"></p>
        <SmallCard :title="person.location.name" :subtitle="person.location.city" :link="'/locations/' + person.location.id" />
        -->
<script>
export default {
    data() {
        return {
            activeSection: 1,
        };
    },
};

const testimonial3Items = document.querySelectorAll('.item label');
let timer;
let index = 0;

function cycleTestimonials() {
    timer = setTimeout(() => {
        let evt;
        if (document.createEvent) {
            // If browser = IE, then polyfill
            evt = document.createEvent('MouseEvent');
            evt.initMouseEvent(
                'click',
                true,
                true,
                window,
                0,
                0,
                0,
                0,
                0,
                false,
                false,
                false,
                false,
                0,
                null
            );
        } else {
            // If Browser = modern, then create new MouseEvent
            evt = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: 20,
            });
        }
        const ele = `.${testimonialItems[index].className}`;
        const ele2 = document.querySelector(ele);
        ele2.dispatchEvent(evt);
        index++; // Increment the index
        if (index >= testimonial3Items.length) {
            index = 0; // Set it back to `0` when it reaches `3`
        }
        cycleTestimonials(); // Recursively call `cycleTestimonials()`
        document.querySelector('.testimonials').addEventListener('click', () => {
            clearTimeout(timer); // Stop the carousel when someone clicks on the div
        });
    }, 2000); // Adjust scroll speed in milliseconds
}

cycleTestimonials();
</script>

<style>
#back {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('assets/img/19449741.jpg');
    background-position-x: center;
}

.arrow {
    padding-top: 5%;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: blink 4s infinite;
}

.arrow-left img,
.arrow-right img {
    height: 10%;
    width: 10%;
}


.arrow-left a,
.arrow-right a {
    display: flex;
    align-items: center;
    justify-content: center;
}


@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.info-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.name {
    font-size: 30px;
    font-weight: bold;
}

#data-container {
    margin-top: 10px;
    font-size: 18px;
}

.role {
    margin-top: 1%;
}

.team {
    margin-top: 2%;
}

hr {
    width: 70%;
    border: 1px solid black;
    margin: 20px 0;
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 2%;
}



.columna {
    flex-basis: 50%;
    padding-left: 8%;
}

.columna2 {
    flex-basis: 50%;
    padding-right: 4%;

}

.columna.p2 {
    position: absolute;
}

#area-img {
    width: 70%;
    height: 700%;
    padding-left: 10%;

}


.description-containera {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2%;
    align-items: center;
    text-align: justify;
    padding-right: 23%;
}

.description-containera p2 {
    height: 20%;
    padding-left: 2%;
    font-size: 15pt;
    width: 40%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
}

.row2 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 2%;
}

.text-center {
    text-align: center;
    position: absolute;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #010d08;
}

.column3 {
    flex-basis: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-left: 1px solid black;
}

.column3:first-child {
    border-left: none;
}

.column3 img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.column3 p {
    font-size: 16px;
}

#description {
    padding: 0 20px 0 20px;
    font-size: 15pt;
}

.section-button {
    padding-bottom: 2.5%;
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 20px;
    font-family: monospace;
    color: #033f52;
    font-size: 1rem;
}

.section-button.active {
    font-family: monospace;
    font-size: 1rem;
    color: #033f52;
    font-weight: bold;
    background-color: rgb(212, 208, 208);
    border-radius: 10%;
}

.button-container {
    position: fixed;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2%;
    font-family: monospace;
    color: #033f52;
}

/* ============= Begin Testimonial Flexbox ============ */
#flex-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    min-height: 30%;
    max-width: 70%;
    margin-bottom: 2%;
    background-color: rgb(212, 208, 208);
    -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.12),
        2px 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 2px 2px 2px 2px rgba(18, 2, 2, 0.12);
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
}

#left-zone {
    height: 50%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}

#left-zone .list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin: auto;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.item input {
    display: none;
}

label {
    display: block;
    opacity: 0.5;
    height: 50px;
    text-align: center;
    line-height: 50px;
    position: relative;
}

label:hover {
    opacity: 0.75;
    cursor: pointer;
}

.content-test {
    position: absolute;

    right: 0;
    bottom: 0;
    opacity: 0;
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
    height: 50%;
    width: 100%;
    -webkit-transition: 0.5s ease-out;
    -o-transition: 0.5s ease-out;
    transition: 0.5s ease-out;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    pointer-events: none;
}

.content-test p {
    max-width: 50%;
    text-align: center;
}

#right-zone {
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    height: 50%;
}

input:checked~.content-test {
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
    -webkit-transition: -webkit-transform 1s;
    transition: -webkit-transform 1s;
    -o-transition: transform 1s;
    transition: transform 1s;
    transition: transform 1s, -webkit-transform 1s;
    opacity: 1;
}

@media (min-width: 480px) {
    #flex-container {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        min-height: auto;
        height: 400px;
        /* position: absolute; */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    #left-zone .list {
        border-right: 2px solid #cccccc;
    }

    .content-test {
        padding-top: 0%;
        width: 65%;
        height: 100%;
        pointer-events: auto;
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
    }

    #left-zone {
        width: 35%;
    }

    #right-zone {
        height: 100%;
        width: 65%;
    }
}

.picto {
    display: inline-block;
    width: 50px;

    height: 50px;

    overflow: hidden;
}

.picto img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

/* If the screen size is 480px or less */
@media (max-width: 480px) {
    .content_testimonial3-1 .picto {
        padding-top: 40%;
    }

    .content_testimonial3-2 .picto {
        padding-top: 40%;
    }

    .content_testimonial3-3 .picto {
        padding-top: 40%;
    }

    .content_testimonial3-4 .picto {
        padding-top: 40%;
    }

    .item>label {
        font-size: 1.3rem;
    }
}

.content_testimonial3-1 .picto {
    height: 30%;
    width: 30%;
    background-image: url("assets/img/canadiansolar.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content_testimonial3-1 h1 {
    color: #d64541;
    text-align: center;
}

.content_testimonial3-2 .picto {
    height: 20%;
    width: 20%;
    background-image: url('assets/img/enelx.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content_testimonial3-2 h1 {
    color: #53046a;
}

.content_testimonial3-3 .picto {
    height: 65px;
    width: 125px;
    padding-left: 2%;
    background-image: url('assets/img/iberdrola.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content_testimonial3-3 h1 {
    color: #59a552;
}

.content_testimonial3-4 .picto {
    height: 34%;
    width: 18%;
    background-image: url('assets/img/generalelectric.png');
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
}

.content_testimonial3-4 h1 {
    color: #1464dc;
}

.content-test h1:first-letter {
    text-transform: uppercase;
}

input:checked~label {
    opacity: 1;
    -webkit-animation: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    animation: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

input:checked~label.label_testimonial3-1 {
    color: #d64541;
    border-right: solid 4px #d64541;
}

input:checked~label.label_testimonial3-2 {
    color: #53046a;
    border-right: solid 4px #53046a;
}

input:checked~label.label_testimonial3-3 {
    color: #59a552;
    border-right: solid 4px #59a552;
}

input:checked~label.label_testimonial3-4 {
    color: #1464dc;
    border-right: solid 4px #1464dc;
}

label.label_testimonial3-1:before {
    content: " ";
    display: block;
    position: absolute;
    width: 20%;
    height: 100%;
    margin-left: 15px;
    background-image: url('assets/img/canadiansolar.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

label.label_testimonial3-2:before {
    content: " ";
    display: block;
    position: absolute;
    width: 5rem;
    height: 80%;
    margin-left: 15px;
    background-image: url('assets/img/enelx.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

label.label_testimonial3-3:before {
    content: " ";
    display: block;
    position: absolute;
    width: 15%;
    height: 80%;
    margin-left: 15px;
    background-image: url('assets/img/iberdrola.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

label.label_testimonial3-4:before {
    content: " ";
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    margin-left: 15px;
    background-image: url('assets/img/generalelectric.png');
    background-position: center;
    background-size: 75% 75%;
    background-repeat: no-repeat;
    border-radius: 50%;
}

label:first-letter {
    text-transform: uppercase;
}

.label_testimonial3-1:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(#d64541a3));
    background-image: -webkit-linear-gradient(left, #ffffff, #d64541a3);
    background-image: -o-linear-gradient(left, #ffffff, #d64541a3);
    background-image: linear-gradient(to right, #ffffff, #d64541a3);
    font-size: 1.2rem;
    -webkit-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
}

.label_testimonial3-2:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(#d75adf59));
    background-image: -webkit-linear-gradient(left, #ffffff, #d75adf59);
    background-image: -o-linear-gradient(left, #ffffff, #d75adf59);
    background-image: linear-gradient(to right, #ffffff, #d75adf59);
    font-size: 1.2rem;
    -webkit-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
}

.label_testimonial3-3:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(#69cb62a3));
    background-image: -webkit-linear-gradient(left, #ffffff, #69cb62a3);
    background-image: -o-linear-gradient(left, #ffffff, #69cb62a3);
    background-image: linear-gradient(to right, #ffffff, #69cb62a3);
    font-size: 1.2rem;
    -webkit-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
}

.label_testimonial3-4:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(rgb(87, 153, 239)));
    background-image: -webkit-linear-gradient(left, #ffffff, rgb(87, 153, 239));
    background-image: -o-linear-gradient(left, #ffffff, rgb(87, 153, 239));
    background-image: linear-gradient(to right, #ffffff, rgb(87, 153, 239));
    font-size: 1.2rem;
    -webkit-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
}

p.testimonialState {
    margin-top: -5px;
    font-size: 0.8rem;
    font-style: italic;
    color: #3e3c3cd4;
}

p.testimonialFrom {
    margin-top: 5px;
    font-weight: bold;
    color: #33475c;
}
</style>
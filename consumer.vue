<template>
    <main id="back">
        <div class="info-group">
            <div class="arrow">
                <div class="arrow-left">
                    <router-link to="/healthcare">
                        <img src="~/assets/img/left-arrows.png" alt="Left Arrow">
                    </router-link>
                </div>
                <router-link to="/sustainability">
                    <div class="arrow-right">
                        <img src="~/assets/img/right-arrows.png" alt="Right Arrow">
                    </div>

                </router-link>
            </div>

            <h1 class="name">Consumer Goods Investments</h1>
            <hr />
            <div class="row">
                <div class="columna">
                    <img id="area-img" src="~/assets/img/consumer-team.png" />
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
                                Our company looks for opportunities in the consumer goods sector that are able to offer
                                unique value propositions to customers,
                                create new markets or disrupt existing ones.
                                <br>
                                The company's consumer goods investments span across a variety of categories including food
                                and beverage, beauty and personal care,
                                and household goods. VenTour is interested in companies that leverage cutting-edge
                                technologies to create new products and services that meet evolving consumer needs.
                                The company also prioritizes businesses that have a strong brand identity and are able to
                                connect with their customers on a personal level.
                            </p2>
                        </div>
                        <div v-else-if="activeSection === 2">
                            <p2 class="description">
                                Current Portfolio of the investment projects in the field of Consumer Goods:
                            </p2>
                            <ul class="comp-list">
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.nestle.it/" target="_blank"
                                        style="text-decoration: none;">Nestlé</a></li>
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.unilever.com/" target="_blank"
                                        style="text-decoration: none;">Unilever</a></li>
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.nike.com/it/" target="_blank"
                                        style="text-decoration: none;">Nike</a></li>
                                <li style="list-style: none; text-decoration: none;font-size: medium;"><a
                                        href="https://www.asahigroup-holdings.com/en/" target="_blank"
                                        style="text-decoration: none;">Asahi Group
                                    </a></li>
                                <li style="list-style: none; text-decoration: none;"><a
                                        href="https://www.kraftheinzcompany.com/" target="_blank"
                                        style="text-decoration: none;font-size: medium;">Kraft Heinz</a>
                                </li>
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
                        <input type="radio" id="radio_testimonial2-1" name="basic_carousel" checked="checked" />
                        <label class="label_testimonial2-1" for="radio_testimonial2-1">Nestlè</label>
                        <div class="content-test content_testimonial2-1">
                            <span class="picto"></span>

                            <p>"I've been investing with VenTour for a few years now and I couldn't be happier with their
                                work in the consumer goods sector. Their expertise and guidance have helped our portfolio of
                                companies grow tremendously."</p>
                            <p class="testimonialFrom">Mark Schneider, Chief Executive Officer</p>
                            <p class="testimonialState">Vevey, Switzerland</p>
                        </div>
                    </li>
                    <li class="item">
                        <input type="radio" id="radio_testimonial2-2" name="basic_carousel" />
                        <label class="label_testimonial2-2" for="radio_testimonial2-2">Unilever</label>
                        <div class="content-test content_testimonial2-2">
                            <span class="picto"></span>

                            <p>"As an investor, it's always reassuring to see the companies you've invested in succeed.
                                VenTour's strategic investments in the consumer goods sector have consistently led to
                                impressive results, and I'm proud to be a part of it."</p>
                            <p class="testimonialFrom">Alan Jope, CEO</p>
                            <p class="testimonialState">London, UK</p>
                            <br>
                        </div>
                    </li>
                    <li class="item">
                        <input type="radio" id="radio_testimonial2-3" name="basic_carousel" />
                        <label class="label_testimonial2-3" for="radio_testimonial2-3">NIKE</label>
                        <div class="content-test content_testimonial2-3">
                            <span class="picto"></span>

                            <p>"I've invested in several venture capital firms over the years, but VenTour stands out in
                                their commitment to their portfolio companies in the consumer goods industry. Their team's
                                dedication and support have helped take our investments to the next level."</p>
                            <p class="testimonialFrom">John Donahoe, President</p>
                            <p class="testimonialState">Oregon, USA</p>
                        </div>
                    </li>
                    <li class="item">
                        <input type="radio" id="radio_testimonial2-4" name="basic_carousel" />
                        <label class="label_testimonial2-4" for="radio_testimonial2-4">Kraft Heinz</label>
                        <div class="content-test content_testimonial2-4">
                            <span class="picto"></span>

                            <p>"VenTour's approach to investing in the consumer goods sector is truly unique. Their focus on
                                sustainability and ethical practices in their portfolio companies has not only yielded great
                                returns but has also made a positive impact on our environment and society. I'm proud to be
                                a part of their mission."</p>
                            <p class="testimonialFrom">Miguel Patricio, Chief Executive</p>
                            <p class="testimonialState"> Illinois, USA</p>
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

const testimonial2Items = document.querySelectorAll('.item label');
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
        const ele = `.${testimonial2Items[index].className}`;
        const ele2 = document.querySelector(ele);
        ele2.dispatchEvent(evt);
        index++; // Increment the index
        if (index >= testimonialItems.length) {
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
    .content_testimonial2-1 .picto {
        padding-top: 40%;
    }

    .content_testimonial2-2 .picto {
        padding-top: 40%;
    }

    .content_testimonial2-3 .picto {
        padding-top: 40%;
    }

    .content_testimonial2-4 .picto {
        padding-top: 40%;
    }

    .item>label {
        font-size: 1.3rem;
    }
}

.content_testimonial2-1 .picto {
    height: 20%;
    width: 30%;
    background-image: url("assets/img/nestle.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content_testimonial2-1 h1 {
    color: #04447d;
    text-align: center;
}

.content_testimonial2-2 .picto {
    height: 22%;
    width: 30%;
    background-image: url('assets/img/unilever.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content_testimonial2-2 h1 {
    color: #102448;
}

.content_testimonial2-3 .picto {
    height: 20%;
    width: 20%;
    padding-left: 2%;
    background-image: url('assets/img/nike.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content_testimonial2-3 h1 {
    color: #010d08;
}

.content_testimonial2-4 .picto {
    height: 18%;
    width: 20%;
    background-image: url('assets/img/kraftHeinz.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content_testimonial2-4 h1 {
    color: rgb(200, 43, 32);
}

.content-test h1:first-letter {
    text-transform: uppercase;
}

input:checked~label {
    opacity: 1;
    -webkit-animation: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    animation: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

input:checked~label.label_testimonial2-1 {
    color: #04447d;
    border-right: solid 4px #04447d;
}

input:checked~label.label_testimonial2-2 {
    color: #2e579d;
    border-right: solid 4px #2e579d;
}

input:checked~label.label_testimonial2-3 {
    color: #010d08;
    border-right: solid 4px #010d08;
}

input:checked~label.label_testimonial2-4 {
    color: rgb(200, 43, 32);
    border-right: solid 4px rgb(200, 43, 32);
}

label.label_testimonial2-1:before {
    content: " ";
    display: block;
    position: absolute;
    width: 20%;
    height: 80%;
    margin-left: 15px;
    background-image: url('assets/img/nestle.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

label.label_testimonial2-2:before {
    content: " ";
    display: block;
    position: absolute;
    width: 5rem;
    height: 80%;
    margin-left: 15px;
    background-image: url('assets/img/unilever.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

label.label_testimonial2-3:before {
    content: " ";
    display: block;
    position: absolute;
    width: 5rem;
    height: 80%;
    margin-left: 15px;
    background-image: url('assets/img/nike.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

label.label_testimonial2-4:before {
    content: " ";
    display: block;
    position: absolute;
    width: 25%;
    height: 85%;
    margin-left: 5px;
    background-image: url('assets/img/kraftHeinz.png');
    background-position: center;
    background-size: 75% 75%;
    background-repeat: no-repeat;
}

label:first-letter {
    text-transform: uppercase;
}

.label_testimonial2-1:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(#4992d1a3));
    background-image: -webkit-linear-gradient(left, #ffffff, #4992d1a3);
    background-image: -o-linear-gradient(left, #ffffff, #4992d1a3);
    background-image: linear-gradient(to right, #ffffff, #4992d1a3);
    font-size: 1.2rem;
    -webkit-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
}

.label_testimonial2-2:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(#3493a659));
    background-image: -webkit-linear-gradient(left, #ffffff, #3493a659);
    background-image: -o-linear-gradient(left, #ffffff, #3493a659);
    background-image: linear-gradient(to right, #ffffff, #3493a659);
    font-size: 1.2rem;
    -webkit-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
}

.label_testimonial2-3:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(#000000a3));
    background-image: -webkit-linear-gradient(left, #ffffff, #000000a3);
    background-image: -o-linear-gradient(left, #ffffff, #000000a3);
    background-image: linear-gradient(to right, #ffffff, #000000a3);
    font-size: 1.2rem;
    -webkit-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
}

.label_testimonial2-4:hover {
    background-image: -webkit-gradient(linear,
            left top,
            right top,
            from(#ffffff),
            to(rgb(205, 89, 47)));
    background-image: -webkit-linear-gradient(left, #ffffff, rgb(205, 89, 47));
    background-image: -o-linear-gradient(left, #ffffff, rgb(205, 89, 47));
    background-image: linear-gradient(to right, #ffffff, rgb(205, 89, 47));
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
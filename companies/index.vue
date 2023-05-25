<!--
    Page with the list of all the location.
    As described in the Card component, the same component was used for both Person and Location since they have the same structure.
-->
<template>
    <main>
        <div class="containeri">
            <div class="image-containeri">
                <div class="image-wrapperi">
                    <img src="~/assets/img/logoinv.png" style="width: 100%;height: 100%;">
                </div>

            </div>
            <div class="text-containeri">
                <h1>Investing in the most promising startups with the potential to change the
                    world! </h1>
            </div>
            <div class="text-containeri2">
                <p>
                    We have a track record of identifying and nurtuing some of the most innovative and dynamic
                    startups in the world!
                </p>
            </div>
        </div>
        <div class="row4">
            <div class="column41">
                <div class="area-icons">
                    <img src="~/assets/img/technology.png" alt="Tech">
                </div>
                <div class="counter" data-target="100"></div>
                <div class="link-text">
                    <a class="learn-more"><router-link to="/technology">
                            <h1 style="color:#033f52">Technology Investments</h1>
                        </router-link></a>
                </div>
                <label for="Technology">

                    
                    <input type="radio" id="Technology" value="Technology" name="Investments-categories" v-model="areas">
                    <a href="#title2" @click="filterAndNavigate"> <h1 class="learn-more" style="color:#033f52">CHECK COMPANIES</h1></a>
                    <span class="checkmark"></span>
                </label>
            </div>


            <div class=" column4">
                <div class="area-icons">
                    <img src="~/assets/img/health.png" alt="Healthcare">
                </div>
                <div class="counter" data-target="250"></div>
                <div class="link-text">
                    <a class="learn-more"><router-link to="/healthcare">
                            <h1 style="color:#033f52">Healthcare Investments</h1>
                        </router-link></a>
                </div>
                <label for="Healthcare">
                    <input type="radio" id="Healthcare" value="Healthcare" name="Investments-categories" v-model="areas">
                    <h1 class="learn-more" style="color:#033f52">CHECK COMPANIES</h1>
                    <span class="checkmark" href="#"></span>
                </label>
            </div>


            <div class="column4">
                <div class="area-icons">
                    <img src="~/assets/img/customer.png" alt="Goods">
                </div>
                <div class="counter" data-target="120"></div>
                <div class="link-text">
                    <a class="learn-more"><router-link to="/consumer">
                            <h1 style="color:#033f52">Consumer Goods Investments</h1>
                        </router-link></a>
                </div>
                <label for="Consumer Goods">

                    <input type="radio" id="Consumer Goods" value="Consumer Goods" name="Investments-categories"
                        v-model="areas">
                    <h1 class="learn-more" style="color:#033f52">CHECK COMPANIES</h1>
                    <span class="checkmark" href="#"></span>
                </label>
            
            </div>

            <div class="column4">
                <div class="area-icons">
                    <img src="~/assets/img/sustainable.png" alt="Sustainability">
                </div>
                <div class="counter" data-target="270"></div>
                <div class="link-text">
                    <a class="learn-more"><router-link to="/sustainability">
                            <h1 style="color:#033f52">Sustainability Investments</h1>
                        </router-link></a>
                </div>
                <label for="Sustainability">

                    <input type="radio" id="Sustainability" value="Sustainability" name="Investments-categories"
                        v-model="areas">
                    <h1 class="learn-more" style="color:#033f52">CHECK COMPANIES</h1>
                    <span class="checkmark" href="#"></span>
                </label>
            </div>
        </div>
        <section class="team-members-grid">
            <div class="title"> <label for="all-team">
                    ALL COMPANIES
                    <input type="radio" id="all-investments" value="" name="Investments-categories" v-model="areas" checked>
                    <span class="checkmark"></span>
                </label></div>
            <a href="#title2"><button class="active" @click="MR = ''"> Show all </button>
                <button @click="MR = true">Most Relevant Companies</button></a>
            <!--
            <div class="dropdown-grid-filter-container">
                            <div class="dropdown-grid-filter grid-x align-middle">
                <label for="Technology">
                    
                    <p> Technology Investments</p>
                    <input type="radio" id="Technology" value="Technology"
                                        name="Investments-categories" v-model="areas">
                    <span class="checkmark"></span>
                </label>

                <label for="Healthcare">
                    
                    <p>Healthcare Investments</p>
                    <input type="radio" id="Healthcare" value="Healthcare"
                                        name="Investments-categories" v-model="areas">
                    <span class="checkmark"></span>
                </label>
                <label for="Consumer Goods">
                    
                    <p>Consumer Goods Investments</p>
                    <input type="radio" id="Consumer Goods" value="Consumer Goods"
                                        name="Investments-categories" v-model="areas">
                    <span class="checkmark"></span>
                </label>  
                <label for="Sustainability">
                    <span class="checkmark">
                    <p>Sustainability Investments</p>
                    <input type="radio" id="Sustainability" value="Sustainability"
                                        name="Investments-categories" v-model="areas">
                    </span>
                </label>
                </div>
            </div>
        -->
            <div class="form-container">
                <label for="age-filter">Filter companies by name </label>
                <input id="age-filter" type='text' placeholder="Search Company" v-model="name">
            </div>
            <div id="title2">PORTFOLIO SNAPSHOT</div>

            <!-- <label for="all-areas">
                                    ALL
                                    <input type="radio" id="all-areas" value="" name="areas-categories" v-model="areas"
                                        checked>
                                    <span class="checkmark"></span>
                                </label>-->
            <div class="row-c">
                <div id="card-container">
                    <Cardsection v-for="company of filtered" :subtitle="company.ceo" :area="company.areas"
                        :image="company.image" :link="'/companies/' + company.id" />
                </div>
            </div>
        </section>
        <div class="row41">
            <div class="text-block">
                Our Exit Strategies
                <p class="left-text">{{ leftColumnText }}</p>
            </div>
            <div class="buttons-container">
                <div class="buttons">
                    <div v-for="button in buttons" :key="button.id">
                        <button style="color: white;" @click="updateText(button.text)"><span>{{ button.label
                        }}</span></button>
                    </div>
                </div>
                <div style="position=relative;display: flex; align-items: center; justify-content: center; height: 100%;">
                    <div class="right-text">
                        <p>{{ rightColumnText }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!--<div id="card-container">
            <Card v-for="location of locations" :title="location.name" :subtitle="location.city"
                :link="'/locations/' + location.id" />
        </div>-->

    </main>
</template>


<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: companies } = await useFetch(useRuntimeConfig().public.serverURL + '/companies')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
const name = ref("");
const areas = ref("");
const MR = ref("");

const filtered = computed(() => {
    const arrTot = []
    // Checking for values where the part of the company name is provided
    for (let company of companies.value) {
        if (company.ceo != undefined) { // Irst 8 of the db are supervisors' name
            if ((name.value == 0 || name.value == "") & (areas.value == 0 || areas.value == "") & (MR.value == 0 || MR.value == "")) { // All companies
                //console.log(company) // Only for debug
                arrTot.push(company)
            }
            //else if ((company.name == name.value) & (company.areas == areas.value)) {
            //    arrTot.push(company)
            //}
            else if ((company.name.toLowerCase().includes(name.value.toLowerCase())) & ((company.areas == areas.value) || (areas.value == 0 || areas.value == "")) & (company.MostRelevant == MR.value))
                arrTot.push(company)
            console.log(MR.value)
        }
    }
    return arrTot

})


</script>

<script>
export default {
    mounted() {
        const counters = document.querySelectorAll('.counter');
        const delay = 500;

        const isInView = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const animateCounters = () => {
            counters.forEach((counter, index) => {
                if (isInView(counter)) {
                    const target = +counter.dataset.target;
                    const start = performance.now();
                    const duration = 2000;

                    const step = (timestamp) => {
                        const elapsed = timestamp - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const value = Math.floor(progress * target);
                        counter.textContent = `${value}+`;
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        }
                    };

                    requestAnimationFrame(step);
                } else {
                    counter.textContent = '0+';
                }
            });
        };

        const handleScroll = () => {
            animateCounters();
            window.removeEventListener('scroll', handleScroll);
        };

        animateCounters();
        window.addEventListener('scroll', handleScroll);
    },
    methods: {
        navigateToProjects() {
            this.$router.push({ name: 'technology', hash: '#projects' });
        },
        filterAndNavigate(event) {
          // Prevent the default link behavior
          event.preventDefault();

          // Perform filtering based on the selected value (example filtering code)
          // Replace this code with your actual filtering logic
          if (this.areas === 'Technology') {
            // Get the target section using the href attribute
            const targetSection = document.querySelector(event.target.getAttribute('href'));

            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        },
    },
    data() {
        return {
            areas: '',
            leftColumnText: 'We are committed to helping our portfolio companies realize theri full potential. One of the key ways is by working closely with our companies to develop and execute a successful exit strategy. Our goal is to help our companies achieve a successful exit that maximizes returns for our investors and provides a strong foundation for future growth and opportunities.',
            rightColumnText: '',
            buttons: [
                { id: 2, label: 'IPO', text: 'An Initial Public Offering is a process where a private company goes public and offers shares of stock to the public market. We prepare our companies for an IPO, including helping them build a strong management team, establishing governance and financial controls,and developing a compelling growth strategy. Our deep understanding of the public markets, combined with our network of investment bankers,allows us to guide our companies to achieve the best possible outcome.' },
                { id: 3, label: 'M & A', text: 'Mergers & Acquisitions involves the acquisition of a company by another company often at a premiuim price. We work closely to identify potential acquirers and facilitate the M & A process, including valuation analysis, due diligence and negotiation. Our network of strategic buyers, private equity firms, and other potential acquirers enables us to help our companies to achieve transactions that maximize returns for our investors.' },
                { id: 4, label: 'Strategic Sale', text: 'A strategic sale involves the scale of a company to a strategic buyer, such as a competitor or industry player. We have deep industry expertise and a broad network of strategic buyers, enabling us to help our portfolio companies identify potential acquirers and negotiate a successful sale. Our focus on building strong relationships with key players in the industry allows us to achieve the best possible outcome for our companies.' },
                { id: 5, label: 'Recapitalization', text: 'Recapitalization involves restructuring the capital structure of a company, often through a combination of debt and equity. We work closely to evaluate their capital needs and develop comprehensive recapitalization plan that balances the companys growth objectives with its financial profile. We help the companies achieve a successful recapitalization that provides a strong foundation for future growth and opportunities.' },
            ],
        }
    },
    methods: {
        updateText(newText) {
            this.rightColumnText = newText;
        },
    },
};
//import { pbkdf2 } from 'crypto';

/*
    The defineNuxtComponent gets us access to the asyncData property.
    This is the first function that is called by nuxt when the page is called.
    We can use this to pre-load the data to make it available to the user.
*/
/*export default defineNuxtComponent({
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const locations = await $fetch(useRuntimeConfig().public.serverURL + '/locations')

        return {
            locations
        }
    }
})*/
</script>
<style scoped>
#card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-decoration: none;
    border: none;
    padding-bottom: 2%;
}

.form-container {
    padding-left: 35%;
    padding-right: 4%;
    padding-top: 2%;
    padding-bottom: 2%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
}

input {
    border-color: #b2b7b5;
    padding: 10px;
    font-size: 1.1em;
    width: 40%;
    background-color: rgba(233, 237, 237, 0.997);
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}

input[type=text]:focus {
    border: 3px solid #555;
}

input::placeholder {
    color: #b2b7b5;
}

.image-container {
    position: relative;
    display: inline-block;
    text-align: center;
    border-color: none;
    border-style: none;
    margin-left: 5rem;
}

.image-container img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    width: 80%;
}

.image-container h2 {
    margin-top: 20px;
    margin-bottom: 0;
}

.image-container:hover img {
    opacity: 0;
}

.image-container:hover h2 {
    opacity: 0;
}

.clickable-image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #77c7ac;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-style: solid;
    border-radius: 20%;
    border-color: #77c7ac;
}

.clickable-image-container img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.clickable-image-container:hover {
    opacity: 1;
}

.clickable-image-container:hover img {
    opacity: 1;
}

.image-container:hover .clickable-image-container {
    opacity: 1;
}

.hover-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.hover-content p {
    margin: 0;
    color: #fff;
    margin-top: 2%;
    text-decoration: none;
}

.hover-content img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}

.containeri {
    background-color: #033f52;
    padding-top: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.image-containeri {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    align-items: stretch;
    max-width: 100%;
}

.image-wrapperi {
    border-radius: 100%;
    border: 3px solid #fff;
    overflow: hidden;
    padding-top: 100%;
    position: relative;
    width: 20rem;
    height: 0.9rem;
    margin: 0 auto;
}

.image-wrapperi img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: auto;
    object-fit: cover;
}

.text-containeri {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-containeri2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-containeri2 p {
    width: 30%;
    font-size: 1.2rem;
    font-family: sans-serif;
    text-align: center;
    color: white;
}


.text-containeri h1 {
    font-size: 1.3rem;
    font-family: sans-serif;
    margin-bottom: 0.5 rem;
    color: rgb(242, 249, 246);
}

.column4 {

    position: relative;
    background-size: 80%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-left: 1px solid black;

}

.column4::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 80%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    opacity: 0.07;


}

.column41 {
    padding-top: 2%;
    position: relative;
    background-size: 80%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}


.counter {
    font-size: 3rem;
    font-weight: bolder;
    color: #033f52;
}

.column41::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 80%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    background-color: rgba(255, 255, 255, 0.8);

    opacity: 0.07;

}



.row4 {
    width: 100%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.row41 {
    background: url('assets/img/exit.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.row41 .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.area-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
}

.area-icons img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}


.column4 p {
    font-size: 1.5rem;
    font-weight: bold;
}


.column41 p {
    font-size: 1.5rem;
    font-weight: bold;

}


.learn-more {
    text-decoration: none;
    font-size: 18px;
    text-decoration-color: #033f52;
    font-family: sans-serif;
    font-size: large;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    padding-top: 10%;
    position: left;
}

.learn-more a {
    text-decoration: none;
    font-size: 10px;
}

label>[type=checkbox],
label>[type=radio] {
    margin-right: 2rem;
    -webkit-text-fill-color: #0e6b74;
    margin: 1rem 1rem 0.2rem 0;
    position: absolute;
}

.team-members-grid {
    background-color: rgba(233, 237, 237, 0.997);
    background-position-x: center;
    opacity: 100%;
    position: relative;
    width: 100%;
}

.title {
    padding-top: 6%;
    padding-left: 44.8%;
    position: relative;
    font-size: 1.6rem;
    font-weight: bold;
}

#title2 {
    padding-top: 1%;
    padding-left: 45.5%;
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: sans-serif;
}

.text-block {
    position: relative;
    font-family: sans-serif;
    font-size: 3rem;
    color: white;
    padding-left: 8%;
    padding-top: 5%;
    padding-right: 10%;
}

.container-fluid {
    max-width: 100%;
    margin: 0;
    padding: 0;
}

.buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 5%;
    padding-bottom: 2%;
}

.row41 .left-text {
    margin-top: 3%;
    width: 35%;
    font-family: sans-serif;
    font-size: 1.1rem;
    color: white;
}

.buttons {
    padding-top: 5%;
    padding-bottom: 2%;
    display: flex;
    width: 40%;
    height: 100%;
    gap: 2%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.buttons button {
    width: 150px;
    height: 2.5rem;
    margin-right: 10%;
    font-size: 18px;
    text-decoration-color: white;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    background-color: #0e6b74;
    border: 2px solid #0e6b74;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.2);
}

.row4.button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 10%;
    cursor: pointer;
}

button:hover {
    background-color: #5ecbde;
}

.right-text {
    background-color: rgba(18, 143, 165, 0.7);
    border-radius: 5%;
    padding-left: 1%;
    width: 33%;
    font-family: sans-serif;
    font-size: 1.1rem;
    color: #f6f9f9;
}

.col p {
    font-size: 18px;
    line-height: 1.5;
}
</style>
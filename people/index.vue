<!--
    Page with the list of all the people.
    As described in the Card component, the same component was used for both Person and Location since they have the same structure.
-->
<template>
    <main>
        <!--
        Form used to filter the list by age.
      -->
        <!--  <div class="breadcrumbs">
            <nav>
                <ul class="nav-breadcrumbs">
                    <li><router-link to="/">Home</router-link></li> /
                    <li><router-link to="/people"> Our Team</router-link></li>
                </ul>
            </nav>
        </div>-->
        <div class="row1 d-flex align-items-stretch">
            <a href="#team-members-grid">
                <h1 class="ourt-intro blink">Meet Our Team</h1>
            </a>
            <div class="col-a">
                <div class="card1o">
                    <h3>MANAGEMENT DEPARTMENT</h3>
                    <p class="small-a">They develop and implement strategic plans, set organizational goals,
                        and provide leadership to drive the company's growth and success.</p>
                </div>
                <div class="card1o">
                    <h3> INVESTMENT DEPARTMENT</h3>
                    <p class="small-a">They conduct thorough research, assess risk factors, and make informed investment
                        decisions to optimize the company's financial performance.</p>

                </div>
                <div class="card1o">
                    <h3>OPERATIONS & FINANCE DEPARTMENT</h3>
                    <p class="small-a">They monitor cash flow, manage resources, and implement cost-saving measures while
                        maintaining quality standards to support the company's overall objectives.</p>
                </div>
                <div class="card1o">
                    <h3>ADVISORING DEPARTMENT</h3>
                    <p class="small-a">They offer valuable insights, assess risks, and provide recommendations on key
                        decisions, helping the company navigate challenges and capitalize on opportunities.</p>
                </div>
            </div>
            <!--
            <div class="team-info">
                <p>Our team is made up of experienced and driven individuals who are passionate about identifying and
                    supporting the next generation of disruptors.</p>
                <p>Together, our team has a proven track record of identifying and investing in startups that have gone
                    on to become industry leaders.</p>
            </div>
-->
        </div>
        <section id="team-members-grid">
            <div class="grid-container">
                <div id="filter-container">

                    <div class="grid-x">

                        <div class="cell small-12 filter-title">Filter By Department:</div>
                        <div class="dropdown-grid-filter-container">
                            <div class="dropdown-grid-filter grid-x align-middle">

                                <label for="all-team">
                                    ALL
                                    <input type="radio" id="all-team" value="" name="team-categories" v-model="team"
                                        checked>
                                    <span class="checkmark"></span>
                                </label>


                                <label for="investment-team">
                                    MANAGEMENT <input type="radio" id="Management-Team" value="Management Team"
                                        name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>


                                <label for="investor-relations">
                                    INVESTMENT <input type="radio" id="Investment-Team" value="Investment Team"
                                        name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>


                                <label for="finance-operations">
                                    OPS &amp; FINANCE <input type="radio" id="finance-operations"
                                        value="Operations and Finance Team" name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>

                                <label for="finance-operations">
                                    ADVISORING BOARD <input type="radio" id="finance-operations"
                                        value="Advisoring Board Team" name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <!-- <div class="form-container">
                                <label for="age-filter">Role filter</label>
                                <input id="age-filter" type='text' placeholder="Role filter" v-model="role">
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <Card v-for="person of filtered" :image="person.image" :title="person.name" :subtitle="person.role"
                    :team="person.team" :area="person.area" :link="'/people/' + person.id" />
            </div>
            <div class="row3-container">
                <div class="col3">
                    <router-link to="/companies" class="nav-link-end">
                        <a class="card13">
                            <h3>CHECK OUR INVESTMENTS</h3>
                            <div class="go-corner">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </a>
                    </router-link>
                </div>
            </div>
        </section>

    </main>
</template>
  
<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: people } = await useFetch(useRuntimeConfig().public.serverURL + '/people')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
const role = ref("");
const team = ref("");

const filtered = computed(() => {
    // Checking for values where the full list is provided
    if ((role.value == 0 || role.value == "") & (team.value == 0 || team.value == ""))
        return people.value

    const arr = []


    // Filtering the list
    for (let person of people.value) {
        if (person.team == team.value) {
            arr.push(person)
        }/*
        else if (person.role.toLowerCase().includes(role.value.toLowerCase()))
            arr.push(person)*/
    }

    // Returning the filtered list
    return arr

})
function getButtonString(a) {
    const arr = []
    var button = a; // replace "myButton" with the ID of your button
    for (let person of people.value) {
        if (person.role.includes(role.value) && person.team == a)
            arr.push(person)
    }
    return arr;
}
const blinking = ref(false);

onMounted(() => {
    blinking.value = true;
    setTimeout(() => {
        blinking.value = false;
    }, 2000); // Adjust the duration of blinking (in milliseconds) as per your preference
});

</script>

<style scoped>
#card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-decoration: none;
    border: none;
    padding-bottom: 3%;
}

.col-a {
    justify-content: center;
    display: flex;
    width: 100%;
    gap: 2%;

    padding-bottom: 2%;
}

.col-a.-a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

.col-a h3 {
    color: #262626;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 4px;
}

@keyframes blink {
    20% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.blink {
    animation: blink 3s;
}

.col-a p {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    color: #666666;
}

p.small {
    font-size: 14px;
}


.card1o {
    display: block;
    position: relative;
    max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 42px 34px;
    margin: 10px;
    text-decoration: none;
    z-index: 5;
    overflow: hidden;
}

.card1o:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 60% 50%;
    transition: transform 0.25s ease-out;
}

.card1o:before {
    transform: scale(21);
}

.card1o p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
}

.col-a h3 {
    color: #ffffff;
}

.col3 h3 {
    color: #262626;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 4px;
}

.nav-link-end {
    text-decoration: none;
}

.card13 {
    display: block;
    position: relative;
    max-width: 151px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 20px 20px;
    margin: 10px;
    text-decoration: none;
    z-index: 5;
    overflow: hidden;
}

.card13:hover:before {
    transform: scale(21);
}

.card13:hover h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
}

.card13:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 60% 50%;
    transition: transform 0.25s ease-out;
}

.card13:hover:before {
    transform: scale(21);
}


.card13:hover h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
}

.go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00838d;
    border-radius: 0 4px 0 32px;
}

.go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
}

.row3-container {
    padding-left: 75%;
    padding-bottom: 2%;
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

.nav-breadcrumbs {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: left;
}

.nav-breadcrumbs li {
    margin-right: 30%;
}

.nav-breadcrumbs li:last-child {
    font-weight: bold;
}

.nav-breadcrumbs a {
    text-decoration: none;
    color: #0e6b74;
    font-weight: bold;
}

.nav-breadcrumbs a:hover {
    text-decoration: underline;
}

.ourt-intro {
    background-color: rgb(239, 241, 246);
    color: rgb(6, 6, 6);
    font-size: 60px;
    font-weight: bold;
    margin: 0 auto;
    padding: 10px;
    width: 28%;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
}


.intro {
    font-family: monospace;
    font-size: 1.5rem;
    color: white;
    opacity: 0.8;
    position: relative;
    margin-top: 6%;
    margin-left: 10%;
    margin-right: 10%;
}

.team-info {
    font-family: monospace;
    font-size: 1.5rem;
    color: white;
    opacity: 0.6;
    position: relative;
    margin-top: 0.5%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    height: 60%;
}

.row1 {
    background-image: url("https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80");
    background-repeat: no-repeat;
    background-position-y: 65%;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 30%;
    height: 300px;
}



.gif-container {
    position: relative;
    justify-content: flex-start;

}

.grid-x {
    padding-left: 0%;
    padding-top: 0%;
}

#text-container {
    position: right;
    transform: translateY(-50%);
    font-family: monospace;
    font-size: 2rem;
    color: #77c7ac;
    justify-content: center;
    padding-left: 20%;
}



.arrow {
    position: absolute;
    width: 5% !important;
    height: 11% !important;
    display: inline-block;
    position: absolute;
    top: 52%;
    left: 47%;
}

.arrow::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #000;
    border-width: 2px 2px 0 0;
    position: absolute;
    transform-origin: 50% 50%;
}

.arrow.down::before {
    transform: rotate(135deg);
    margin: -20px 0 0 -15px;
}

.arrow::after {
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #000;
    position: absolute;
    transform-origin: 50% 50%;
}

.arrow.down::after {
    width: 0;
    height: 40px;
    border-width: 0 2px 0 0;
    transform: translate(-1px, -26px);
}

.arrow.circle {
    background: #f2f8f9;
    opacity: 0.7;
    border-radius: 50px;
}

.text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #5ac6cf;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

.text-container p {
    font-family: monospace;
    font-size: 1.2rem;
    color: #77c7ac;
    margin: 0;
}

.form-container {
    width: 90%;
    border-radius: 10px;
    border: 2px solid brown;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    margin: 20px auto;
}

.form-container label {
    font-weight: bold;
    margin-bottom: 10px;
}



#team-members-grid {
    background-image: url('assets/img/19449741.jpg');
    background-position-x: center;
    opacity: 100%;
    position: relative;
    width: 100%;
}

section {
    display: block;
}

.grid-container {
    position: relative;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 90rem;
    margin-left: 10%;
    margin-right: auto;
}

#filter-container {
    padding-top: 2%;
}


.grid-x {
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}

#filter-container .filter-title {
    color: #0e6b74;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 4px;
    line-height: 27px;
    font-family: sans-serif;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.grid-x>.shrink {
    width: auto;
}

.cell.shrink {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}

.cell {
    width: 100%;
    margin-right: 40%;
}

#filter-container .dropdown-grid-filter-container .dropdown-grid-filter label {
    font-size: 18px;
    line-height: 1.1;
    font-family: sans-serif;
    color: #0e6b74;
    font-weight: 500;
    display: block;
    position: relative;
    opacity: 1;
    margin-right: 40px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-bottom: 2px;
}

label>[type=checkbox],
label>[type=radio] {
    margin-right: 2rem;
    -webkit-text-fill-color: #0e6b74;
    margin: 1rem 1rem 0.2rem 0;
}


/* Responsive styles */
@media screen and (max-width: 768px) {
    .nav-breadcrumbs {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav-breadcrumbs li {
        list-style-type: none;
        margin-right: 10px;
    }

    .nav-link {
        color: blue;
        display: inline-block;
        margin-right: 0;
        margin-bottom: 10px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
    }

    .nav-link:hover {
        border-bottom: 2px solid blue;
    }
}

/* For larger screens */
@media screen and (min-width: 769px) {
    .nav-breadcrumbs {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav-breadcrumbs li {
        list-style-type: none;
        margin-right: 0;
    }

    .btn {
        border: none;
        outline: none;
        padding: 12px 16px;
        background-color: #f1f1f1;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #ddd;
    }

    .btn.active {
        background-color: #666;
        color: white;
    }

    .nav-link {
        color: blue;
        display: inline-block;
        margin-right: 0;
        margin-bottom: 10px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
    }

    .nav-link:hover {
        border-bottom: 2px solid blue;
    }
}
</style>
<!--
    Page description for a single person.
    As described in the SmallCard component, the same component was used for both Person and Location since they have the same structure.
-->
<template>
    <main id="back">
        <div class="info-group">
            <div class="arrow">
                <router-link to="/companies"><img src="~/assets/img/left-arrows.png"></router-link>
            </div>
            <h1 class="name">{{ company.name }}</h1>
            <div id="data-container-c">
                <p class="areas">Area of investment: {{ company.areas }}</p>
                <p class="ceo">CEO: {{ company.ceo }}</p>
                <div class="supervisor">
                    <Supervisor v-for="person of supervisorname" :name="person.name" :link="'/people/'+person.id" />
                </div>
            </div>
            <hr />
            <div class="row-section">
                <div class="column-c">
                    <img id="main-img" :src="company.image" />
                </div>
                <div class="column2-c">
                    <div class="description-container">
                        <p class="description">{{ company.description }}</p>
                        <p class="description2">{{ company.description2 }}</p>
                        <p>Visit their official website:
                            <a href="{{ company.link }}" target="_blank">
                                {{ company.link }}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </main>
</template>
     

<script>
export default defineNuxtComponent({
    data() {
        return {
            activeSection: 1,
        };
    },
    /*async asyncData() {
        //const route = useRoute()
        const companies = await $fetch(useRuntimeConfig().public.serverURL + '/companies')

        return {
            companies
        }
    }*/
})


</script>
<script setup>

const route = useRoute()
const id = route.params.id
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: people } = await useFetch(useRuntimeConfig().public.serverURL + '/people/')
const { data: company } = await useFetch(useRuntimeConfig().public.serverURL + '/companies/' + id)
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
const supervisorname = computed(() => {
    const NameSupervisor = []
    // Checking for values where the part of the company name is provided
    for (let person of people.value) {
        if (person.id === company.value.companyId) { // Irst 8 of the db are supervisors' name
            console.log("Hello world")
            NameSupervisor.push(person)
            }
        }
    console.log(NameSupervisor)
    return NameSupervisor

})


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
    width: 16%;
    height: 15%;
    padding-top: 6%;
    justify-content: left;
    padding-right: 70%;
}

.arrow img {
    max-width: 12%;
    max-height: 12%;
    position: relative;
    animation: blink 4s infinite;
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

#data-container-c {
    margin-top: 10px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
}

.areas {
    margin-top: 1%;
}

.ceo {
    margin-top: 2%;
}

hr {
    width: 70%;
    border: 1px solid black;
    margin: 20px 0;
}

.row-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 2%;
}



.column-c {
    flex-basis: 500px;
}

.column2-c {
    flex-basis: 500px;
}

.column.p2 {
    position: absolute;
}

#main-img {
    width: 300px;
    height: 40%;
    padding-left: 10%;

}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;
    font-family: PT sans-serif;
}

.link {
    text-decoration: underline;
    cursor: pointer;
    color: rgb(19, 112, 112);
}

.link:hover {
    color: blue;
}

.supervisor {
    position: relative;
    text-align: center;
    color: black;
    text-decoration: none;
}
</style>
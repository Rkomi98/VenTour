<!--
    Contact Page
-->
<head>

</head>

<template>
    <main>
        <main>
            <p>
                This are our contacts:
                <ul>
                    <li>E-mail: mail@shelter.it</li>
                    <li>Tel: 053684864351</li>
                </ul>
            </p>
            <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Company</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Put the url of your company </span>
                <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Ventour.com" />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
            <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your company, focusing on the its goal and stating the motto (if exists).</p>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            
          </div>

          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover letter/ CV</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <!--<p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>-->

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>Albania</option>
                <option>China</option>
                <option>France</option>
                <option>Japan</option>
                <option>Italy</option>
                <option>Switzerland</option>
                <option>Spain</option>
                <option>Other</option>

              </select>
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
            <div class="mt-2">
              <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                  <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-gray-900">Offers</label>
                  <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
            <div class="column2">
                    <div class="description-containera">
                        <h2> Do you want to join us?</h2>
                        <div class="button-container" style="position: relative; top: 0; z-index: 1;">
                            <button class="section-button" :class="{ active: activeSection === 1 }" @click="activeSection = 1">
                                <br>
                                New Company
                            </button>
                            <button class="section-button" :class="{ active: activeSection === 2 }" @click="activeSection = 2">
                                <br>
                                Open Position
                            </button>
                        </div>

                        <div class="description-container" v-if="activeSection === 1">
                            <h1>Do you have a company which works in:  </h1>
                            <div class="job-boards-company-grid">
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Healthcare?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>

                            
                            
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Technology?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>
                            
                            
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Consumer goods?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>

                            
                            
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Sustainability?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>

                            </div>
                            
                        </div>

                        <div class="description-container" v-else-if="activeSection === 2">
                        <div class="job-list">    
                            <div class="job-list-job-details">
                                <div class="job-list-job-details">
                                    <h2 class="job-list-job-title"> 
                                        Frontend Developer
                                    </h2>
                                    <div class="job-list-job-skills">
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://vuejs.org/">Vue.js</a>      
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://nodejs.org/en">Node.js</a>      
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://www.w3schools.com/html/">HTML</a>                  
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://www.w3schools.com/css/">CSS</a>                 
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://www.w3schools.com/js/default.asp"> JavaScript 
                                            </a>               
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://bootstrap-vue.org/"> BootstrapVue 
                                            </a>                 
                                        </span>
                                    </div>
                                    <span class="job-list-company-meta-item">
                                        Milan, IT
                                    </span>
                                    <div class="job-list-badges">
                                        <div class="job-list-badge job-list-badge-remote">
                                            <img class="ikona" src="~/assets/img/home-icon.png">
                                            <!-- <b-icon-house-door></b-icon-house-door> House icon not working-->
                                            
                                        <span class="job-list-badge-text">Work remotely</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <!--
            <form>
                <div>
                    <label for = "name">Name & Surname</label>
                    <input type = "text" id = "name" placeholder = "Name & Surname">
                </div>
                <div>
                    <label for = "mail">E-mail</label>
                    <input type = "email" id = "mail" placeholder = "E-mail">
                </div>
                <div id = "message-div">
                    <label for = "message">Message</label>
                    <textarea id = "message" placeholder = "Write your message here"></textarea>  
                </div>
                <button>Send Message</button>
            </form>
        -->
        </main>
    </main>
</template>
<script>
export default defineNuxtComponent({
        data() {
            return {
                activeSection: 1,
            };
        },
        async asyncData() {
            // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
            const route = useRoute()
            const companies = await $fetch(useRuntimeConfig().public.serverURL + '/companies' + route.params.id)
            return {
                companies
            }
        }
})
</script>

<script setup>

const route = useRoute()
const id = route.params.id
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: person } = await useFetch(useRuntimeConfig().public.serverURL + '/people/' + id)

const { data: companies } = await useFetch(useRuntimeConfig().public.serverURL + '/companies')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
//const role = ref("");
const areas = ref("");

const filtered = computed(() => {
    const arrTot = []
    // Checking for values where the full list is provided
    for (let company of companies.value) {
        if ((areas.value == 0 || areas.value == "") & (company.companyId == id)) {
            console.log(company)
            arrTot.push(company)
        }
    }
    return arrTot

    const arr = []


    // Filtering the list
    for (let company of companies.value) {
        if (company.areas == areas.value) {
            arr.push(company)
        }/*
        else if (company.areas.toLowerCase().includes(areas.value.toLowerCase()))
            arr.push(company)*/
    }

    // Returning the filtered list
    return arr

})

/*
  var items = [
    { text: person.award1 },
    { text: person.award2 },
    { text: person.award3 },
    { text: person.award4 }
  ];

  for (var i = 0; i < items.length; i++) {
    if (items[i].text !== '') {
      var listItem = document.createElement('li');
      listItem.textContent = items[i].text;
      document.getElementById('myList').appendChild(listItem);
    }
  }
*/

</script>

<style>
    main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    }
    /*

    form {
        width: 600px;
        display: flex;
        flex-direction: column;
        padding: 15px;
        border: 2px rgb(255, 102, 0) dashed;
        border-radius: 5px;
        row-gap: 20px;
    }

    form div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    */

    textarea {
        width: 99%;
        min-height: 5.1em;
        resize: vertical;
    }

    input {
        width: 60%;
    }

    label {
        font-size: 13pt;
        font-weight: bold;
    }

    #message-div {
        flex-direction: column;
    }

    @media screen and (max-width: 650px) {
        form div {
            flex-direction: column;
        }

        input {
            width: 100%;
        }
        
        form {
            width: 90%;
            min-width: 400px;
        }
    }
.description-containera {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2%;
    align-items: center;
    text-align: justify;
    padding-right: 20%;
}

.description-containera p2 {
    height: 20%;
    padding-left: -10%;
    font-size: 15pt;
    width: 90%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
}
.description-containera p3 {
    height: 20%;
    padding-left: 70%;
    font-size: 15pt;
    width: 150%;
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
    color: #333;
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

.column {
    flex-basis: 50%;
    padding-left: 2%;
}

.column2 {
    flex-basis: 50%;
    padding-right: 4%;

}

.column.p2 {
    position: absolute;
}

#main-img {
    width: 60%;
    height: 40%;
    padding-left: 10%;
    display: initial;
    /*
    height: auto;
    padding-left: 10%;
    */
}

button2 {
    background-color: black;
    color: white;
    padding: 10px;
    border: none;
    margin-top: 10px;
}

button2:hover {
    cursor: pointer;
}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;
}
.job-boards-company-grid{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;   
}
.job-boards-company-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;      
}

.description-container p2 {
    margin-bottom: 10px;
    font-size: 15pt;
    width: 80%;
    font-family: PT sans-serif;
    font-size: 1.1rem;
}
.description-container p3 {
    margin-bottom: 8px;
    font-size: 15pt;
    width: 100%;
    font-family: PT sans-serif;
    font-size: 1.1rem;
}

@media (min-width: 720px)
.job-boards-company-item {
  margin-bottom: 0;
}
.job-boards-company-item {
  margin-bottom: 16px;
  padding: 24px 24px 32px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--border-md);
}
.job-list {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--border-md);
}
.job-list-job {
  font-size: 14px;
  padding: 24px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  line-height: 1.5;
}
.job-list-job-title {
  font-weight: bold;
  margin-bottom: 8px;
  word-break: break-word;
}
.job-list-job-skill {
  font-size: 13px;
  border: 1px solid #C5CDD1;
  border-radius: var(--border-small);
  display: inline-block;
  padding: 2px 12px;
  line-height: 18px;
  margin-right: 4px;
  margin-bottom: 4px;
}
.job-list-job-skill-clickable {
  cursor: pointer;
}

.job-list-badges {
  margin-top: 16px;
}

.ikona {
  float: left;
  max-width: 5%;
  max-height: 5%;
}

</style>
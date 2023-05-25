<template>
  <main id="back-c">
    <div class="background-section">
      <h1 class="big-text">About VenTour</h1>
      <!--<p class="small-text">We are a leading venture capital firm driving innovation and empowering startups to reach
          their full potential.</p>-->

      <div class="row-a">
        <div class="container-a">
          <div class="col-a">
            <a class="card1" href="#header1">
              <h3>OUR HISTORY</h3>
              <p class="small-a">Excellence over a decade in VenTour. From 15 million Euros of capital invested in 1910 to
                500 million Euros in 2020. We grow together with our investors!
              </p>
              <div class="go-corner" href="#header1">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <div class="col-a">
            <a class="card1" href="#header2">
              <h3>OUR APPROACH</h3>
              <p class="small-a">Evaluated from numerous experts as the best approach in helping the investors accomplish
                their ambitions for success. We help you to believe in YOU!</p>
              <div class="go-corner" href="#header2">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <div class="col-a">
            <a class="card1" href="#header3">
              <h3>WHAT DO WE OFFER</h3>
              <p class="small-a">We offer constant support, full guidance and numerous resources. We give information and
                assistance to new investors interested in joining us.</p>
              <div class="go-corner" href="#header3">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="header1">
      <h1>OUR BRIEF HISTORY</h1>
      <p>Our history brings inovation.With a rich legacy spanning decades, we have been at the forefront of driving
        transformative change and empowering startups to shape the future.With a rich heritage spanning over two decades,
        our venture company has been at the forefront of fueling innovation, supporting promising startups, and fostering
        groundbreaking ideas that have revolutionized industries worldwide.</p>
    </div>
    <div id="carousel-container" @wheel="handleMouseScroll">
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
          <div class="card" v-for="(card, index) in  cards " :key="index">
            <div class="card-content">
              <img class="img" :src="card.image" />
              <div class="text-container2">
                <div class="card-info" v-if="index === currentCardIndex">
                  <h2 class="card-title">{{ card.title }}</h2>
                  <p class="card-text">{{ card.text }}</p>
                </div>
              </div>
              <div class="arrow-c">
                <div class="left-arrow-container">
                  <img class="left-arrow" @click="prev" src="~/assets/img/left-arrows.png" />
                </div>
                <div class="right-arrow-container">
                  <img class="right-arrow" @click="next" src="~/assets/img/right-arrows.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="header2">
      <h1>OUR INVESTMENT APPROACH</h1>
      <p>We are focused on four key factors that help us identify promising startups or better say... We make EVERYTHING
        promising!Our investment approach is driven by a meticulous evaluation of market dynamics, team expertise, product
        viability, and customer needs, ensuring a comprehensive assessment of startup potential. By combining strategic
        insights, rigorous analysis, and an unwavering belief in the power of innovation, we strive to transform every
        venture we back into a resounding success story that shapes the future of industries.</p>
    </div>
    <div class="row1-container">
      <div class="box box-down cyan">
        <h2>Growing Markets</h2>
        <p>We look for startups that are addressing large and growing markets with significant untapped potential. We
          assess the size of the market, the competitive landscape, and the potential for disruption.</p>
        <img class="ikona" src="~/assets/img/market-analysis.png">
      </div>
      <div class="box red">
        <h2>Team Experience</h2>
        <p>We believe that the founding team is critical to the success of any startup. We evaulate the team's experience,
          skills, and track record to ensure that they have the expertise and leadership necessary to execute on their
          vision. </p>
        <img class="ikona" src="~/assets/img/teamexp.png">
      </div>
      <div class="box box-down blue">
        <h2>Startup Products</h2>
        <p>We evaluate the startup's product or technology to ensure that it has a strong competitive advantage and
          addresses a real customer need. We assess the potential for scalability and the potential for further innovation
          and development.</p>
        <img class="ikona" src="https://assets.codepen.io/2301174/icon-calculator.svg">
      </div>
    </div>
    <div class="row2-container">
      <div class="box orange">
        <h2>Customer Needs</h2>
        <p>We focus on analyzing the alignment with market demand and customer needs. We assess the clarity and
          feasibility of the company's objectives, ensuring that they are relevant and time-bound.
          We evaluate the strategic plans, including actions and milestones outlined to achieve the specific objectives.
        </p>
        <img class="ikona" src="~/assets/img/customer-need.png">
      </div>
    </div>

    <div id="header3">
      <h1>WHAT WE OFFER TO COMPANIES</h1>
      <p>Once we have identified a promising startup, we work closely with the founding team to provide support, guidance,
        and resources to help them achieve their goals. Our team's extensive network and industry connections give our
        portfolio companies a competitive advantage in their respective markets.Our goal is to provide all companies with
        the resources they need to succeed, no matter what challenges
        they may face.</p>
    </div>
    <div class="card-o-row">
      <div class="card-o">
        <img
          src="https://media.istockphoto.com/id/494940062/photo/financial-concept-business-and-money.jpg?b=1&s=170667a&w=0&k=20&c=XPiQNsS1zIOyNLFDeffchh6T03A_mkR2IkBP06J9iyw="
          alt="">
        <div class="card-content-o">
          <h2>
            SUPPORT
          </h2>
          <p> We believe that investing in a startup is more than just providing funding. We take a hands-on approach to
            investing, working closely with our companies to provide the support they need to succeed. We are always
            available to provide support and
            answer questions.
          </p>
          <a href="#" class="button-o">
            Contact for info. or questions
            <span class="material-symbols-outlined">
            </span>
          </a>
        </div>
      </div>
      <div class="card-o">
        <img
          src="https://media.istockphoto.com/id/950986640/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?b=1&s=170667a&w=0&k=20&c=RvubsRQ8G-ZHiD0VyahnuZWKoQ-88HMnGQMBFSnOBjU="
          alt="">
        <div class="card-content-o">
          <h2>
            GUIDANCE
          </h2>
          <p>
            We work with out founding team to help companies develop their strategy and execute on their vision. We have a
            deep understanding of the challenges that startups face, and we draw on this knowledge to provide targeted
            guidance to our porfolio companies.
          </p>
          <a href="#" class="button-o">
            Contact for info. or questions
            <span class="material-symbols-outlined">
            </span>
          </a>
        </div>
      </div>
      <div class="card-o">
        <img
          src="https://media.istockphoto.com/id/1468415656/photo/interest-rate-and-dividend-concept-businessman-with-percentage-symbol-and-up-arrow-interest.jpg?b=1&s=170667a&w=0&k=20&c=TeLXGpi5W-S04Lq0pSFluYu-xb7TpLa3isCcUiMOJb4="
          alt="">
        <div class="card-content-o">
          <h2>
            RESOURCES
          </h2>
          <p>
            We provide our portfolio companies with a wide range of resources. We provide them with access to a variety of
            services, such as marketing and branding support, legal and accounting services, and HR and recruiting
            support.
          </p>
          <a href="#" class="button-o">
            Contact for info. or questions
            <span class="material-symbols-outlined">
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="row3-container">
      <div class="col3">
        <router-link to="/people" class="nav-link-end">
          <a class="card13">
            <h3>MEET OUR TEAM</h3>
            <div class="go-corner">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: 'https://images.unsplash.com/photo-1652109629663-1fbc7b2ff7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
          title: 'VenTour: A Century of Pioneering Investments',
          text: 'Everything started in 1907 and none of us knew that be would witness the birth of VenTour, a trailblazing venture capital company that has shaped industries and empowered entrepreneurs for over a hundred years.'
        },
        {
          image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: "Forging a Legacy: VenTour's Early Years of Innovation",
          text: "The relentless determination and tireless efforts marked VenTour's formative years, as visionary founders and dedicated teams worked tirelessly to lay the foundation for a venture capital empire. It took us years and year of hardworking hours and study to rise up till here.",
        },
        {
          image: 'https://media.wnyc.org/i/800/0/c/85/1/47244u.jpg',
          title: "Sealing the Future: VenTour's Inaugural Contract",
          text: 'Now we look back in 1920, at the historic moment of the pioneers of VenTour gather to sign their first groundbreaking contract, igniting a new era of investment and setting the stage for unprecedented growth.'
        },
        {
          image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          title: "Fueling Ambition: VenTour's Journey Driven by Passion",
          text: "The driving force behind VenTour's remarkable journey is our unwavering passion for innovation and bold investments, which  propels us to new heights in the ever-evolving landscape of venture capital."
        },
        {
          image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          title: "The Power of Collaboration: VenTour's Collective Vision",
          text: "Through years we have experienced  the energy and collective wisdom of VenTour's dedicated team as they gather for a transformative meeting, strategizing and shaping the future of investments with their diverse expertise and shared commitment."
        },
        {
          image: 'https://media.istockphoto.com/id/530686057/photo/portrait-of-young-man-holding-trophy-standing-in-conference-room-smiling-to-applauding-audience.jpg?b=1&s=170667a&w=0&k=20&c=of1xAxrNRRRN6p1V7cRhBiTW0O-lIEQxhCDOGwJu0L4=',
          title: "Excellence Recognized:Best Company of the Year",
          text: 'Witness a moment of well-deserved celebration as a proud member of VenTour holds the prestigious award for "Best Company of the Year 2023", a testament to their relentless pursuit of excellence in the realm of venture capital.'
        },
      ],
      innerStyles: {},
      step: '',
      transitioning: false,
      currentCardIndex: 0,
    }
  },

  mounted() {
    this.setStep()
    this.resetTranslate()
  },

  methods: {
    handleMouseScroll(event) {
      const deltaX = event.deltaX
      if (deltaX > 0) {
        this.next()
      } else if (deltaX < 0) {
        this.prev()
      }
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `0%`
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });

      // Update the current card index
      this.currentCardIndex = (this.currentCardIndex) % this.cards.length;
      // Hide the text of the previous card
      this.cards[this.currentCardIndex].showText = true;
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });

      // Update the current card index
      this.currentCardIndex = (this.currentCardIndex + this.cards.length) % this.cards.length;

      // Hide the text of the previous card
      this.cards[this.currentCardIndex].showText = true;
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },

    afterTransition(callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },

    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }

}
</script>

<style>
#back-c {
  width: 100%;
  background-image: url('assets/img/19449741.jpg');
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  overflow: hidden;

}


.background-section {
  background-image: url("https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?cs=srgb&dl=pexels-fauxels-3184338.jpg&fm=jpg");
  width: 100%;
  padding-top: 30%;
  position: relative;
  height: 300px;
  background-size: cover;
  background-position: fixed;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}


.container-a {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5%;
}

.container-a h3 {
  color: #262626;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.container-a p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
}

p.small {
  font-size: 14px;
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



.card1 {
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

.row3-container {
  padding-left: 75%;
  padding-bottom: 2%;
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

.col3 h3 {
  color: #262626;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.card1:before {
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

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card1:hover h3 {
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

.text-container-h {
  width: 600px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.big-text {
  background-color: white;
  color: black;
  font-size: 60px;
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  width: 28%;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
}

.small-text {
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  font-family: sans-serif;

}

.arrow-c {
  position: absolute;
  bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  z-index: 1;
}

.arrow-c::before {
  content: "";
  display: block;
  padding-top: 50%;
}


#carousel-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.carousel {
  width: 80% !important;
  overflow: hidden;
  display: flex;
  justify-content: left;
  height: 100%;
}

.inner {
  width: 100%;
  transition: transform 0.1s;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  align-items: left;
  justify-content: left;
  flex-grow: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 80% 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.card-content img {
  width: 75%;
  height: 100% !important;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
}

.text-container2 {
  width: 70%;
  position: relative;
  bottom: 27%;
  height: 15%;
  text-align: justify;
  padding: 2%;
  background-color: rgba(233, 228, 228, 0.5);
}

.card-info {
  text-align: justify;
  font-family: sans-serif;
}

.card-title {
  font-size: 24px;
  max-width: 70%;
  margin: 0 0 10px;
  color: #110404;
}

.card-text {
  font-size: 18px;
  margin: 0;
  max-width: 80%;
  color: #110404;
  text-align: justify;
}

.left-arrow-container,
.right-arrow-container {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 40px;
  transform: translateY(-50%);
  cursor: pointer;
}

.left-arrow-container {
  left: calc(10% - 50px);
}

.right-arrow-container {
  right: calc(10% - 50px);
}

.left-arrow img,
.right-arrow img {
  height: auto;
  max-width: 100%;
}

:root {
  --red: hsl(0, 78%, 62%);
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --varyDarkBlue: hsl(234, 12%, 34%);
  --grayishBlue: hsl(228, 5%, 60%);
  --veryLightGray: hsl(0, 3%, 66%);
  --weight1: 200;
  --weight2: 400;
  --weight3: 600;
}

body {
  font-size: 16px;
  font-family: sans-serif;
  background-color: var(--veryLightGray);
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

.card-o-row {
  gap: 2%;
  display: flex;
  justify-content: center;
  padding-bottom: 2%;
  width: 100%;
}

.card-o {
  display: inline-block;
  margin-right: 20px;
  position: relative;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  color: rgb(240, 240, 240);
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.5);
}

.card-o img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  transition: 1s ease-out;
}

.card-o h2 {
  opacity: 1;
  transition: transform 0.1s ease-in;
  font-size: 24px;
  position: absolute;
  margin: 0;
  font-family: sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  inset: auto auto 220px 30px;
}

.card-o .p,
.card-o .a {
  position: absolute;
  opacity: 0;
  max-width: 80%;
  transition: 0.3s ease-out;
}

.card-o .p {
  inset: auto auto 80px 30px;
}

.card-o .a {
  inset: auto auto 40px 30px;
  color: inherit;
  text-decoration: none;
}

.card-o:hover .card-content-o {
  display: block;
}

.card-content-o {
  display: none;
}

.card-content-o p {
  display: none;
}

.card-o:hover h2 {
  color: rgb(84, 82, 82);
  font-weight: bold;
  inset: auto auto 220px 30px;
}

.card-o:hover p,
.card-o:hover a {
  font-size: 18px;
  padding-top: 20%;
  color: black;
  z-index: 4;
  opacity: 0.9;
  transition: 0.1s ease-in;
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}

.card-o:hover img {
  transition: 0.3s ease-in;
  opacity: 0.4;
  transform: scaleY(0.0);
}

.card-o:hover .button-o {
  transition: 0.3s ease-in;
  opacity: 0.9;
  color: black;
}

.card-o:hover .button-o:hover {
  color: #045663;
}

.card-o:hover .card-content-o p {
  display: block;
}

.material-symbols-outlined {
  vertical-align: middle;
}

.nav-link-end {
  text-decoration: none;
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}

#header3 {
  padding-left: 10%;
  text-align: left;
  line-height: 0.8;
  margin-bottom: 1%;
  margin-top: 5%;
  z-index: 3;
}

#header3 p {
  font-size: 18px;
  padding-right: 20%;
  line-height: 2;
  color: var(--grayishBlue);
}

#header2 {
  padding-left: 10%;
  text-align: left;
  line-height: 0.8;
  margin-bottom: 1%;
  margin-top: 5%;
  z-index: 3;
}

#header2 p {
  font-size: 18px;
  padding-right: 20%;
  line-height: 2;
  color: var(--grayishBlue);
}

#header1 {
  font-family: sans-serif;
  font-size: 18px;
  padding-left: 10%;
  text-align: left;
  line-height: 0.8;
  margin-top: 5%;
}

#header1 p {
  font-size: 18px;
  padding-right: 20%;
  line-height: 2;
  color: var(--grayishBlue);
}


.box p {
  font-family: sans-serif;
  font-size: 18px;
  color: var(--grayishBlue);
  text-decoration-color: #1c1b1b;
}

.box {
  background-color: #c8dce0;
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px var(--varyDarkBlue);
  padding: 30px;
  margin: 20px;
}

.box .ikona {
  float: right;
  max-width: 25%;
  max-height: 100%;
}

@media (max-width: 450px) {
  .box {
    height: 200px;
  }
}

@media (max-width: 950px) and (min-width: 450px) {
  .box {
    text-align: center;
    height: 180px;
  }
}

.cyan {
  border-top: 3px solid var(--cyan);
}

.red {
  border-top: 3px solid var(--red);
}

.blue {
  border-top: 3px solid var(--blue);
}

.orange {
  border-top: 3px solid var(--orange);
}

h2 {
  color: var(--varyDarkBlue);
  font-weight: var(--weight3);
}


@media (min-width: 950px) {
  .row1-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row2-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-down {
    position: relative;
    top: 150px;
  }

  .box {
    width: 20%;

  }

  #header p {
    width: 30%;
  }

}

/* Media Queries */

@media (max-width: 768px) {
  #carousel-container {
    width: 90%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 40px;
    height: 30px;
  }

  .left-arrow-container {
    left: 50px;
  }

  .right-arrow-container {
    right: 50px;
  }
}

@media (max-width: 768px) {
  #carousel-container {
    width: 90%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 40px;

    height: 30px;
  }

  .left-arrow-container {
    left: 5%;
  }

  .right-arrow-container {
    right: 5%;
  }
}

@media (max-width: 480px) {
  #carousel-container {
    width: 95%;
    padding-top: 1%;
    height: 500px;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 30px;
    height: 20px;
  }

  .left-arrow-container {
    left: 2%;
  }

  .right-arrow-container {
    right: 2%;
  }
}
</style>

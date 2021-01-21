import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {return{
    currentId: "432984728397",
    img: {
      ninja: require("@/assets/vendor-ninja.svg"),
      bitcoin: require("@/assets/vendor-bitcoin.svg"),
      evil: require("@/assets/vendor-evil.svg"),
      blockchain: require("@/assets/vendor-blockchain.svg")
    }, cards: [
      {
        'id': "432984728397",
        'holder': "Christoffer Wallenberg",
        'vendor': "bitcoin",
        'number': "XXXXYYYYZZZZFFFF",
        'validMonth': "12",
        'validYear': "2021"
      },
      {
        'id': "432984728398",
        'holder': "Cobra Kaj",
        'vendor': "evil",
        'number': "XXXXYYYYZZZZFFFF",
        'validMonth': "12",
        'validYear': "2021"
      },
      {
        'id': "432984728399",
        'holder': "Hacker Viktor",
        'vendor': "blockchain",
        'number': "XXXXYYYYZZZZFFFF",
        'validMonth': "12",
        'validYear': "2021"
      },
      {
        'id': "432984728400",
        'holder': "Simon den store",
        'vendor': "ninja",
        'number': "XXXXYYYYZZZZFFFF",
        'validMonth': "12",
        'validYear': "2021 "
      },
    ], 
    inputCard: {
      'id': "",
      'holder': "Name",
      'vendor': "bitcoin",
      'number': "XXXXYYYYZZZZFFFF",
      'validMonth': "12",
      'validYear': "5"    
    }
  }}, methods: {
    getImg(name) {
      return this.img[name]
    }, getCards() {
      return this.cards
    }, getCard(id) {
      return this.cards.find(element => element.id === id)
    }, getInputCard() {
      return this.inputCard
    }, getId() {
      return this.currentId
    }
  }, watch: {
    cards(value) {
      this.inputCard.id = 432984728397 + value.length
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')

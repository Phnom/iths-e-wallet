<template>
  <div class="card-view">
    <Top class="top" :header="'E-Wallet'" />
    <Card @deleteCard="CardDelete=true" class="card" v-bind:cardInfo="cardInfo" />
    <CardDelete @clicked="DeleteCard" v-show="CardDelete" class="card-delete"/>
    <CardStack v-show="!CardDelete" class="card-stack" v-bind:id="cardId" />
    <router-link class="button" to="/addcard">Add a new card</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";
import CardDelete from "@/components/CardDelete.vue";

export default {
  data() {
    return {
      CardDelete: false,
      id: this.$root.getId(),
    };
  },
  computed: {
    cardInfo() {
      return this.$root.getCard(this.cardId);
    },
    cardId() {
      return this.$root.getId();
    },
  },
  components: {
    Top,
    Card,
    CardStack,
    CardDelete
  }, methods: {
    DeleteCard(value) {
      if (value) {
        this.$root.deleteActiveCard()
        this.CardDelete = false
      } else {
        this.CardDelete = false
      }
    }
  }
};
</script>
<style scoped>
.card-view {
  display: grid;
  grid-template-rows: auto repeat(3, 1fr) auto;
  align-content: center;
}
.top {
  grid-row: 1/2;
}
.card {
    grid-row: 2/3;
}
.card-delete, .card-stack {
  grid-row: 3/4;
}
.button {
  grid-row: 5/6;
  text-decoration: none;
  background: white;
  color: black;
  align-self: center;
  padding: auto;
  border: 0.2rem solid black;
  padding: auto;
  border-radius: 0.7rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
}
.button:hover {
  background: black;
  color: white;
}
@media screen and (min-width: 1000px) {
  .card-view {
    justify-content: center;
  }
}
</style>
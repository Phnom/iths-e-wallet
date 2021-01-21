<template>
  <div class="card-view">
    <Top class="top"/>
    <Card class="card" v-bind:cardInfo="cardInfo" />
    <CardStack @clicked="changeId()" class="card-stack" v-bind:id="id" />
    <router-link class="button" to="/addcard">Add a new card</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  data() {
    return {
      id: this.$root.getId(),
    }
  },
  computed: {
    cardInfo() {
      return this.$root.getCard(this.id);
    },
  },
  components: {
    Top,
    Card,
    CardStack,
  }, methods: {
    changeId(value) {
      this.id = value
    }
  }
};
</script>
<style scoped>
.card-view {
  display: grid;
  grid-template-rows: auto auto 1fr 1fr auto;
}
.top {
  grid-row: 1/2;
}
.card {
  grid-row: 2/3;
}
.card-stack {
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
  width: 100%;
  font-size: 2rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button:hover {
  background: black;
  color: white;
}
@media screen and (min-width: 1000px) {
.card-view  {
  justify-content: center;
}
}
</style>
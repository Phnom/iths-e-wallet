<template>
<div class="card-stack">
    <Card class="card-stack-card" @changeCard="changeActiveCard" v-for="(item, index) of cards" :style="{zIndex:index, top:index*10+'%'}" v-bind:key="item.id" v-bind:cardInfo="item" v-show="item.id != id"/>
</div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
    data() {return {
        cards: []
    }},
  components: {
    Card,
  }, created() {
      this.cards = this.$root.getCards()
  }, props: {
      id: String
  }, methods: {
      changeActiveCard(value) {
          this.$root.currentId = value
      }
  }
}
</script>

<style scoped>
.card-stack {
    cursor: pointer;
    display: grid;
    grid-auto-rows: 4rem;
}
</style>
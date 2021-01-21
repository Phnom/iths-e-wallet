<template>
<div class="card-stack">
    <Card class="card-stack-card" v-for="(item, index) of cards" :style="{zIndex:index, top:index*10+'%'}" @click="changeCard()" v-bind:key="item.id" v-bind:cardInfo="item" v-show="item.id != id"/>
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
      changeCard(event) {
          this.$root.currentId = event.id
      }
  }
}
</script>

<style scoped>
.card-stack {
    display: grid;
    grid-auto-rows: 4rem;
}
</style>
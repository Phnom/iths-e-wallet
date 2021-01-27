<template>
  <div class="add-card">
    <Top :header="'Add a new bank card'" />
    <p>NEW card</p>
    <Card v-bind:cardInfo="getCard"/>
    <CardForm class="card-form"/>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  components: {
    Top,
    Card,
    CardForm,
  }, computed: {
    getCard() {
      return this.$root.getInputCard()
    }
  }
};
</script>

<style scoped>
p {
  color: grey;
}
.add-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 12rem;
}
.card-form {
  width: 100%;
}
@media screen and (min-width: 1000px) {
.add-card {
  align-items: center;
}
}
</style>
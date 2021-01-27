<template>
  <div class="card-delete">
      <p>Do you want to delete this card?</p>
      <div class="answer">
        <p @click="YesClick()">YES</p>
        <p @click="NoClick()">NO</p>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    YesClick() {
      this.$emit("clicked", true)
    },
    NoClick() {
      this.$emit("clicked", false)
    }
  }
};
</script>

<style scoped>

.card-delete > p {
  font-size: 0.8rem;
}
.answer > p {
  font-size: 1.4rem;
}
.answer > p:hover {
  font-weight: 600;
}
.answer > p:nth-child(2):hover {
  color: red;
}
.answer > p:first-child:hover {
  color: green;
}
.card-delete {
  height: 14rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
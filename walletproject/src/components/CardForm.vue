<template>
  <div class="card-form">
    <label for="cardNumber">Card Number</label>
    <input type="text" name="cardNumber" v-model="cardInfo.number" />
    <label for="cardName">Cardholder Name</label>
    <input v-model="cardInfo.holder" type="text" name="cardName" />
    <div>
      <div class="card-form-valid">
        <label for="validMonth">Month</label>
        <div>
          <select class="selections" name="validMonth" v-model="cardInfo.validMonth">
            <option v-for="item of 12" :key="item" :value="item" >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="card-form-valid">
        <label for="validYear">Year</label>
        <select class="selections" name="validYear" v-model="cardInfo.validYear">
          <option v-for="item of 10" :key="item" :value="2020 + item">
            {{ 2020 + item }}
          </option>
        </select>
      </div>
    </div>

    <label for="cardVendor">Vendor</label>
    <select class="selections" v-model="cardInfo.vendor" name="cardVendor">
      <option value="" selected>Choose your vendor</option>
      <option value="bitcoin">Bitcoin</option>
      <option value="blockchain">Blockchain</option>
      <option value="evil">Evil</option>
      <option value="ninja">Ninja</option>
    </select>
    <a href="#" class="button" @click="addCard()">Add Card</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardInfo: {
        id: 0,
        holder: "",
        vendor: "",
        number: "",
        validMonth: "1",
        validYear: "2021",
      },
    };
  },
  methods: {
    addCard() {
      this.$root.cards.push(this.$root.inputCard);
      this.$router.push("/");
    },
  },
  created() {
    this.$root.inputCard = this.cardInfo;
  },
};
</script>

<style scoped>
.card-form {
  max-width: 24rem;
  height: 14rem;
}
.card-form input {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
}
.button {
  margin-top: 2.4rem;
  text-decoration: none;
  background: white;
  color: black;
  border: 0.12rem solid black;
  align-self: center;
  padding: 0.4rem;
  border-radius: 0.7rem;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 700;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button:hover {
  background: black;
  color: white;
}
label {
  margin-top: 0.8rem;
  text-align: left;
  font-size: 0.7rem;
}
.card-form,
.card-form-valid {
  display: flex;
  flex-direction: column;
}
.card-form-valid {
  width: 47%;
}
.selections  {
  width: 100%;
  border: 1px solid #000;
  border-radius: .25rem;
  padding: .5rem;
  height: 2.6rem;
  margin: 0 0 .8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}
.card-form > div {
  display: flex;
  justify-content: space-between;
}
</style>
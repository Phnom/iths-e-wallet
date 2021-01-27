<template>
  <div class="card-form">
    <label
      :class="{ error: inputError && cardInfo.number.length != 16 || cardInfo.number.length > 16}"
      for="cardNumber"
      >Card Number</label
    >
    <input
      :placeholder="errorMsgNumber"
      type="text"
      name="cardNumber"
      v-model="cardInfo.number"
    />
    <label :class="{ error: inputError && cardInfo.holder < 3 }" for="cardName"
      >Cardholder Name</label
    >
    <input
      :placeholder="errorMsgHolder"
      v-model="cardInfo.holder"
      type="text"
      name="cardName"
    />
    <div>
      <div class="card-form-valid">
        <label
          :class="{ error: inputError && cardInfo.validMonth.length > 1 }"
          for="validMonth"
          >Month</label
        >
        <div>
          <select
            :class="{ error: inputError && cardInfo.validMonth === 0 }"
            class="selections"
            name="validMonth"
            v-model="cardInfo.validMonth"
          >
                <option value="0"></option>
            <option v-for="item of 12" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="card-form-valid">
        <label
          :class="{ error: inputError && cardInfo.validYear === 0 }"
          for="validYear"
          >Year</label
        >
        <select
          class="selections"
          name="validYear"
          v-model="cardInfo.validYear"
        >
              <option value="0000"></option>
          <option v-for="item of 11" :key="item" :value="String(2020 + item)">
            {{ 2020 + item }}
          </option>
        </select>
      </div>
    </div>

    <label :class="{ error: inputError && cardInfo.vendor.length > 0}" for="cardVendor"
      >Vendor</label
    >
    <select class="selections" v-model="cardInfo.vendor" name="cardVendor">
      <option value="not">Choose your vendor</option>
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
        vendor: "not",
        number: "",
        validMonth: "0",
        validYear: "0",
      },
      inputError: false,
    };
  },
  methods: {
    addCard() {
      if (this.cardInfo.number.length != 16) {
        this.cardInfo.number = "";
        this.inputError = true;
      } else if (this.cardInfo.holder.length < 3) {
        this.inputError = true;
      } else if (this.cardInfo.vendor === "not" || this.cardInfo.vendor.length === 0) {
        this.inputError = true;
      } else if (this.cardInfo.validYear.length === "0") {
        this.inputError = true;
      } else if (this.cardInfo.validMonth.length === "0") {
        this.inputError = true;
      } else {
        this.$root.cards.push(this.$root.inputCard);
        this.$router.push("/");
      }
    },
  },
  created() {
    this.$root.inputCard = this.cardInfo;
  },
  computed: {
    errorMsgNumber() {
      if (this.inputError) {
        return "Must be 16 character";
      } else {
        return "XXXX XXXX XXXX XXXX";
      }
    },
    errorMsgHolder() {
      if (this.inputError) {
        return "That's not right";
      } else {
        return "Firstname Lastname";
      }
    }
  },
};
</script>

<style scoped>

.error {
  color: red;
}
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
  align-self: center;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: white;
  color: black;
  border: 0.12rem solid black;
  border-radius: 0.7rem;
  margin-top: 2.4rem;
  padding: 0.4rem;
  font-size: 1.2rem;
  font-weight: 700;
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
.selections {
  width: 100%;
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
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
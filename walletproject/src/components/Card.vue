<template>
  <div class="card" :style="{ backgroundColor: getBColor, color: getColor }">
    <div class="card-img">
      <Chip v-bind:chipFill="getChipFill" />
      <img :src="vendorImg" alt="" />
    </div>
    <p class="card-number">{{ getNumber }}</p>
    <div class="card-holder">
      <span class="card-holder-label">cardholder name</span>
      <p class="card-holder-name">{{ getName }}</p>
    </div>
    <div class="card-valid">
      <span class="valid-label">Valid thru</span>
      <p class="valid-date">
        {{ cardInfo.validMonth }}/{{ cardInfo.validYear }}
      </p>
    </div>
  </div>
</template>

<script>
import Chip from "@/components/Chip.vue";
export default {
  data() {
    return {
      currentCardNumber: ""
    };
  },
  components: {
    Chip,
  },
  computed: {
    vendorImg() {
      return this.$root.getImg(this.cardInfo.vendor);
    },
    getName() {
      if (this.cardInfo.holder.length === 0) {
        return "Name"
      } else {
        return this.cardInfo.holder
      }
    },
    getNumber() {
        return (
        this.cardInfo.number.slice(0, 4) +
        " " +
        this.cardInfo.number.slice(4, 8) +
        " " +
        this.cardInfo.number.slice(8, 12) +
        " " +
        this.cardInfo.number.slice(12, 16)
      )
    },
    getColor() {
      if (this.cardInfo.vendor === "bitcoin" || this.cardInfo.vendor.length === 0) {
        return "#222";
      } else {
        return "#fff";
      }
    },
    getBColor() {
      if (this.cardInfo.vendor === "bitcoin") {
        return "#ffae34";
      } else if (this.cardInfo.vendor === "ninja") {
        return "#222";
      } else if (this.cardInfo.vendor === "blockchain") {
        return "#8b58f9";
      } else if (this.cardInfo.vendor === "evil") {
        return "#f33355";
      } else {
        return "#d0d0d0"
      }
    },
    getChipFill() {
      if (this.cardInfo.vendor == "bitcoin") {
        return "#222";
      } else {
        return "#fff";
      }
    },
  },
  props: {
    cardInfo: Object,
  }, watch: {
    cardInfo(value) {
      this.currentCardNumber = "XXXXXXXXXXXXXXXX"
      this.currentCardNumber.subString(0, value.number)
      this.currentCardNumber += value.number
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  white-space: nowrap;
  text-transform: uppercase;
}
.card {
  width: 100%;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5fr auto 3fr;
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
}
.card-img {
  grid-row: 1/2;
  grid-column: 1 / end;
  display: flex;
  justify-content: space-between;
}
.card-img > :nth-child(2) {
  align-self: start;
}
.card-holder {
  text-align: left;
  grid-row: 3 / end;
  grid-column: 1/9;
  align-self: end;
}
.card-valid {
  text-align: right;
  grid-row: 3 / end;
  grid-column: 9 / end;
  align-self: end;
}
.card-valid > p,
.card-holder > p {
  font-size: 1rem;
  font-weight: 600;
}
.card-valid > span,
.card-holder > span {
  font-size: 0.7rem;
}
.card-number {
  align-self: center;
  font-size: 2rem;
  grid-row: 2 / 3;
  grid-column: 1 / end;
}
</style>
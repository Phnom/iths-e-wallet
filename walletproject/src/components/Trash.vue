<template>
<svg @click="trashClicked()" width="34" height="50" viewBox="0 0 62 102" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.24265 35.9411L32.9411 6.24265C33.7222 5.4616 34.9885 5.4616 35.7696 6.24265L38.598 9.07107L6.07107 41.598L3.24265 38.7696C2.4616 37.9885 2.4616 36.7222 3.24265 35.9411ZM1.82843 40.1838C0.266336 38.6217 0.266336 36.089 1.82843 34.5269L9.10883 27.2465C7.19376 25.4248 6.00001 22.8518 6.00001 20C6.00001 14.4771 10.4772 10 16 10C18.8518 10 21.4248 11.1938 23.2465 13.1088L31.5269 4.82843C33.089 3.26634 35.6217 3.26634 37.1838 4.82843L40.0122 7.65686L41.4264 9.07107L40.0122 10.4853L7.48529 43.0122L6.07107 44.4264L4.65686 43.0122L1.82843 40.1838ZM21.8318 14.5236C20.3725 12.9702 18.2995 12 16 12C11.5817 12 8.00001 15.5817 8.00001 20C8.00001 22.2995 8.97021 24.3724 10.5236 25.8318L21.8318 14.5236Z" :fill="color"/>
<rect x="11" y="49" width="6" height="48" rx="3" :stroke="color" stroke-width="2"/>
<rect x="22.3333" y="49" width="6" height="48" rx="3" :stroke="color" stroke-width="2"/>
<rect x="33.6667" y="49" width="6" height="48" rx="3" :stroke="color" stroke-width="2"/>
<rect x="45" y="49" width="6" height="48" rx="3" :stroke="color" stroke-width="2"/>
<path d="M7 45H55V98C55 99.6569 53.6569 101 52 101H10C8.34315 101 7 99.6569 7 98V45Z" :stroke="color" stroke-width="2"/>
</svg>
</template>

<script>
export default {
    computed: {
        color() {
            if (this.vendor === "bitcoin") {
                return "black"
            }
            return "white"
        }
    },
    props: {
        vendor: String
    }, methods: {
        trashClicked() {
            this.$emit("clicked")
        }
    }
}
</script>

<style>

</style>
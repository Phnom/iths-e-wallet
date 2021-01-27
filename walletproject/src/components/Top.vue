<template>
<h1>{{header}}</h1>
</template>

<script>
export default {
props: {
    header: String
}
}
</script>

<style scoped>
h1 {
    font-size: 3.2rem;
}
</style>
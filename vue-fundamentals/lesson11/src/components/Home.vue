<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log("Home component unmounted");
  },
  activated() {
    console.log("Home component activated");
  },
  deactivated() {
    console.log("Home component deactivated");
  },
};
</script>

<style scoped>
h1{
  margin: 5px;
  color: red;
  font-size: 100px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
<template>
  <div id="app">
    To open press
    <kbd>ctrl</kbd>+
    <kbd>space</kbd>
    <spotlight apiUrl="xxx"/>
  </div>
</template>

<script>
import Spotlight from "./components/Spotlight.vue";

export default {
  name: "app",
  components: { Spotlight }
};
</script>

<style>
kbd {
  border: 1px solid #666666;
  border-radius: 4px;
  padding: 3px 5px;
  margin: 2px;
  color: #444444;
  text-decoration: none;
}
</style>

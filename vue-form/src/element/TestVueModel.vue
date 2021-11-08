<template>
  <div>
    <custom-input v-model="searchText"></custom-input>
    <p>{{ searchText }}</p>
  </div>
</template>

<script>
import CustomInput from "./element2/CustomInput.vue";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  components: {
    CustomInput,
  },
};
</script>

<style></style>

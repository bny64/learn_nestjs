<template>
  <div :appData="appData">
    {{ changeAppData }}
  </div>
</template>

<script>
export default {
  props: { appData: Object },
  computed: {
    changeAppData: function () {
      return this.appData;
    },
  },
};
</script>

<style></style>

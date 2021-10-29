<template>
  <div>
    <div>
      <v-for></v-for>
      <array-change></array-change>
      <event-handler></event-handler>
    </div>
  </div>
</template>

<script>
import VFor from "./element/VFor.vue";
import ArrayChange from "./element/ArrayChange.vue";
import EventHandler from "./element/EventHandler.vue";

export default {
  components: {
    VFor,
    ArrayChange,
    EventHandler,
  },
};
</script>

<style></style>

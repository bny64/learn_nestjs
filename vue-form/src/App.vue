<template>
  <div>
    <div>
      <v-for></v-for>
      <array-change></array-change>
      <event-handler></event-handler>
      <props-bind :appData="smartPhone"></props-bind>
    </div>
  </div>
</template>

<script>
import VFor from "./element/VFor.vue";
import ArrayChange from "./element/ArrayChange.vue";
import EventHandler from "./element/EventHandler.vue";
import PropsBind from "./element/PropsBind.vue";

export default {
  components: {
    VFor,
    ArrayChange,
    EventHandler,
    PropsBind,
  },
  data() {
    return {
      smartPhone: {
        button: true,
        screen: true,
        camera: true,
        fly: false,
      },
    };
  },
};
</script>

<style></style>

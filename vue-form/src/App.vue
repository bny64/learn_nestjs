<template>
  <div>
    <div>
      <v-for></v-for>
      <array-change></array-change>
      <event-handler></event-handler>
      <props-bind :appData="smartPhone"></props-bind>
      <type-check
        :typeCheckData1="typeCheckData1"
        :typeCheckData2="typeCheckData2"
      ></type-check>
      <non-prop data-status="activated"></non-prop>
    </div>
  </div>
</template>

<script>
import VFor from "./element/VFor.vue";
import ArrayChange from "./element/ArrayChange.vue";
import EventHandler from "./element/EventHandler.vue";
import PropsBind from "./element/PropsBind.vue";
import TypeCheck from "./element/TypeCheck.vue";
import NonProp from "./element/NonProp.vue";

export default {
  components: {
    VFor,
    ArrayChange,
    EventHandler,
    PropsBind,
    TypeCheck,
    NonProp,
  },
  data() {
    return {
      smartPhone: {
        button: true,
        screen: true,
        camera: true,
        fly: false,
      },
      typeCheckData1: 1000,
      typeCheckData2: "string",
    };
  },
};
</script>

<style></style>

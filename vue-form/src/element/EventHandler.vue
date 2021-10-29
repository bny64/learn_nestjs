<template>
  <div>
    <button @click="clickEvt">Btn</button>
    <button v-on:click="clickEvt('parameter', $event), clickEvt2($event)">
      Btn
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clickEvt: function (parameter) {
      if (typeof parameter === "string") console.log(parameter);
      else console.log("hi");
    },
    clickEvt2: function () {
      console.log("click evt 2");
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <h2>CUSTOM EVENT</h2>
    <button @click="sendData">BUTTON</button>
  </div>
</template>

<script>
export default {
  emits: {
    "sending-start": function () {
      console.log(`CustomEvent : emits : sending-start`);
      return true;
    },
  },
  methods: {
    sendData() {
      console.log(`CustomEvent.vus : sendData`);
      this.$emit("sending-start", { param: 100 });
    },
  },
};
</script>

<style></style>

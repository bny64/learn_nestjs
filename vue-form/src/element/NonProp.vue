<template>
  <div class="date-picker">
    <input type="datetime" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$attrs);
  },
  methods: {
    changeEvt: function () {
      this.$emit("change1");
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <h3>
      typeCheckData1 : {{ typeCheckData1 }} typeCheckData2 :
      {{ typeCheckData2 }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    typeCheckData1: {
      type: Number,
    },
    typeCheckData2: String,
  },
};
</script>

<style></style>

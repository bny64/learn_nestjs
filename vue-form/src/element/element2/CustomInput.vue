<template>
  <div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
};
</script>

<style></style>

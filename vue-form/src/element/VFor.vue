<template>
  <div>
    <h4>v-bind:key는 숫자 혹은 문자열을 사용해야 한다.</h4>
    <h4>템플릿도 반복 가능</h4>
    <h3>v-for array</h3>
    <li v-for="(element, index) in arr" :key="element.id">
      {{ index }} : {{ element }}
    </li>
    <h3>v-for object</h3>
    <li v-for="(element, name, index) in obj" v-bind:key="element.id">
      {{ index }} {{ name }} : {{ element }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["marine", "medic", "firebat"],
      obj: { samsung: "good", apple: "good2", lenovo: "good3" },
    };
  },
};
</script>

<style></style>

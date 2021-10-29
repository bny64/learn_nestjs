<template>
  <div>
    <ul>
      <li v-for="n in evenNumbers" :key="n.id">{{ n }}</li>
    </ul>
    <!-- <ul v-for="numbers in sets" :key="numbers.id">
      <li v-for="n in even(numbers)" :key="n.id">{{ n }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    //computed 내에서 사용되는 data가 변경되면 함수 실행.
    evenNumbers() {
      console.log("compute");
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>

<style></style>

<template>
  <!-- //기본적으로 하나의 element만 있어야 된다. -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <!-- str속성이 app-header 컴포넌트로 내려간다. -->
    <app-header v-on:renew="renewString" v-bind:propsdata="str"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

/* var AppHeader = {
  template: "<header><h1>Header</h1></header>",
}; */

/* new Vue({
  data: {
    str: "hi",
  },
}); */

export default {
  data: function () {
    return {
      str: "Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewString: function () {
      this.str = "hi";
    },
  },
};
</script>

<style></style>

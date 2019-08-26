<template>
  <div class="mavonEditor">
    <no-ssr>
      <mavon-editor  v-model="handbook" :toolbarsFlag="true" :subfield="false" :defaultOpen="'preview'" :navigation="true"/>
    </no-ssr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
      },
      handbook: "#### how to use mavonEditor in nuxt.js"
    };
  }
};
</script>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>
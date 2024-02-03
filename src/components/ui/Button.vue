<template>
  <button v-if="!link" :class="variant">
    <slot />
  </button>
  <RouterLink v-else :to="to" :class="variant">
    <slot />
  </RouterLink>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: null,
    },
    link: {
      type: Boolean,
      default: false,
    },
    to: String,
  },
}
</script>

<style scoped>
button,
a {
  padding: 12px 24px;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outlined {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outlined:hover,
.outlined:active {
  background-color: #edd2ff;
}
</style>

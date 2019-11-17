<template>
  <span class="const const__container">{{ value }}</span>
</template>

<script>
export default {
  name: 'Const',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    userDefinedEnvConstants() {
      return userDefinedEnvConstants
    },
    value() {
      return this.userDefinedEnvConstants[this.name]
    },
  },
}
</script>

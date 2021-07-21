<template>
  <footer
    p="t-20 x-4"
    text="center"
    transition="opacity duration-700"
    opacity="lg:0 hover:100 focus-within:100 focus-visible:100"
  >
    © {{ new Date().getFullYear() }} — {{ t('built-by') }}
    {{ " " }}
    <a href="https://vincenterprise.com">VincEnterprise</a>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

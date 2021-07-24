<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'wavio',
  meta: [
    { name: 'description', content: t('intro.desc') },
  ],
})
</script>

<template>
  <router-view />
</template>

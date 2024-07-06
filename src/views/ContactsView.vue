<script setup>
import AppHeader from '@/components/chapters/AppHeader.vue'
import AppFooter from '@/components/chapters/AppFooter.vue'
import SectionTitle from '@/components/elements/titles/SectionTitle.vue'
</script>

<template>
  <AppHeader />
  <div class="page__container">
    <SectionTitle :settings="{ text: 'Контакты', teg: 'h1' }" />
  </div>
  <AppFooter />
</template>

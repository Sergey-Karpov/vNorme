<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  settings: Object
})
</script>

<template>
  <div class="section-title">
    <div class="section-title__inner">
      <h2 v-if="settings.teg === 'h2'">{{ settings.text }}</h2>
      <h1 v-else>{{ settings.text }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  // .section-title__inner
  &__inner {
    padding: 0 0 20px 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    @include media-medium {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    @include media-extra-small {
      gap: 6px;
    }

    h1,
    h2 {
      @include M-b32;
      color: $black;

      @include media-medium {
        @include M-b24;
      }

      @include media-extra-small {
        line-height: 36px;
      }
    }
  }
}
</style>

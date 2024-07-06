<script setup>
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import { defineEmits } from 'vue'

const emits = defineEmits(['click'])

// Обработчик клика по кнопке
const handleClick = () => {
  emits('click')
}
</script>

<template>
  <button @click="handleClick" class="burger-button">
    <i>
      <BurgerIcon />
    </i>
  </button>
</template>

<style scoped lang="scss">
.main-btn {
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  width: fit-content;
  align-self: center;
  background-color: $white;
  border-radius: 40px;
  border: 1px solid $primary-hover;
  @include defaultTransition;

  @include hover {
    background-color: $primary-hover;
  }

  &:disabled {
    pointer-events: none;
    background-color: $lighter;

    span {
      color: $light;
    }
  }

  &.main-btn--gradient {
    border-color: transparent;
    background: $primary-static;

    @include hover {
      background: $primary-hover;
    }

    &:active {
      background: $primary-press;
    }
  }
  &.main-btn--transparent {
    background: $secondary-static;
    border-color: transparent;

    @include hover {
      background: $secondary-hover;
    }

    &:active {
      background: $secondary-press;
    }
  }

  span {
    @include M-b16;
    color: $black;
  }
}
</style>

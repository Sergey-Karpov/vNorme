<script setup>
import { resetBodyOffset, toggleBodyOffset } from '@/helpers/utils'
import { defineProps, ref, watch, defineEmits } from 'vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

const props = defineProps({
  visible: Boolean
})

const localVisible = ref(props.visible)

watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {
      toggleBodyOffset()
    } else {
      resetBodyOffset()
    }
    localVisible.value = newValue
  }
)

const emit = defineEmits(['update:visible'])

const close = () => {
  localVisible.value = false
  emit('update:visible', false)
}
</script>

<template>
  <div :class="{ modal: true, fixed: true, active: localVisible }">
    <div class="modal__overlay" @click.self="close">
      <div class="modal__content">
        <slot></slot>
        <button class="modal__close" @click="close">
          <CloseIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  max-height: 100dvh;
  z-index: 100;
  pointer-events: none;

  @include media-min {
    min-width: $xxs;
    overflow-x: auto;
  }

  &.active {
    .modal__overlay,
    .modal__content,
    .modal__close {
      visibility: visible;
      pointer-events: all;
      opacity: 1;
    }

    .modal__content {
      transform: scale(1);
    }
  }

  // .modal__overlay
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    overflow-y: auto;
    @include fastTransition;

    @include media-min {
      min-width: $xxs;
      overflow-x: auto;
    }
  }

  // .modal__content
  &__content {
    position: relative;
    max-width: 75%;
    background-color: $white;
    border-radius: 32px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
    transform: scale(0.9);
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    @include fastTransition;

    @media screen and (max-width: 992px) {
      position: absolute;
      left: 2%;
      top: 60px;
    }

    @include media-medium {
      max-width: 90%;
    }

    @include media-extra-small {
      border-radius: 24px;
      left: auto;
      max-width: 95%;
    }
  }

  // .modal__close
  &__close {
    position: absolute;
    top: 0;
    left: calc(100% + 8px);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
    visibility: hidden;
    pointer-events: none;
    @include fastTransition;

    @include media-extra-small {
      right: 12px;
      top: 12px;
      left: auto;
      box-shadow: none;
    }
  }
}
</style>

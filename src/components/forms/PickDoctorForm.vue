<script setup>
import { ref, defineEmits, watch } from 'vue'
import LoopIcon from '@/components/icons/LoopIcon.vue'
import MainButton from '@/components/elements/UI/Buttons/MainButton.vue'

const query = ref('')

const emit = defineEmits(['update-query'])

const handleSubmit = () => {
  if (query.value.trim().length > 0) {
    emit('update-query', query.value)
  }
}

watch(query, (neVal) => {
  if (neVal.length === 0) {
    emit('update-query', query.value)
  }
})
</script>

<template>
  <div class="pick-doctor">
    <form class="pick-doctor__form" @submit.prevent="handleSubmit">
      <label>
        <input v-model="query" type="text" placeholder="Найти специалиста" />
        <i>
          <LoopIcon />
        </i>
      </label>
      <MainButton :settings="{ text: 'Найти', type: 'submit', modifier: 'main-btn--gradient' }" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.pick-doctor {
  // .pick-doctor__form
  &__form {
    display: grid;
    grid-template-columns: auto 90px;
    gap: 12px;
    align-items: center;

    label {
      position: relative;
    }

    input {
      padding: 12px 12px 12px 52px;
      width: 100%;
      @include M-r16;
      color: $black;
      outline: none;
      border: 2px solid $secondary-hover;
      border-radius: 40px;
      @include defaultTransition;

      @include hover {
        border-color: $secondary-press;
      }

      &::placeholder {
        @include M-r16;
        color: $medium;
      }
    }

    i {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

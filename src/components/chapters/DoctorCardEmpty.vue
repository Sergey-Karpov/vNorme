<script setup>
import { defineProps, defineEmits } from 'vue'
import MainButton from '@/components/elements/UI/Buttons/MainButton.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'

const props = defineProps({
  settings: Object
})

// const emits = defineEmits(['click'])

// // Обработчик клика по кнопке
// const handleClick = () => {
//   emits('click')
// }
</script>

<template>
  <div class="doctor-card-empty">
    <img src="../../assets/images/Doctors/card-empty.png" alt="" />
    <div class="doctor-card-empty__inner">
      <div class="doctor-card-empty__text">
        <span>Зарегистрируйтесь и получите доступ ко полному списку специалистам</span>
      </div>
      <div class="doctor-card-empty__actions">
        <MainButton
          :settings="{
            text: 'Зарегистрироваться',
            type: 'button',
            modifier: 'main-btn--transparent'
          }"
        />
        <MainButton
          :settings="{
            text: 'Войти',
            type: 'button'
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.doctor-card-empty {
  position: relative;
  border-radius: 32px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225.28deg, #00fff0 12.52%, #faff00 82.05%);
    opacity: 0.5;
    pointer-events: none;
  }

  // .doctor-card-empty__inner
  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    padding: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 72px;
  }

  // .doctor-card-empty__text
  &__text {
    max-width: 55%;
    text-align: center;
    @include M-b32;
    color: $black;
  }

  // .doctor-card-empty__actions
  &__actions {
    display: flex;
    align-items: center;
    gap: 35px;

    button {
      width: 240px;
    }
  }
}
</style>

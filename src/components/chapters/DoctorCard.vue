<script setup>
import { defineProps, computed, defineEmits } from 'vue'
import { usePsychologistsStore } from '@/stores/psychologists.js'
import MainButton from '@/components/elements/UI/Buttons/MainButton.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'

const emit = defineEmits(['show-details'])

const props = defineProps({
  settings: Object
})

const store = usePsychologistsStore()

const doctorSpecializations = computed(() => {
  return store.getSpecializationsByIds(props.settings.specializations)
})

const handleClickDetailsBtn = () => {
  emit('show-details', props.settings)
}
</script>

<template>
  <div class="doctor-card">
    <div class="doctor-card__inner">
      <div class="doctor-card__left">
        <div class="doctor-card__img-wrapper">
          <div class="doctor-img">
            <picture>
              <source :srcset="settings.img.pc" media="(min-width: 1280px)" />
              <source :srcset="settings.img.tablet" media="(min-width: 768px)" />
              <source :srcset="settings.img.mobile" media="(max-width: 767px)" />
              <img :src="settings.img.pc" :alt="settings.name" />
            </picture>
            <div class="doctor-img__badge">
              <span>Онлайн сессия {{ settings.cost }} ₽</span>
            </div>
          </div>
          <div class="doctor-preview__prop doctor-preview__prop--mobile-methods">
            <div class="doctor-preview__title">
              <span>Методики:</span>
            </div>
            <ul class="doctor-preview__list doctor-preview__list--methods">
              <li class="method" v-for="method in settings.methods" :key="method">
                {{ method }}
                <i tabindex="0">
                  <InfoIcon />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illum eveniet
                    dicta, deleniti nihil sapiente!
                  </p>
                </i>
              </li>
            </ul>
          </div>
        </div>
        <div class="doctor-card__actions">
          <MainButton
            :settings="{ text: 'Записаться', type: 'button', modifier: 'main-btn--gradient' }"
            ><ClockIcon
          /></MainButton>
          <MainButton
            :settings="{
              text: 'Подробнее о психологе',
              type: 'button',
              modifier: 'main-btn--transparent'
            }"
            @click="handleClickDetailsBtn"
          />
        </div>
      </div>
      <div class="doctor-card__right">
        <div class="doctor-preview">
          <div class="doctor-preview__inner">
            <div class="doctor-preview__header">
              <div class="doctor-preview__name">
                <h2>{{ settings.name }}</h2>
              </div>
              <div class="doctor-preview__experience">
                <span>Опыт {{ settings.experience }} лет</span>
                <span>Возраст {{ settings.ages }} лет</span>
              </div>
            </div>
            <div class="doctor-preview__prop doctor-preview__prop--methods">
              <div class="doctor-preview__title">
                <span>Методики:</span>
              </div>
              <ul class="doctor-preview__list doctor-preview__list--methods">
                <li class="method" v-for="method in settings.methods" :key="method">
                  {{ method }}
                  <i tabindex="0">
                    <InfoIcon />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illum eveniet
                      dicta, deleniti nihil sapiente!
                    </p>
                  </i>
                </li>
              </ul>
            </div>
            <div class="doctor-preview__prop doctor-preview__prop--specializations">
              <div class="doctor-preview__title">
                <span>Работает с запросами:</span>
              </div>
              <ul class="doctor-preview__list doctor-preview__list--specializations">
                <li v-for="specialization in doctorSpecializations" :key="specialization.id">
                  {{ specialization.title }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.doctor-card {
  background-color: $white;
  border-radius: 32px;
  overflow: hidden;

  // .doctor-card__inner
  &__inner {
    padding: 20px;
    display: grid;
    grid-template-columns: 240px auto;
    gap: 40px;
    align-items: flex-start;

    @include media-medium {
      padding: 20px 16px;
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  // .doctor-card__left
  &__left {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;

    @include media-medium {
      display: contents;
    }
  }

  // .doctor-card__img-wrapper
  &__img-wrapper {
    display: contents;

    @include media-medium {
      order: -4;
      display: grid;
      grid-template-columns: 310px auto;
      gap: 24px;
    }

    @include media-extra-small {
      grid-template-columns: 1fr;
    }
  }

  // .doctor-card__right
  &__right {
    @include media-medium {
      display: contents;
    }
  }

  // .doctor-card__actions
  &__actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;

    @include media-medium {
      order: -1;
      flex-direction: row;
    }

    @include media-extra-small {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
}

.doctor-img {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  background-image: url('../../assets/images/Doctors/avatar-bg.png');

  @include media-medium {
    width: 310px;
    height: 310px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  // .doctor-img__badge
  &__badge {
    position: absolute;
    bottom: 8px;
    left: 8px;
    padding: 4px 12px;
    width: calc(100% - 16px);
    color: $green;
    @include M-b16;
    background-color: $secondary-hover;
    border-radius: 40px;

    @include media-medium {
      width: fit-content;
    }
  }
}
.doctor-preview {
  @include media-medium {
    display: contents;
  }

  // .doctor-preview__inner
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    @include media-medium {
      display: contents;
    }
  }

  // .doctor-preview__header
  &__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: 1px solid $lighter;

    @include media-medium {
      order: -5;
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  // .doctor-preview__name
  &__name {
    @include M-b24;
    color: $black;
  }

  // .doctor-preview__experience
  &__experience {
    display: flex;
    align-items: center;
    gap: 12px;

    > * {
      @include M-b16;
      color: $medium;

      &:not(:last-child) {
        position: relative;
        padding-right: 16px;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: $medium;
        }
      }
    }
  }

  // .doctor-preview__prop
  &__prop {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;

    &.doctor-preview__prop--specializations {
      padding-top: 8px;

      @include media-medium {
        order: -3;
      }

      @include media-extra-small {
        padding-top: 0;
      }
    }

    &.doctor-preview__prop--methods {
      @include media-medium {
        display: none;
      }
    }

    &.doctor-preview__prop--mobile-methods {
      display: none;

      @include media-medium {
        display: flex;
      }
    }
  }

  // .doctor-preview__title
  &__title {
    @include M-b16;
    color: $darker;
  }

  // .doctor-preview__list
  &__list {
    width: 100%;

    &.doctor-preview__list--methods {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      align-items: center;
      gap: 12px;
    }
    &.doctor-preview__list--specializations {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;

      @include media-extra-small {
        grid-template-columns: 1fr;
      }

      li {
        position: relative;
        padding-left: 14px;
        @include M-m16;
        color: $medium;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: $medium;
        }
      }
    }
  }
}

.method {
  padding: 5.5px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  @include M-b14;
  color: $medium;
  background-color: $lighter;
  border-radius: 40px;

  i {
    position: relative;

    &:hover {
      p {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
    }

    p {
      padding: 12px;
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      width: 240px;
      height: auto;
      overflow-x: auto;
      background-color: $white;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      @include defaultTransition;
      z-index: 1;

      @include media-medium {
        left: auto;
        right: 0;
      }
      @include media-extra-small {
        transform: translateX(20%);
        width: 180px;
      }
    }
  }
}
</style>

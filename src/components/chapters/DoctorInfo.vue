<script setup>
import { defineProps, computed, ref } from 'vue'
import { usePsychologistsStore } from '@/stores/psychologists.js'
import MainButton from '@/components/elements/UI/Buttons/MainButton.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'

const props = defineProps({
  settings: Object
})

const store = usePsychologistsStore()

const doctorSpecializations = computed(() => {
  return store.getSpecializationsByIds(props.settings.specializations)
})

const aboutIsHidden = ref(true)
</script>

<template>
  <div class="doctor-info">
    <div class="doctor-info__inner">
      <div class="doctor-info__left">
        <div class="doctor-info__img-wrapper">
          <div class="doctor-img">
            <picture>
              <source :srcset="settings.img?.pc" media="(min-width: 1280px)" />
              <source :srcset="settings.img?.tablet" media="(min-width: 768px)" />
              <source :srcset="settings.img?.mobile" media="(max-width: 767px)" />
              <img :src="settings.img?.pc" :alt="settings.name" />
            </picture>
            <div class="doctor-img__badge">
              <span>Онлайн сессия {{ settings.cost }} ₽</span>
            </div>
          </div>
          <div class="doctor-info__prop doctor-info__prop--mobile-methods">
            <div class="doctor-info__title">
              <span>Методики:</span>
            </div>
            <ul class="doctor-info__list doctor-info__list--methods">
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
        <div class="doctor-info__actions">
          <MainButton
            :settings="{ text: 'Записаться', type: 'button', modifier: 'main-btn--gradient' }"
            ><ClockIcon
          /></MainButton>
        </div>
        <div class="doctor-info__prop doctor-info__prop--specializations">
          <div class="doctor-info__title">
            <span>Работает с запросами:</span>
          </div>
          <ul class="doctor-info__list doctor-info__list--specializations">
            <li v-for="specialization in doctorSpecializations" :key="specialization.id">
              {{ specialization.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="doctor-info__right">
        <div class="doctor-info__header">
          <div class="doctor-info__name">
            <h2>{{ settings.name }}</h2>
          </div>
          <div class="doctor-info__experience">
            <span>Опыт {{ settings.experience }} лет</span>
            <span>Возраст {{ settings.ages }} лет</span>
          </div>
        </div>
        <div class="doctor-info__prop doctor-info__prop--education">
          <div class="doctor-info__title">
            <span>Образование:</span>
          </div>
          <ul class="doctor-info__list doctor-info__list--education">
            <li class="education" v-for="item in settings.education">
              <span class="education__year">{{ item.year }}</span>
              <div class="education__description">
                <span class="education__diploma">{{ item.diploma }}</span>
                <span class="education__place">{{ item.place }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="doctor-info__prop doctor-info__prop--methods">
          <div class="doctor-info__title">
            <span>Методики:</span>
          </div>
          <ul class="doctor-info__list doctor-info__list--methods">
            <li class="method" v-for="method in settings.methods" :key="method">
              {{ method }}
              <i tabindex="0">
                <InfoIcon />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illum eveniet dicta,
                  deleniti nihil sapiente!
                </p>
              </i>
            </li>
          </ul>
        </div>
        <div class="doctor-info__prop doctor-info__prop--about">
          <div class="doctor-info__title doctor-info__title--has-line">
            <span>О себе</span>
          </div>
          <div :class="{ 'doctor-info__about': true, hidden: aboutIsHidden }">
            <p>{{ settings.about }}</p>
          </div>
          <button @click="aboutIsHidden = !aboutIsHidden" class="more-btn">
            {{ aboutIsHidden ? 'Читать дальше' : 'Скрыть' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.doctor-info {
  background-color: $white;
  border-radius: 32px;
  overflow: hidden;

  // .doctor-info__inner
  &__inner {
    padding: 20px;
    display: grid;
    grid-template-columns: 240px auto;
    gap: 40px;
    align-items: flex-start;

    @include media-medium {
      grid-template-columns: 1fr;
      padding: 16px 12px;
      gap: 24px;
    }
  }

  // .doctor-info__left
  &__left {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;

    @include media-medium {
      display: contents;
    }
  }

  // .doctor-info__img-wrapper
  &__img-wrapper {
    display: contents;

    @include media-medium {
      order: -4;
      display: grid;
      grid-template-columns: 240px auto;
      gap: 24px;
    }

    @include media-extra-small {
      grid-template-columns: 1fr;
    }
  }

  // .doctor-info__right
  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    @include media-medium {
      display: contents;
    }
  }

  // .doctor-info__actions
  &__actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;

    button {
      width: 100%;
    }
  }

  // .doctor-info__header
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

  // .doctor-info__name
  &__name {
    @include M-b24;
    color: $black;
  }

  // .doctor-info__experience
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

  // .doctor-info__prop
  &__prop {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;

    &.doctor-info__prop--about {
      padding-right: 74px;

      @include media-medium {
        order: -3;
      }

      @include media-extra-small {
        padding-right: 12px;
      }
    }

    &.doctor-info__prop--methods {
      @include media-medium {
        display: none;
      }
    }

    &.doctor-info__prop--mobile-methods {
      display: none;

      @include media-medium {
        display: block;
      }
    }

    &.doctor-info__prop--specializations {
      @include media-medium {
        order: -4;
      }
    }

    &.doctor-info__prop--education {
      @include media-medium {
        order: -2;
      }
    }
  }

  // .doctor-info__title
  &__title {
    @include M-b16;
    color: $light-dark;

    &.doctor-info__title--has-line {
      width: 100%;
      padding-bottom: 12px;
      border-bottom: 1px solid $lighter;

      @include media-medium {
        padding-bottom: 0;
        border-bottom: 0;
      }
    }
  }

  // .doctor-info__list
  &__list {
    width: 100%;

    &.doctor-info__list--methods {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      align-items: center;
      gap: 12px;
    }

    &.doctor-info__list--specializations {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;

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

    &.doctor-info__list--education {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  // .doctor-info__about
  &__about {
    @include M-m16;
    color: $medium;
    @include defaultTransition;

    &.hidden {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: calc(24px * 5);
    }
  }
}

.education {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px;

  @include media-extra-small {
    gap: 12px;
  }

  // .education__year
  &__year {
    flex-shrink: 0;
    @include M-r18;
    color: $light-dark;
  }

  // .education__description
  &__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  // .education__diploma
  &__diploma {
    @include M-r16;
    color: $light-dark;
  }

  // .education__place
  &__place {
    @include M-m16;
    color: $lighter-dark;
  }
}

.doctor-img {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  background-image: url('../../assets/images/Doctors/avatar-bg.png');

  @include media-extra-small {
    margin: 0 auto;
    width: 336px;
    height: 336px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;

    @include media-min {
      object-fit: contain;
    }
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

.method {
  padding: 5.5px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
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

.more-btn {
  @include M-b16;
  color: $main;
  text-decoration: underline;
}
</style>

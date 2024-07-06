<script setup>
import { computed, ref, defineEmits, watch } from 'vue'
import { usePsychologistsStore } from '@/stores/psychologists.js'
import FiltersIcon from '@/components/icons/FiltersIcon.vue'
import LikeIcon from '@/components/icons/LikeIcon.vue'

const store = usePsychologistsStore()
const specializations = computed(() => store.specializations)

const selectedFilters = ref([])

const emit = defineEmits(['update-filters'])

watch(selectedFilters, (newVal) => {
  emit('update-filters', newVal)
})

const resetFilters = () => {
  selectedFilters.value = []
  emit('update-filters', selectedFilters.value)
}
</script>

<template>
  <div class="pick-filters">
    <ul class="pick-filters__list pick-filters__list--pc">
      <li v-for="specialization in specializations" :key="specialization.id">
        <label>
          <input type="checkbox" :value="specialization.id" v-model="selectedFilters" />
          <div>
            {{ specialization.icon }}
            {{ specialization.title }}
          </div>
        </label>
      </li>
      <li>
        <div class="reset" @click="resetFilters">Сбросить все фильтры</div>
      </li>
    </ul>
    <ul class="pick-filters__list pick-filters__list--mobile">
      <li>
        <div class="pick-filters__btn">
          <FiltersIcon />
          Все фильтры
          <div class="filters-count">
            <span>5</span>
          </div>
        </div>
      </li>
      <li>
        <div class="pick-filters__btn">
          Только избранные
          <LikeIcon />
        </div>
      </li>
      <li>
        <div class="reset">Сбросить все фильтры</div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.pick-filters {
  // .pick-filters__list
  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;

    @include media-medium {
      &.pick-filters__list--pc {
        display: none;
      }
      &.pick-filters__list--mobile {
        display: flex;
      }
    }

    // .pick-filters__list--mobile
    &--mobile {
      display: none;

      @include media-extra-small {
        gap: 8px;
      }
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;

      .filters-count {
        padding: 0;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 8px);
          height: 100%;
          background-color: $red;
          border-radius: 12px;
          z-index: 0;
        }
        span {
          @include M-r12;
          color: $white;
          z-index: 1;
        }
      }

      label {
        cursor: pointer;
        width: 100%;
        height: 100%;

        input {
          appearance: none;
          position: absolute;

          &:checked {
            & + div {
              background-color: $secondary-press;
            }
          }
        }
      }

      div {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 8px 12px 8px 8px;
        @include M-b14;
        color: $medium;
        background-color: $white;
        border-radius: 12px;
        @include defaultTransition;
        cursor: pointer;

        @include hover {
          background-color: $primary-hover;
        }

        &:active {
          background-color: $primary-press;
        }

        &.reset {
          background-color: $secondary-press;

          @include hover {
            background-color: $primary-hover;
          }

          &:active {
            background-color: $primary-press;
          }

          @include media-medium {
            min-height: 40px;
          }

          @include media-extra-small {
            display: none;
          }
        }

        &.pick-filters__btn {
          display: flex;
          align-items: center;
          gap: 8px;

          @include media-medium {
            min-height: 40px;
          }

          @include media-extra-small {
            gap: 6px;
          }
        }
      }
    }
  }
}
</style>

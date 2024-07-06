<script setup>
import { computed, ref } from 'vue'
import DoctorsList from '@/components/chapters/DoctorsList.vue'
import SectionTitle from '@/components/elements/titles/SectionTitle.vue'
import { usePsychologistsStore } from '@/stores/psychologists.js'
import PickDoctorForm from '@/components/forms/PickDoctorForm.vue'
import PickDoctorFilters from '@/components/chapters/PickDoctorFilters.vue'
import { formatPsychologists } from '@/helpers/utils'

const store = usePsychologistsStore()
const psychologists = computed(() => store.psychologists)

const searchQuery = ref('')
const selectedFilters = ref([])

const handleUpdateFilters = (filters) => {
  selectedFilters.value = filters
}

const filteredPsychologists = computed(() => {
  let filteredList = psychologists.value

  if (searchQuery.value.trim() !== '') {
    const currentQuery = searchQuery.value.trim().toLowerCase()

    filteredList = filteredList.filter((psychologist) =>
      psychologist.name.toLowerCase().includes(currentQuery)
    )
  }

  if (selectedFilters.value.length > 0) {
    filteredList = filteredList.filter((psychologist) =>
      selectedFilters.value.every((filter) => psychologist.specializations.includes(filter))
    )
  }

  return filteredList
})

const handleUpdateQuery = (query) => {
  searchQuery.value = query
}

const currentPsychCount = computed(() => {
  return formatPsychologists(filteredPsychologists.value.length)
})
</script>

<template>
  <section class="pick-doctor">
    <div class="pick-doctor__container">
      <SectionTitle :settings="{ text: 'Выберите подходящего психолога', teg: 'h1' }">
        <div class="doctors-count">
          {{ currentPsychCount }}
        </div>
      </SectionTitle>
      <div class="pick-doctor__inner">
        <PickDoctorForm @update-query="handleUpdateQuery" />
        <PickDoctorFilters @update-filters="handleUpdateFilters" />
        <DoctorsList :list="filteredPsychologists" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pick-doctor {
  // .pick-doctor__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: stretch;

    @include media-medium {
      gap: 18px;
    }
  }
}

.doctors-count {
  @include M-b24;
  color: $lighter-dark;

  @include media-medium {
    @include M-b16;
  }
}
</style>

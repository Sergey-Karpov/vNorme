<script setup>
import { ref, watch, onMounted } from 'vue'
import DoctorCard from '@/components/chapters/DoctorCard.vue'
import DoctorInfo from '@/components/chapters/DoctorInfo.vue'
import DoctorCardEmpty from '@/components/chapters/DoctorCardEmpty.vue'
import SnakeLoader from '@/components/elements/UI/Loaders/SnakeLoader.vue'
import AppModal from '@/components/elements/UI/Modals/AppModal.vue'

const props = defineProps({
  list: Array
})

const isLoading = ref(false)

const showingLoader = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

watch(
  () => props.list,
  () => {
    showingLoader()
  }
)

onMounted(() => {
  showingLoader()
})

const showModal = ref(false)

const doctorToShow = ref({})

const showDoctorDetails = (doctor) => {
  doctorToShow.value = doctor
  showModal.value = true
}

const handleCloseModal = () => {
  showModal.value = false
  setTimeout(() => {
    doctorToShow.value = {}
  }, 200)
}
</script>

<template>
  <SnakeLoader v-if="isLoading" />
  <div v-else class="doctors-list">
    <ul v-if="list.length > 0">
      <li v-for="psychologist in list" :key="psychologist.id">
        <DoctorCard :settings="psychologist" @show-details="showDoctorDetails" />
      </li>
      <li>
        <DoctorCardEmpty />
      </li>
    </ul>
    <div v-else class="doctors-list__empty-message">
      <p>
        К сожалению, на данный момент, психологи по Вашему запросу недоступны, просьбы проверить
        фильтры или изменить детали поиска...
      </p>
    </div>
  </div>
  <AppModal :visible.sync="showModal" @update:visible="handleCloseModal">
    <DoctorInfo :settings="doctorToShow" />
  </AppModal>
</template>

<style lang="scss" scoped>
.doctors-list {
  padding: 20px 0;

  @include media-extra-small {
    padding: 14px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 24px;

    @include media-medium {
      gap: 20px;
    }
  }

  // .doctors-list__empty-message
  &__empty-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70dvh;
    width: 100%;
    @include M-b16;
    color: $black;
    text-align: center;

    p {
      margin: 0 auto;
      max-width: 70%;
    }
  }

  .doctor-card-empty {
    @include media-medium {
      display: none;
    }
  }
}
</style>

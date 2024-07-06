<script setup>
import MainLogo from '@/components/icons/MainLogo.vue'
import MainButton from '@/components/elements/UI/Buttons/MainButton.vue'
import BurgerButton from '../elements/UI/Buttons/BurgerButton.vue'
</script>

<template>
  <header class="header fixed">
    <div class="header__container">
      <div class="header__inner">
        <router-link :to="{ name: 'home' }">
          <MainLogo />
        </router-link>
        <nav class="header-nav">
          <ul class="header-nav__list">
            <li class="header-nav__item">
              <router-link :to="{ name: 'become-doctor' }" active-class="active">
                Стать психологом Vnorme
              </router-link>
            </li>
            <li class="header-nav__item">
              <router-link :to="{ name: 'for-doctor' }" active-class="active">
                Для психологов
              </router-link>
            </li>
            <li class="header-nav__item">
              <router-link :to="{ name: 'pick-doctor' }" active-class="active">
                Подобрать психолога
              </router-link>
            </li>
            <li class="header-nav__item">
              <router-link :to="{ name: 'contacts' }" active-class="active"> Контакты </router-link>
            </li>
          </ul>
        </nav>
        <MainButton :settings="{ text: 'Войти', type: 'button' }" />
        <BurgerButton />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: stretch;

  // .heder__container
  &__container {
    display: flex;
    align-items: stretch;
  }

  // .header__inner
  &__inner {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    align-items: center;

    @include media-medium {
      padding: 20px 0 6px;
    }

    @include media-extra-small {
      padding: 20px 0 0;
    }
  }

  .burger-button {
    display: none;
  }

  @include media-medium {
    .header-nav,
    .main-btn {
      display: none;
    }

    .burger-button {
      display: block;
    }
  }
}

.header-nav {
  // .header-nav__list
  &__list {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  &__item {
    @include M-b16;
    color: $black;
    @include defaultTransition;

    @include hover {
      color: $medium;
    }

    .router-link-active,
    .active {
      @include defaultTransition;
      color: $green;
    }
  }
}
</style>

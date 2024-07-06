<script setup>
import MainLogo from '@/components/icons/MainLogo.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__inner">
        <MainLogo />
        <div class="footer__text">
          <p>
            Внорме не может заменить экстренную психологическую помощь и психиатрическое лечение. В
            случае угрожающих жизни и здоровью ситуаций, необходимо обратиться по телефонам доверия
            или в экстренную психологическую службу.
          </p>
        </div>
        <nav class="footer-nav">
          <ul class="footer-nav__list">
            <li class="footer-nav__item">
              <router-link :to="{ name: 'contacts' }" active-class="active"> Контакты </router-link>
            </li>
            <li class="footer-nav__item">
              <router-link :to="{ name: 'policy' }" active-class="active">
                Политика конфиденциальности
              </router-link>
            </li>
            <li class="footer-nav__item">
              <router-link :to="{ name: 'offer' }" active-class="active"> Оферта </router-link>
            </li>
            <li class="footer-nav__item">
              <router-link :to="{ name: 'Q&A' }" active-class="active">
                Вопросы-ответы
              </router-link>
            </li>
            <li class="footer-nav__item">
              <router-link :to="{ name: 'become-doctor' }" active-class="active">
                Стать психологом Внорме
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  min-height: 56px;
  background-color: transparent;

  // .footer__inner
  &__inner {
    padding: 40px 0 80px;
    display: grid;
    grid-template-columns: 248px auto 380px;
    gap: 24px;
    align-items: flex-start;

    @include media-medium {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  // .footer__text
  &__text {
    display: flex;
    justify-content: center;
    @include M-r16;
    color: $medium;

    @include media-medium {
      justify-content: flex-start;
    }

    p {
      max-width: 378px;

      @include media-medium {
        max-width: 90%;
      }
    }
  }
}

.footer-nav {
  // .footer-nav__list
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    @include media-medium {
      gap: 24px;
    }
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

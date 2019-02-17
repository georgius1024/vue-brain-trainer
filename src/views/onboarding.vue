<template lang="pug">
  .uk-container
    div.uk-flex.uk-flex-center
      .uk-card.uk-card-default.uk-card-hover.uk-width-large
        .uk-card-body(v-if="page===0")
          h3 Начальная страница
          p На этой же странице показывается статистика игрока.
          p На этой странице Вы можете настроить параметры игры:
            ul
              li Длительность - сколько минут будет длится раунд
              li Сложность - максимальное значение чисел, которыми придется оперировать
              li Типы вычислений
        .uk-card-body(v-if="page===1")
          h3 Страница игры
          p Вам будет известен первый операнд выражения и его результат.
          p Ваша задача - подобрать второй и третий операнды, чтобы уравнение сошлось.
          ul
            li Переключайтесь между операндами кнопками: 
              button.uk-icon-button.uk-button-primary.uk-margin-small-left &gt;
              span.uk-margin-small-left.uk-margin-small-right и
              button.uk-icon-button.uk-button-primary &lt;
            li Вводите операнд, нажимая кнопки с цифрами.
            li Очистите операнд с помощью кнопки
              button.uk-icon-button.uk-button-primary.uk-margin-small-left CE
            li Когда ведете операнды, нажмите кнопку 
              button.uk-icon-button.uk-button-primary.uk-margin-small-left.uk-margin-small-right =
              .
               и узнаете результат.
        .uk-card-footer
          button.uk-button.uk-button-primary.uk-width-1-1(@click="nextPage") Дальше
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Mutation
} from 'vuex-class';

@Component
export default class Onboarding extends Vue {
  @Mutation acquireOnboarding;
  private page = 0;
  private mounted () {
    this.page = 0;
    this.acquireOnboarding();
  }
  private nextPage () {
    this.page ++;
    if (this.page === 2) {
      this.goHome();
    }
  }
  private goHome () {
    this.$router.push({name: 'home'});
  }

}
</script>


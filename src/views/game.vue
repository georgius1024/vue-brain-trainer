<template lang="pug">
  .uk-container
    div.uk-flex.uk-flex-center
      .uk-card.uk-card-default.uk-card-hover.uk-card-body.uk-width-large
        .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row
          button.uk-button.uk-button-default(@click="stopGame") 
            span(uk-icon="icon: close")
            span Выход
          input.uk-input.uk-form-width-small.right-align(
            type="text", 
            readonly, 
            :value="timeRemained"
          )
        .uk-container.uk-margin-top 
            .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row
              input.uk-input.uk-form-width-xsmall.right-align(
                v-model.number="answer.first", 
                readonly, 
                tabindex=-1,
                ref="first"
              )
              label.uk-margin-left.uk-margin-right {{operatorSign}}
              input.uk-input.uk-form-width-xsmall.right-align(
                v-model.number="answer.second", 
                readonly, 
                ref="second",
                @click="setActiveControl(0)"
                tabindex=-1,
                :class="{ active: activeControl===0 } "
              )
              label.uk-margin-left.uk-margin-right {{operatorSign}}
              input.uk-input.uk-form-width-xsmall.right-align(
                v-model.number="answer.third", 
                readonly, 
                ref="third",
                @click="setActiveControl(1)"
                tabindex=-1,
                :class="{ active: activeControl===1 } "
              )
            .uk-margin-top 
              span ={{expectedResult}}
        .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row.uk-margin-medium-top 
          button.uk-icon-button.uk-button-danger(@click="typeNumber(1)") 1
          button.uk-icon-button.uk-button-danger(@click="typeNumber(2)") 2
          button.uk-icon-button.uk-button-danger(@click="typeNumber(3)") 3
          button.uk-icon-button.uk-button-primary(@click="prevAnswerField") &lt;
        .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row.uk-margin-medium-top 
          button.uk-icon-button.uk-button-danger(@click="typeNumber(4)") 4
          button.uk-icon-button.uk-button-danger(@click="typeNumber(5)") 5
          button.uk-icon-button.uk-button-danger(@click="typeNumber(6)") 6
          button.uk-icon-button.uk-button-primary(@click="nextAnswerField") &gt;
        .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row.uk-margin-medium-top 
          button.uk-icon-button.uk-button-danger(@click="typeNumber(7)") 7
          button.uk-icon-button.uk-button-danger(@click="typeNumber(8)") 8
          button.uk-icon-button.uk-button-danger(@click="typeNumber(9)") 9
          button.uk-icon-button.uk-button-primary(@click="clearField") CE
        .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row.uk-margin-medium-top 
          button.uk-icon-button.uk-button-danger.invisible
          button.uk-icon-button.uk-button-danger(@click="typeNumber(0)") 0
          button.uk-icon-button.uk-button-danger.invisible
          button.uk-icon-button.uk-button-primary(
            :disabled="!answer.second || !answer.third"
            @click="test"
          ) =
    #win-dialog(uk-modal, @hidden="nextTask")
      .uk-modal-dialog.uk-margin-auto-vertical.uk-modal-body
        h2.uk-modal-title Правильно! 😃 😃 😃
        button.uk-modal-close-outside(uk-close)
    #lose-dialog(uk-modal, @hidden="nextTask")
      .uk-modal-dialog.uk-margin-auto-vertical.uk-modal-body
        h2.uk-modal-title Неправильно! 😭 😭 😭
        button.uk-modal-close-outside(uk-close)
    #stats-dialog(uk-modal, @hidden="goHome")
      .uk-modal-dialog.uk-margin-auto-vertical.uk-modal-body
        h2.uk-modal-title Раунд завершен
        p Вы решили {{roundTasksSolved}} из {{roundTasksTotal}} предложенных задач за {{timeElapsed}}
        button.uk-modal-close-outside(uk-close)

</template>
<style>
.invisible {
  opacity: 0;
}
.right-align {
  text-align: right;
}
.active {
  border: 1px solid navy;
}

.active:focused {
  border: 1px solid navy;
}

</style>
<script lang="ts">
import UIkit from 'uikit';
import dayjs from 'dayjs';
import _padStart from 'lodash.padstart';
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation } from 'vuex-class';

@Component
export default class Game extends Vue {
  @State operations;
  @State skill;
  @State duration;
  @Mutation addTaskSolved;
  @Mutation addTasksFailed;
  private roundTasksSolved = 0;
  private roundTasksTotal = 0;
  private timerStarted: any;
  private secondsElapsed: number;
  private secondsRemained: number;
  private interval: any;
  private timeRemained = '';
  private timeElapsed = '';
  private operatorSign = '*';
  private answer = {
    first: '',
    second: '',
    third: ''
  };
  private operands = {
    first: 0,
    second: 0,
    third: 0
  };
  private activeControl = 0;
  private expectedResult = 0;
  private onKeyDownHandler: any;
  private beforeMount () {
    this.secondsElapsed = 0;
    this.secondsRemained = 0;
    this.timerStarted = dayjs();
    this.tick();
    this.interval = setInterval(() => this.tick(), 100);
    this.onKeyDownHandler = (event: any) => {
      this.onKeyDown(event);
    };
    document.addEventListener('keydown', this.onKeyDownHandler);
  }
  private mounted () {
    this.$nextTick(() => {
      this.nextTask();
    });
  }
  private beforeDestroy () {
    this.stopTimer();
    document.removeEventListener('keydown', this.onKeyDownHandler);
  }
  private onKeyDown (event: any) {
    if (event.code === 'Escape') {
      this.stopGame();
    }
  }
  private formattedTime (seconds: number): string {
    return (
      _padStart(Math.floor(seconds / 60), 2, '0') +
      ':' +
      _padStart(Math.floor(seconds % 60), 2, '0')
    );
  }
  private tick () {
    const secondsElapsed = dayjs().diff(this.timerStarted, 'second');
    const secondsRemained = this.duration * 60 - secondsElapsed;
    const timeRemained = this.formattedTime(this.secondsRemained);
    Vue.set(this, 'timeRemained', this.formattedTime(secondsRemained));
    Vue.set(this, 'timeElapsed', this.formattedTime(secondsElapsed));
    Vue.set(this, 'secondsElapsed', secondsElapsed);
    Vue.set(this, 'secondsRemained', secondsRemained);
    if (secondsRemained <= 0) {
      return this.stopGame();
    }
  }
  private stopTimer () {
    clearInterval(this.interval);
  }
  private getRandomOperand (): number {
    // Returns random number from 1 to skill level
    return Math.ceil(Math.random() * this.skill);
  }
  private getExponentOperand (): number {
    // ^2...^3 is pretty enough
    return Math.ceil (Math.random() * 2);
  }
  private generateNextTask () {
    this.roundTasksTotal += 1;
    const candidates = [];
    if (this.operations.add) {
      candidates.push('+');
    }
    if (this.operations.sub) {
      candidates.push('-');
    }
    if (this.operations.mul) {
      candidates.push('*');
    }
    if (this.operations.div) {
      candidates.push('/');
    }
    if (this.operations.pow) {
      candidates.push('^');
    }
    this.operatorSign =
      candidates[Math.floor(Math.random() * candidates.length)];
    switch (this.operatorSign) {
      case '+':
      case '-':
      case '*':
        // From operands to result
        this.operands.first = this.getRandomOperand();
        this.operands.second = this.getRandomOperand();
        this.operands.third = this.getRandomOperand();
        this.expectedResult = this.evaluate(
          this.operands.first,
          this.operands.second,
          this.operands.third,
          this.operatorSign
        );
        break;
      case '^':
        // Special case
        this.operands.first = this.getRandomOperand();
        this.operands.second = this.getExponentOperand();
        this.operands.third = this.getExponentOperand();
        this.expectedResult = Math.pow(
          Math.pow(this.operands.first, this.operands.second),
          this.operands.third
        );
        break;
      case '/':
        // Reverse order - from result to operands
        this.expectedResult = this.getRandomOperand() * 3;
        this.operands.second = this.getRandomOperand();
        this.operands.third = this.getRandomOperand();
        this.operands.first =
          this.expectedResult * this.operands.third * this.operands.second;
        break;
    }
    this.answer.first = String(this.operands.first);
    this.answer.second = '';
    this.answer.third = '';
  }
  private evaluate (
    first: number,
    second: number,
    third: number,
    operatorSign: string
  ): number {
    if (operatorSign === '^') {
      return Math.pow(Math.pow(first, second), third);
    } else {
      /* tslint:disable-next-line */
      return eval(`${first}${operatorSign}${second}${operatorSign}${third}`);
    }
  }
  private setActiveControl (no: number) {
    this.activeControl = no % 2;
  }
  private nextTask () {
    this.generateNextTask();
    this.setActiveControl(0);
  }
  private nextAnswerField () {
    this.setActiveControl(1);
  }
  private prevAnswerField () {
    this.setActiveControl(0);
  }
  private typeNumber (value: number) {
    if (this.activeControl === 0) {
      this.answer.second += String(value);
    } else {
      this.answer.third += String(value);
    }
  }
  private goHome () {
    this.$router.push({ name: 'home' });
  }
  private clearField () {
    if (this.activeControl === 0) {
      this.answer.second = '';
    } else {
      this.answer.third = '';
    }
  }
  private test () {
    const result = this.evaluate(
      Number(this.answer.first),
      Number(this.answer.second),
      Number(this.answer.third),
      this.operatorSign
    );
    if (result === this.expectedResult) {
      this.win();
    } else {
      this.lose();
    }
  }
  private lose () {
    this.addTasksFailed();
    UIkit.modal(document.getElementById('lose-dialog')).show();
  }
  private win () {
    this.roundTasksSolved += 1;
    this.addTaskSolved();
    UIkit.modal(document.getElementById('win-dialog')).show();
  }
  private stopGame () {
    this.stopTimer();
    UIkit.modal(document.getElementById('stats-dialog')).show();
  }
}
</script>
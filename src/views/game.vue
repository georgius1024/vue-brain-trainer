<template lang="pug">
  .uk-container
    div.uk-flex.uk-flex-center
      .uk-card.uk-card-default.uk-card-hover.uk-card-body.uk-width-large
        .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row
          router-link.uk-button.uk-button-default(:to="{ name: 'home' }") 
            span(uk-icon="icon: close")
            span Отмена
          input.uk-input.uk-form-width-small(type="text", readonly, :value="timeLeft")
        .uk-container.uk-margin-top 
            .uk-flex.uk-flex-between.uk-flex-middle.uk-flex-row
              input.uk-input.uk-form-width-xsmall(
                v-model.number="answer.first", 
                readonly, 
                disabled,
                ref="first"
              )
              label.uk-margin-left.uk-margin-right {{operatorSign}}
              input.uk-input.uk-form-width-xsmall(
                v-model.number="answer.second", 
                readonly, 
                ref="second",
                @click="setActiveControl(0)"
                :solo="activeControl===0"
              )
              label.uk-margin-left.uk-margin-right {{operatorSign}}
              input.uk-input.uk-form-width-xsmall(
                v-model.number="answer.third", 
                readonly, 
                ref="third",
                @click="setActiveControl(1)"
                :solo="activeControl===1"
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
    #win-dialog(uk-modal, @hidden="goHome")
      .uk-modal-dialog.uk-margin-auto-vertical.uk-modal-body
        h2.uk-modal-title Вы выиграли! 😃 😃 😃
        button.uk-modal-close-outside(uk-close)
    #lose-dialog(uk-modal, @hidden="goHome")
      .uk-modal-dialog.uk-margin-auto-vertical.uk-modal-body
        h2.uk-modal-title Вы проиграли! 😭 😭 😭
        button.uk-modal-close-outside(uk-close)
</template>
<style>
  .invisible {
    opacity: 0
  }
</style>
<script lang="ts">
import UIkit from 'uikit';
import dayjs from 'dayjs';
import _padStart from 'lodash.padstart';
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Mutation
} from 'vuex-class';

@Component
export default class Game extends Vue {
  @State operations;
  @Getter daysInTraining;
  @State tasksSolved;
  @State tasksTotal;
  @Getter accuracy;
  @State skill;
  @State duration;
  @Mutation addTaskSolved;
  @Mutation addTaskFailed;
  private timerStarted: any;
  private secondsElapsed: number;
  private secondsRemained: number;
  private interval: any;
  private timeLeft = '';
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
    this.generateTask();
  }
  private mounted () {
    this.setActiveControl(0);
  }
  private beforeDestroy () {
    this.stopTimer();
    document.removeEventListener('keydown', this.onKeyDownHandler);
  }
  private onKeyDown ( event: any ) {
    if (event.code === 'Escape') {
      this.$router.push({name: 'home'});
    }
  }
  private tick () {
    const seconds = dayjs().diff(this.timerStarted, 'second');
    const secondsRemained = this.duration * 60 - seconds;
    if (secondsRemained <= 0) {
      return this.loseGame();
    }
    const timeRemained = _padStart(Math.floor(this.secondsRemained / 60), 2, '0') + ':' +
      _padStart(Math.floor(this.secondsRemained % 60), 2, '0');
    Vue.set(this, 'secondsElapsed', seconds);
    Vue.set(this, 'secondsRemained', secondsRemained);
    Vue.set(this, 'timeLeft', timeRemained);
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
    return Math.ceil(Math.random() * 2);
  }
  private generateTask () {
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
    this.operatorSign = candidates[Math.floor(Math.random() * candidates.length)];
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
          this.operatorSign);
        break;
      case '^':
        // Special case
        this.operands.first = this.getRandomOperand();
        this.operands.second = this.getExponentOperand();
        this.operands.third = this.getExponentOperand();
        this.expectedResult = Math.pow(Math.pow(this.operands.first, this.operands.second), this.operands.third);
        break;
      case '/':
        // Reverse order - from result to operands
        this.expectedResult = this.getRandomOperand() * 3;
        this.operands.second = this.getRandomOperand();
        this.operands.third = this.getRandomOperand();
        this.operands.first = this.expectedResult * this.operands.third * this.operands.second;
        break;
    }
    this.answer.first = String(this.operands.first);
    this.answer.second = '';
    this.answer.third = '';
  }
  private evaluate (first: number, second: number, third: number, operatorSign: string): number {
    if (operatorSign === '^') {
      return Math.pow(Math.pow(first, second), third);
    } else {
      /* tslint:disable-next-line */
      return eval(`${first}${operatorSign}${second}${operatorSign}${third}`);
    }
  }
  private setActiveControl (no: number) {
    this.activeControl = no % 2;
    if (this.activeControl === 0) {
      /* tslint:disable-next-line */
      (this.$refs['second'] as any).focus();
    } else {
      /* tslint:disable-next-line */
      (this.$refs['third'] as any).focus();
    }
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
    this.$router.push({name: 'home'});
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
      Number(this.operands.first),
      Number(this.operands.second),
      Number(this.operands.third),
      this.operatorSign
    );
    if (result === this.expectedResult) {
      this.winGame();
    } else {
      this.loseGame();
    }
  }
  private loseGame () {
    this.stopTimer();
    this.addTaskFailed();
    UIkit.modal(document.getElementById('lose-dialog')).show();
  }
  private winGame () {
    this.stopTimer();
    this.addTaskSolved();
    UIkit.modal(document.getElementById('win-dialog')).show();
  }
}
</script>
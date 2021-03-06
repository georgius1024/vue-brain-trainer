import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import dayjs from 'dayjs';
import { Operations } from './types';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trainingStarted: dayjs(),
    tasksSolved: 0,
    tasksFailed: 0,
    duration: 7,
    skill: 7,
    onboardingSeen: false,
    operations: {
      add: true,
      sub: true,
      mul: true,
      div: true,
      pow: false
    }
  },
  getters: {
    daysInTraining (state) {
      return dayjs().diff(dayjs(state.trainingStarted).startOf('day'), 'day');
    },
    tasksTotal (state) {
      return state.tasksSolved + state.tasksFailed;
    },
    accuracy (state) {
      const total = state.tasksSolved + state.tasksFailed;
      if (total) {
        return state.tasksSolved * 100 / total;
      } else {
        return 0;
      }
    }
  },
  mutations: {
    changeDuration (state, value: number) {
      state.duration = value;
    },
    changeSkill (state, value: number) {
      state.skill = value;
    },
    changeOperations (state, operations: Operations) {
      state.operations = operations;
    },
    addTaskSolved (state) {
      state.tasksSolved = state.tasksSolved + 1;
    },
    addTasksFailed (state) {
      state.tasksFailed = state.tasksFailed + 1;
    },
    acquireOnboarding (state) {
      state.onboardingSeen = true;
    }
  },
  plugins: [createPersistedState()]
});

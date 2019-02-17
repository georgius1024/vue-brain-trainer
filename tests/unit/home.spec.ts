import { shallowMount } from '@vue/test-utils';
import Home from '@/views/home.vue';
import router from '@/router';
import store from '@/store';

describe('home.vue', () => {
  it('renders without errors', () => {
    const wrapper = shallowMount(Home, {
      router,
      store
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('display training days', () => {
    const wrapper = shallowMount(Home, {
      router,
      store
    });
    expect(wrapper.html()).toContain((wrapper as any).vm.days(store.getters.daysInTraining));
  });
  it('display tasks stats', () => {
    const wrapper = shallowMount(Home, {
      router,
      store
    });
    store.commit('addTaskSolved');
    store.commit('addTasksFailed');
    expect(wrapper.html()).toContain(store.getters.tasksTotal);
    expect(wrapper.html()).toContain(store.state.tasksSolved);
    expect(wrapper.html()).toContain(store.getters.accuracy);
  });
  it('display duration and skill', () => {
    const wrapper = shallowMount(Home, {
      router,
      store
    });
    store.commit('changeDuration', 10);
    expect(wrapper.html()).toContain(store.state.duration);
    store.commit('changeSkill', 10);
    expect(wrapper.html()).toContain(store.state.skill);
  });
});

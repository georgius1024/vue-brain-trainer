import store from '@/store';

describe('store', () => {
  it('works', () => {
    store.commit('changeDuration', 10);
    expect(store.state.duration).toBe(10);
    store.commit('changeSkill', 10);
    expect(store.state.skill).toBe(10);
    store.commit('addTaskSolved');
    expect(store.state.tasksSolved).toBe(1);
    expect(store.state.tasksFailed).toBe(0);
    store.commit('addTasksFailed');
    expect(store.state.tasksSolved).toBe(1);
    expect(store.state.tasksFailed).toBe(1);
    expect(store.getters.accuracy).toBe(50);
    store.commit('acquireOnboarding');
    expect(store.state.onboardingSeen).toBeTruthy();
    store.commit('changeOperations', {add: true});
    expect(store.state.operations.add).toBeTruthy();
  });
});

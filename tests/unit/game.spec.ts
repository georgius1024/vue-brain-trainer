import { shallowMount } from '@vue/test-utils';
import Game from '@/views/game.vue';
import router from '@/router';
import store from '@/store';

describe('game.vue', () => {
  it('renders without error', () => {
    const wrapper = shallowMount(Game, {
      router,
      store
    });
    expect(wrapper).toMatchSnapshot();
  });
});

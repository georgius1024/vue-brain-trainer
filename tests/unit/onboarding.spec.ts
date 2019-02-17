import { shallowMount } from '@vue/test-utils';
import Onboarding from '@/views/onboarding.vue';
import router from '@/router';
import store from '@/store';

describe('onboarding.vue', () => {
  it('renders and handle clicks', () => {
    const wrapper = shallowMount(Onboarding, {
      router,
      store
    });
    expect((wrapper.vm as any).page).toBe(0);
    wrapper.find('button').trigger('click');
    expect((wrapper.vm as any).page).toBe(1);
    (wrapper.vm as any).nextPage();
    expect((wrapper.vm as any).page).toBe(2);
    expect((wrapper.vm as any).$route.name).toBe('home');
  });
});

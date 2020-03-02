import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

const wrapper = shallowMount(Home);

describe('Testing Home component', () => {
    test('Open button triggers the modal component', () => {
        wrapper.find('.btn').trigger('click');
        expect(wrapper.classes('modalIsHidden')).toBe(false);
    });
});
import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/Modal'

const wrapper = shallowMount(Modal);

const slots = {
    header: 'header',
    body: 'body',
    footer: 'footer'
}

describe('Testing Modal component: ', () => {
    test('Use the default slots when no slots are passed in', () => {
        
    });
    test('Renders the correct default markup', () => {
        expect(wrapper.text()).toContain('This is the default title');
    }); 
    test('A close button exists', () => {
        expect(wrapper.contains('button')).toBe(true);
    });
    test('Assert wrapper is visible', () => {
        expect(wrapper.isVisible()).toBe(true);
    });
});
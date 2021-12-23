// https://youtu.be/RfLZF9222HQ?t=4727
import { render } from '@testing-library/react';
import EventCard from './EventCard';

describe('EventCard tests', () => {
    test('Should display date', () => {
        render(
            <EventCard date='22.12.2021' />
        );

        expect(document.querySelector('p strong').textContent).toBe('22.12.2021');
    });
    
    test('Should display text', () => {
        render(
            <EventCard text='Lorem ipsum bla bla' />
        );

        expect(document.getElementsByTagName('p')[1].textContent).toBe('Lorem ipsum bla bla More...');
    });
});
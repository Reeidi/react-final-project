// https://youtu.be/RfLZF9222HQ?t=4727
import { render } from '@testing-library/react';
import ScheduleItem from './ScheduleItem';

describe('ScheduleItem tests', () => {
    test('Should display time', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <ScheduleItem time='12:21' />
                    </tr>
                </tbody>
            </table>
        );

        expect(document.getElementsByTagName('span')[0].textContent).toBe('12:21');
    });
    
    test('Should display course name', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <ScheduleItem courseName='Art history' />
                    </tr>
                </tbody>
            </table>
        );

        expect(document.getElementsByTagName('span')[1].textContent).toBe('Art history');
    });
    
    test('Should display teacher', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <ScheduleItem teacher='Jesica Murray' />
                    </tr>
                </tbody>
            </table>
        );

        expect(document.getElementsByTagName('span')[2].textContent).toBe('Jesica Murray');
    });
});
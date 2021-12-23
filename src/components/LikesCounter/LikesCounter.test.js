// https://youtu.be/RfLZF9222HQ?t=4727
import { render } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
import LikesCounter from './LikesCounter';

describe('LikesCounter tests', () => {
    test('Should display likes', () => {
        render(
            <AuthProvider>
                <LikesCounter likesProp={18} />
            </AuthProvider>
        );

        expect(document.getElementsByTagName('small')[0].textContent).toBe('18');
    });

    test('Should display user liked', () => {
        render(
            <AuthProvider>
                <LikesCounter userLikesImageProp={true} />
            </AuthProvider>
        );

        let source = document.getElementsByTagName('img')[0].src;
        let endsWith = source.endsWith('heart-icon.png');
        expect(endsWith).toBe(true);
    });

    test('Should display user not liked', () => {
        render(
            <AuthProvider>
                <LikesCounter userLikesImageProp={false} />
            </AuthProvider>
        );

        let source = document.getElementsByTagName('img')[0].src;
        let endsWith = source.endsWith('heart-empty-icon.png');
        expect(endsWith).toBe(true);
    });
});
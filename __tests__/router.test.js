/**
 * @jest-environment jsdom
 */

import { TestScheduler } from "@jest/core";
import { pushToHistory } from '../scripts/router.js';

describe('Push to History Test Settings', () => {
    test('length of the history stack', () => {
        var curHist = pushToHistory('settings');
        expect(curHist.length).toBe(2);
    });
    test('current state object', () => {
        expect(history.state).toEqual({ page:'settings' });
    });
});

describe('Push to History Test Entry', () => {
    test('length of the history stack', () => {
        var curHist = pushToHistory('entry',1);
        expect(curHist.length).toBe(3);
    });
    test('current state object', () => {
        expect(history.state).toEqual({ page:'entry1' });
    });
});

describe('Push to History Test Default', () => {
    test('length of the history stack', () => {
        var curHist = pushToHistory('home');
        expect(curHist.length).toBe(4);
    });
    test('current state object', () => {
        expect(history.state).toEqual({ });
    });
});


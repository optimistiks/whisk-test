jest.dontMock('../index');

const searchText = require('../index').searchText;

describe('reducer', () => {

    it('should handle searchText change', () => {

        const state = 456;
        const action = {type: 'SEARCH_TEXT_CHANGE', payload: 123};
        const newState = searchText(state, action);

        expect(newState).toEqual(123);

    });

});

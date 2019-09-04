import {createSelector} from "reselect";

const getNewMessagesCountSelector = (state) => {
    return state.dialogspages.newMessagesCount

};

export const getNewMessagesCount = createSelector(getNewMessagesCountSelector, (newMessagesCount) => {
    return newMessagesCount
});


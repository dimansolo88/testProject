import React from 'react';

import profileReducer, {addpostActionCreator, deleteActionCreator} from './profile-reducer';

let state = {
    postdata: [
        {id: 1, post: "kjkjbkj"},
        {id: 2, post: "jkbkjbkjbkjbkj"},
    ],
};

it('should to be added ',  () => {


    let action = addpostActionCreator("test post");

    let newState = profileReducer(state,action);

    expect(newState.postdata.length).toBe(3)

});


it('should after delete length decrement ',  () => {




    let action = deleteActionCreator(1)

    let newState = profileReducer(state, action)

    expect(newState.postdata.length).toBe(1)


});


it(' length should be not change  ',  () => {
    let action = deleteActionCreator(1000)

    let newState = profileReducer(state, action)

    expect(newState.postdata.length).toBe(2)

});




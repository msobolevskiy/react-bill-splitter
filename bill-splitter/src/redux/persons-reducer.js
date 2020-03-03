const ADD_PERSON = 'ADD_PERSON';
const REMOVE_PERSON = 'REMOVE_PERSON';
const UPDATE_PERSON_QUANTITY = 'UPDATE_PERSON_QUANTITY';


let initionalState = {
    persons: [{
            id: 1,
            billAmount: 0
        }
    ],
    personsAmount: 0,
    billAmount: 0
}


initionalState.personsAmount = initionalState.persons.length;

const personsReducer = (state = initionalState, action) => {
    
    switch (action.type) {
        case ADD_PERSON:
        state.personsAmount = state.personsAmount + 1
            return {
                ...state,
                persons: [...state.persons, state.personsAmount]
            };

        case REMOVE_PERSON:
        if (state.personsAmount > 0){
        state.personsAmount = state.personsAmount - 1
            return {
                ...state,
                persons: [...state.persons, state.personsAmount]
            };
        } else {
            return {...state}
        }
        default:
            return state;
    }
} 

export const addPersonAC = () => ({
    type: ADD_PERSON
})

export const removePersonAC = () =>
    ({
        type: REMOVE_PERSON
    })
export default personsReducer;
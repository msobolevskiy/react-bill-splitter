const ADD_PERSON = 'ADD_PERSON';
const REMOVE_PERSON = 'REMOVE_PERSON';

const AMOUNT_INPUT = 'AMOUNT_INPUT';

let initionalState = {
    persons: [],
    personsAmount: 0,
    billSubtotal: 0
}


initionalState.personsAmount = initionalState.persons.length;

const personsReducer = (state = initionalState, action) => {


    switch (action.type) {
        case ADD_PERSON:
            if (state.personsAmount < 6) {
                state.persons.push({
                    id: state.persons.length + 1,
                    billSubtotal: 0
                })
                state.personsAmount = state.persons.length;
            }

            return {
                ...state,
                persons: [...state.persons]
            };


        case REMOVE_PERSON:

            if (state.personsAmount > 0) {
                let last = state.persons.length - 1;
                state.persons.splice(last, 1)
                state.personsAmount = state.persons.length
                return {
                    ...state,
                    persons: [...state.persons]
                };
            } else {
                return {
                    ...state
                }
            };

        case AMOUNT_INPUT:


                function dotCheck(e) {

                    e = String(e).split('').reverse()
                    if (e.indexOf(".") <= 1) {
                        return true
                    } else {
                        return false
                    }
                }
            

            if (state.billSubtotal == 0 && action.value != '') {
                state.billSubtotal = action.value
                let newTotal = state.billSubtotal
                return {
                    ...state,
                    billSubtotal: newTotal
                };
            } else if (action.value === "") {

                if (state.billSubtotal.length === 1 || state.billSubtotal == 0) {
                    return {
                        ...state,
                        billSubtotal: 0
                    };

                } else {
                    let newTotal = state.billSubtotal.slice(0, -1);
                    return {
                        ...state,
                        billSubtotal: newTotal
                    }
                }

            } else if (action.value == 0 && state.billSubtotal == 0) {
                return {
                    ...state,
                    billSubtotal: 0
                };


            } else if (dotCheck(state.billSubtotal) == true){
                let newTotal = state.billSubtotal + action.value;
                return {
                    ...state,
                    billSubtotal: newTotal
                } 
            } else {
                let newTotal = state.billSubtotal
                return {
                    ...state,
                    billSubtotal: newTotal
                }
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

export const amountInputAC = (value) =>
    ({
        type: AMOUNT_INPUT,
        value: value
    })

export default personsReducer;
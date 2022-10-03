// import {
//     authenticationUrl,
//     authenticationParam,
//     backEndUrl,
//     backEndUrlSSIP
// } from "../config"

const axios=require('axios')


// export const getEditJsonData=(data) => {
//     return (dispatch) => {

//         dispatch({
//             type: 'UPDATE_INPUT_DATA',
//             payload: data
//         })

//     }
// }

// export const getUpdatingSchemaData=(data) => {
//     return (dispatch) => {

//         dispatch({
//             type: 'GETTING_SCHEMA_UPDATING_FIELD_RESPONSE',
//             payload: data
//         })

//     }
// }
// export const getUpdatingSchemaDataOne=(data) => {
//     return (dispatch) => {

//         dispatch({
//             type: 'GETTING_SCHEMA_UPDATING_FIELD_RESPONSE_ONE',
//             payload: data
//         })

//     }


// }
// export const getUpdatingSchemaDataTwo=(data) => {
//     return (dispatch) => {

//         dispatch({
//             type: 'GETTING_SCHEMA_UPDATING_FIELD_RESPONSE_TWO',
//             payload: data
//         })

//     }
// }

// export const getUpdatingSchema=(fieldData) => {
//     return (dispatch) => {

//         // dispatch({
//         //     type: 'GETTING_SCHEMA_UPDATING_META_RESPONSE',
//         //     payload: metaData,

//         // })
//         dispatch({
//             type: 'GETTING_SCHEMA_UPDATING_ONLY_SHOWING_RESPONSE',
//             payload: fieldData,

//         })

//     }
// }
export const getState=(data) => {
    return (dispatch) => {
        dispatch({
            type: 'GETTING_STATE',
            payload: data

        })
    }
}
export const getCreatedNewEntits=(data) => {

    console.log(data,'response');
    return (dispatch) => {
        axios.post(`http://localhost:8080/api/tutorials`,{data}

        )
            .then(response => {
                // let address={}
                // let state=[]

                // let array=response.data
                // for(let i=0; i<array.length; i++) {
                //     // address[array[i].location]=array[i].state
                //     address[array[i].state]=array[i].location

                //     state.push({'label': array[i].state,'value': array[i].state})
                // }
                // console.log(state,'state',address,'address');
                dispatch({
                    type: 'GETTING_CREATED_RESPONSE',
                    payload: response.data

                })
                // dispatch({
                //     type: 'GETTING_STATE',
                //     payload: state

                // })
                // dispatch({
                //     type: 'GETTING_ADDRESS',
                //     payload: address

                // })


            })
            .catch(error => {

                let showError=error.toString()

            })
    }
}

export const getUpdatingExistingState=(id,data) => {

    console.log(data,'response');
    return (dispatch) => {
        axios.put(`http://localhost:8080/api/tutorials/${id}`,data

        )
            .then(response => {
                // let address={}
                // let state=[]

                // let array=response.data
                // for(let i=0; i<array.length; i++) {
                //     // address[array[i].location]=array[i].state
                //     address[array[i].state]=array[i].location

                //     state.push({'label': array[i].state,'value': array[i].state})
                // }
                // console.log(state,'state',address,'address');
                dispatch({
                    type: 'GETTING_RESPONSE_UPDATE',
                    payload: response.data

                })

            })
            .catch(error => {

                let showError=error.toString()

            })
    }
}


export const getDeleteExistingState=(id) => {

    // console.log(data,'response');
    return (dispatch) => {
        axios.delete(`http://localhost:8080/api/tutorials/${id}`,

        )
            .then(response => {
                // let address={}
                // let state=[]

                // let array=response.data
                // for(let i=0; i<array.length; i++) {
                //     // address[array[i].location]=array[i].state
                //     address[array[i].state]=array[i].location

                //     state.push({'label': array[i].state,'value': array[i].state})
                // }
                // console.log(state,'state',address,'address');
                dispatch({
                    type: 'GETTING_RESPONSE_DELETE',
                    payload: response.data

                })
                // getPostingData()

            })
            .catch(error => {

                let showError=error.toString()

            })
    }
}

export const getCreatedNewEntity=(data) => {

    console.log(data,'response');
    return (dispatch) => {

        dispatch({
            type: 'GETTING_CREATED_RESPONSE',
            payload: data

        })



    }
}

export const getPostingData=() => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/api/tutorials`,
            {
                // params: authenticationParam
            }
        )
            .then(response => {


                let address={}
                let state=[]
                let stateID=[]

                let array=response.data
                for(let i=0; i<array.length; i++) {
                    // address[array[i].location]=array[i].state
                    address[array[i].state]=array[i].location
                    stateID.push(array[i].id)
                    state.push({'label': array[i].state,'value': array[i].state})
                    // console.log(state,'state',address,'address');
                }
                dispatch({
                    type: 'GETTING_LOCATION_RESPONSE',
                    payload: response.data

                })
                dispatch({
                    type: 'GETTING_STATE',
                    payload: state

                })
                dispatch({
                    type: 'GETTING_STATE_ID',
                    payload: stateID

                })

                dispatch({
                    type: 'GETTING_ADDRESS',
                    payload: address

                })


            })
            .catch(error => {

                let showError=error.toString()

            })
    }
}


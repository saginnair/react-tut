const initState = {
    posts:[
        {id:1,title:"xyz1",body:"body1"},
        {id:2,title:"xyz2",body:"body2"},
        {id:3,title:"xyz3",body:"body3"}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer
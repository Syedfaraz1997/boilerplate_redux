

const INITIAL_STATE = {
    user : [{
        name : 'Syed Faraz Ali',
        email : 'syedfaraz210@gmail.com',
        data : []
    }]
}

export default (state = INITIAL_STATE ,action) =>{
    console.log("===>Action" , action)
        switch (action.type){
            case 'SETDATA':
                return({
                    ...state,
                    user : [...state.user , action.users]
                  
                })
        }

       return state;

}
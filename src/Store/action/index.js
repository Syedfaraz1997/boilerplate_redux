



        const set_data = (data) => {
             console.log("Runing .....")
             return (dispatch)=>{

               dispatch({ type : 'SETDATA' , users: {name : "Faiz" , email : "syedfaiz@gmail.com"}})

             }
          }


    export {
        set_data
    }
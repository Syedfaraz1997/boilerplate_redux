import React from 'react'
import { connect } from 'react-redux'
 import { set_data} from '../../Store/action'


class Home extends React.Component  {
  render(){
      var data = {name: 'syed sheraz' , email: 'syedsheraz12@gmail.com'}
      console.log("Home Props===>", this.props)
    return(
      <div>
          <h2> Redux Boiler Plate</h2>
          <button onClick={()=> this.props.set_data(data)}>Set DATA</button>
      </div>
    )
  }
}

 const mapStateToProps = (state) => ({
        name: state.user
 })


 const mapDispatchToProp = (dispatch) =>({
    // setdata : ()=> console.log("Hello World")
    set_data : (data)=> dispatch(set_data(data))
})


export default connect(mapStateToProps ,mapDispatchToProp)(Home);

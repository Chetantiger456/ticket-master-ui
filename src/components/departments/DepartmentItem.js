import React from 'react'
import { connect } from 'react-redux'

class DepartmentItem extends React.Component{
   constructor(props){
       super(props)
       
   } 

   render() {
       return(
           <div>
               <table border = "1">
                   <thead>
                       <tr>
                           <th>Department Name</th>
                       </tr>
                   </thead>
                   <tbody>
                   {
                    this.props.departments.map((department) => {
                        return(
                        <tr>
                            <td>{department.name}</td>
                        </tr>
                        )
                    })
                    }
                   </tbody>
               </table>
           </div>
       )
   }
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}
export default connect(mapStateToProps)(DepartmentItem)
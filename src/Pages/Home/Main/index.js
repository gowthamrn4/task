import React, { Component, forwardRef } from 'react';
import Header from '../../../Components/Header/index';
import { connect } from 'react-redux';
import * as Auth from '../../../Action/Auth';
import styles from './styles.css';
import MaterialTable from 'material-table';
import history from '../../../Routing/history';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theader:[
                {
                    title:"#",
                    field:"id",
                    headerStyle: {
                        backgroundColor: '#6ecd93',
                        color: '#FFF'
                    },
                    editable:"never"
                },
                {
                    title:"Name",
                    field:"name",
                    headerStyle: {
                        backgroundColor: '#6ecd93',
                        color: '#FFF'
                    }
                },
                {
                    title:"Age",
                    field:"age",
                    headerStyle: {
                        backgroundColor: '#6ecd93',
                        color: '#FFF'
                    }
                },
                {
                    title:"Gender",
                    field:"gender",
                    headerStyle: {
                        backgroundColor: '#6ecd93',
                        color: '#FFF'
                    },
                },
                {
                    title:"Email Id",
                    field:"email",
                    headerStyle: {
                        backgroundColor: '#6ecd93',
                        color: '#FFF'
                    }
                },
                {
                    title:"Phone No",
                    field:"phoneNo",
                    headerStyle: {
                        backgroundColor: '#6ecd93',
                        color: '#FFF'
                    }
                }
            ]
        }
    }


    render() {

        const { data,addEmployee,updateEmployee,deleteEmployee } = this.props; 
        return (
            <div className="page_content">
                <Header history={history} onClick={()=>{history.push('/login');}}/>
                 <div className="contentbox" style={{ marginTop:"30px" }}>
                     <div className="row">
                         <div className="col-md-2">
                       
                         </div>
                         <div className="col-md-8">
                         <MaterialTable
                            title="Employee List 123"
                            columns={this.state.theader}
                            data={data}
                            editable={{
                                onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    let payload = newData;
                                    let randomId =   Math.floor(Math.random() * 100)
                                    payload.id = (this.props.data.length + randomId)
                                    addEmployee(payload)
                                    }, 600);
                                }),
                                onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                    updateEmployee(newData)
                                    }
                                    }, 600);
                                }),
                                onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    deleteEmployee(oldData)
                                    }, 600);
                                }),
                            }}
                            />
                         </div>
                         <div className="col-md-2">
                         </div>
                     </div>
                 </div>
            </div>

        );
    }
}



function mapStateToProps(state) {
    return {
        data: state.AuthReducers.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addEmployee:(data)=>dispatch(Auth.AddEmployee(data)),
        updateEmployee:(data)=>dispatch(Auth.UpdateEmployee(data)),
        deleteEmployee:(data)=>dispatch(Auth.DeleteEmployee(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

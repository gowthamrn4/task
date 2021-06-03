import React, { Component, forwardRef } from 'react';
import Header from '../../../Components/Header/index';
import { connect } from 'react-redux';
import history from '../../../Routing/history'
import { Card } from '../../../Components';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return (
            <div className="page_content">
                <Header history={history} onClick={()=>{
                    history.push('/login');
                }}/>
                <div style={{ margin: '10px 20px', }}>
                    <div className="row">
                    {
                        this.props.data.map((resp,index)=>{
                            return (
                                <div className="col-md-2 col-lg-2 col-sm-2" style={{ marginBottom: 10, }}>
                                     <Card id={resp.id} name={resp.name} email={resp.email} phone={resp.phoneNo}/>
                                </div>
                            )
                        })
                    }
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

export default connect(mapStateToProps, null)(ListView);

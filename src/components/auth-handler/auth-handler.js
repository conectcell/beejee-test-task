import  {useState} from 'react';
import {authLogin, authLogout} from "../../redux/actions/auth-actions";
import {connect} from "react-redux";

const AuthHandler = ({authLogin, authLogout, children}) =>
{
    useState(()=>{
       if(typeof localStorage.getItem('token') === 'string')
       {
           authLogin();
       } else {
           authLogout();
       }
    },[])

    return children;
};

export default connect(null, {authLogin, authLogout})(AuthHandler);

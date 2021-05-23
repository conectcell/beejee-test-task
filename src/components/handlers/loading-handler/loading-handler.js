import React from 'react';
import Spinner from "../../spinner";
import {connect} from "react-redux";

const LoadingHandler = ({children, loading}) =>
{
    return loading ? <Spinner/> : <>{children}</>;
};

const mapStateToProps = state =>
{
    return {loading: state.common.loading};
};


export default connect(mapStateToProps, null)(LoadingHandler);

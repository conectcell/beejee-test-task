import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Navigation = ({loggedIn}) =>
{
    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Sixth navbar example">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BeeJees</Link>

                <div className=" navbar-collapse" id="navbarsExample06">
                    <ul className="navbar-nav ml-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/add">Добавить задачу</Link>
                        </li>
                        {!loggedIn &&  <li className="nav-item"><Link className="nav-link" to="/login">Авторизация</Link></li>}
                        {loggedIn &&  <li className="nav-item"><Link className="nav-link" to="/logout">Выход</Link></li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
const mapStateToProps = state => {
    return { loggedIn: state.auth.loggedIn };
};
export default connect(mapStateToProps, null)(Navigation);

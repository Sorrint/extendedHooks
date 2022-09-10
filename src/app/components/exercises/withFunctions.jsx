import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("token");

    const onLogin = () => {
        localStorage.setItem("token", "Sorrint");
    };

    const onLogOut = () => {
        localStorage.removeItem("token");
    };
    return (
        <>
            <CardWrapper>
                {isAuth ? (
                    <Component onLogOut={onLogOut} isAuth={isAuth} />
                ) : (
                    <Component onLogin={onLogin} isAuth={isAuth} />
                )}
            </CardWrapper>
        </>
    );
};

export default withFunctions;

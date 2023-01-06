import React from 'react';
import { Route, Navigate } from 'react-router-dom';
const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuth) {
					return <Component {...props} />;
				} else {
					return (
						<Navigate
							to={{ pathname: '/login', state: { from: props.location } }}
						/>
					);
				}
			}}
		/>
	);
};

export default PrivateRoute;

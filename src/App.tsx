import {Suspense} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import routes from "./routes/routes";
export default function App() {
    function loading() {
        return <div className="animated fadeIn pt-1 text-center">Loading...</div>
    }

    return <div className="App">
        <BrowserRouter>
            <Suspense fallback={loading()}>
                <Routes>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    (route.restrictedBy == null || route.restrictedBy.validate() ?
                                        <route.component/> :
                                        <Navigate to={{pathname: route.restrictedBy.redirectOnFailure}} replace/>)
                                }/>
                        ) : null;
                    })}
                    <Route path="*" element={<Navigate to="/404" replace/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    </div>
}
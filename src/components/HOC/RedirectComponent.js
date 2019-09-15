import React from 'react';
import {Redirect} from "react-router-dom";



// export class  SiteTemplate extends React.Component  {
//     render () {
//
//
//         return <div>
//             <header>menu 1 menu 2 {this.props.header()}
//             </header>
//         <nav></nav>
// <section>{this.props.mainCotent()}</section>
//             <footer>Footer</footer>
//         </div>
//     }
// }


export const WithAthREdirect = (Component) => {
    class  WrapRedirectComponent extends React.Component  {
            render () {

            if(!this.props.isAuth) return  <Redirect to="/login"/>;

            return <Component {...this.props} />


        }


    }

    return WrapRedirectComponent;
};



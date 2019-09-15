import React from 'react';
import Prealoder from "../Common/Ptrealoder";


export const WithSuspense = (Component) => {
      const SuspensComponent =   (props) => {

        return <React.Suspense fallback={<Prealoder/>}>
            <Component {...props}/>
            </React.Suspense>

    };

      return SuspensComponent

};


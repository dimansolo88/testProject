import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Texarea} from "../Common/ValidationForm/ValidationTexarea";
import {maxLengthCreator, minLengthCreator} from "../../Utilites/Validation";



const maxLength5 = maxLengthCreator(5);
const minlength = minLengthCreator(1);


const AddpostForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={Texarea} placeholder={"enter your post"} name={"addNewPost"}
                       validate={[maxLength5,minlength ]} type={"text"}/>


            </div>

            <div>
                <button> add post</button>
            </div>

        </form>

    )
};

export const AddPostReduxForm = reduxForm({form: 'addNewPOst'})(AddpostForm);





// import React from 'react';
// import {Field, reduxForm} from "redux-form";
// import {Texarea} from "../Common/ValidationForm/ValidationTexarea";
// import {maxLengthCreator, minLengthCreator} from "../../Utilites/Validation";
//
//
//
// const maxLength5 = maxLengthCreator(5);
// const minlength = minLengthCreator(1);
//
//
// const AddpostForm = (props) => {
//
//     return (
//
//         <form onSubmit={props.handleSubmit}>
//
//             <div>
//                 <Field component={Texarea} placeholder={"enter your post"} name={"addNewPost"}
//                        validate={[maxLength5,minlength ]} type={"text"}/>
//
//
//             </div>
//
//             <div>
//                 <button> add post</button>
//             </div>
//
//         </form>
//
//     )
// };
//
// export const AddPostReduxForm = reduxForm({form: 'addNewPOst'})(AddpostForm);
//
//

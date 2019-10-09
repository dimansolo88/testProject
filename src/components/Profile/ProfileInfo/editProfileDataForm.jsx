import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, Texarea} from "../../Common/ValidationForm/ValidationTexarea";


const EditProfileDataForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                FullName: <Field component={Input} type="text" name={"fullName"}
                                 placeholder={"enter your fullName"}/>
            </div>

            <div>
                lookingForAJob: <Field component={"input"} type="checkbox" name={"lookingForAJob"}/>
            </div>

            <div>
                LookingForAJobDescription: <Field component={Texarea} type="text"
                                                  name={"lookingForAJobDescription"}/>
            </div>

            <div>
                aboutMe: <Field component={Input} type="text" name={"aboutMe"}
                                placeholder={"enter your fullName"}/>
            </div>

            <div>
                <button> Save profile </button>
            </div>

        </form>
    )
};

export const EditProfileReduxForm = reduxForm({
    form: 'editProfile'
})(EditProfileDataForm);


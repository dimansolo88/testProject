import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, Texarea} from "../../Common/ValidationForm/ValidationTexarea";
import style from "../../Common/ValidationForm/textarea.module.css";


const EditProfileDataForm = ({handleSubmit, setProfileUser, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={style.showError}>
                <span> {error} </span>

            </div> }

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
                <b> Contacts: </b> {Object.keys(setProfileUser.contacts).map(c =>
                <div key={c}>
                    <div>
                        <b>{c}:</b> <Field component={Input} type="text" name={`contacts.${c}`}
                                           placeholder={`enter your ${c}`}/>
                    </div>

                </div>
            )}
            </div>

            <div>
                <button> Save profile</button>
            </div>

        </form>
    )
};

export const EditProfileReduxForm = reduxForm({
    form: 'editProfile'
})(EditProfileDataForm);


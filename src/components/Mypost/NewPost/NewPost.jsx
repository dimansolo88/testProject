import React from "react";
import n from './NewPost.module.css';


const NewPost = React.memo( (props) => {


    return (

        <div className={n.newpost}>
            new posts
        </div>
    );
});


export default NewPost;


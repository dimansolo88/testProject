import React from "react";
import style from "./Users.module.css"
import * as axios from "axios";
import photos from "../../../assets/images/userPhoto.jpg"


class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        return <div className={style.usersWrapper}>


            {this.props.users.map(u => <div key={u.id}>

                <div>
                    <img src={u.photos.small != null ? u.photos.small : photos} alt="avatar" className={style.avatar}/>
                </div>


                <div>

                    {u.followed ? <button onClick={() => {
                            this.props.unfollU(u.id)
                        }}> unfollow </button> :
                        <button onClick={() => {
                            this.props.follU(u.id)
                        }}> follow </button>}


                </div>

                <div>
                    {u.name}
                </div>
                {/*<div>*/}
                {/*    {u.lastName}*/}
                {/*</div>*/}
                <div>
                    {u.uniqueUrlName}
                </div>
                {/*<div>*/}
                {/*    {u.status}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    {u.location.city}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    {u.location.country}*/}
                {/*</div>*/}


            </div>)}

        </div>
    }


}


export default Users;
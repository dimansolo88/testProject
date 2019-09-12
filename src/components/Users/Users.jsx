import React from "react";
import style from "./Users.module.css"
// import * as axios from "axios";
import photos from "../../assets/images/userPhoto.jpg"
import Prealoder from "../Common/Ptrealoder";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Pagination/Paginator";


const Users = (props) => {


    return <div className={style.usersWrapper}>

        <div>
            {props.isFetching ? <Prealoder/> : null}
        </div>


        <div className={style.paginator}>

            <Paginator {...props} />


        </div>


        {props.users.map(u => <div key={u.id}>

            <div>

                <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : photos} alt="avatar" className={style.avatar}/>

                </NavLink>

            </div>


            <div>

                {u.followed ? <button disabled={props.followingProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          // props.toogleDiableBotton(true, u.id);
                                          // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                          // //     withCredentials: true,
                                          // //     headers: {
                                          // //         'API-KEY': 'dc432957-d988-48fc-8955-9690b8d0ed47'
                                          // //     }
                                          // // })
                                          // usersAPI.unfoloow(u.id)
                                          //     .then(response => {
                                          //         props.toogleDiableBotton(false, u.id);
                                          //         if (response.data.resultCode === 0) {
                                          //             props.unfollU(u.id)
                                          //         }
                                          //
                                          //     });

                                          props.unfollowThunkCreator(u.id)


                                      }}> unfollow </button> :
                    <button disabled={props.followingProgress.some(id => id === u.id)}
                            onClick={() => {
                                // props.toogleDiableBotton(true, u.id);
                                // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                // //     withCredentials: true,
                                // //     headers: {
                                // //         'API-KEY': 'dc432957-d988-48fc-8955-9690b8d0ed47'
                                // //     }
                                // // })
                                //
                                // usersAPI.follow(u.id)
                                //     .then(response => {
                                //         props.toogleDiableBotton(false, u.id);
                                //         if (response.data.resultCode === 0) {
                                //             props.follU(u.id)
                                //         }
                                //     })

                                props.followThunkCreator(u.id)


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
            <div>
                {u.status}
            </div>

            {/*<div>*/}
            {/*    {u.location.city}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {u.location.country}*/}
            {/*</div>*/}


        </div>)}



    </div>


};


export default Users;
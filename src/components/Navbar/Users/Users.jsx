import React from "react";
import style from "./Users.module.css"
// import * as axios from "axios";
import photos from "../../../assets/images/userPhoto.jpg"
import Prealoder from "../../Common/Ptrealoder";


const Users = (props) => {
debugger;

    let quantityUsersPages = Math.ceil(props.totalUsers / props.quantityUsersOnPage);

    let quantityPages = [];
    for (let i = 1; i <= quantityUsersPages; i++) {
        quantityPages.push(i)
    }


    return <div className={style.usersWrapper}>

        <div>
            {props.isFetching ? <Prealoder/> : null}
        </div>


        <div className={style.pageHover}>


            {quantityPages.map(pages => {
                return <span key={pages} onClick={(e) => {
                    props.onChanhePage(pages)
                }}
                             className={props.currentPage ===
                             pages && style.numberLInk}> {pages} </span>
            })}


            {/*<span> 2 </span>*/}
            {/*<span> 3 </span>*/}
            {/*<span className={style.numberLInk} > 4 </span>*/}
            {/*<span> 5 </span>*/}

        </div>


        {props.users.map(u => <div key={u.id}>

            <div>
                <img src={u.photos.small != null ? u.photos.small : photos} alt="avatar" className={style.avatar}/>
            </div>


            <div>

                {u.followed ? <button onClick={() => {
                        props.unfollU(u.id)
                    }}> unfollow </button> :
                    <button onClick={() => {
                        props.follU(u.id)
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
import React from "react";
import style from "./Users.module.css"
import * as axios from "axios";
import photos from "../../../assets/images/userPhoto.jpg"


class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.quantityUsersOnPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.totalusersCount(response.data.totalCount)
            })
    }


    onChanhePage = (pages) => {
        this.props.serPages(pages)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}
        &count=${this.props.quantityUsersOnPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    };


    render() {


        let quantityUsersPages = Math.ceil(this.props.totalUsers / this.props.quantityUsersOnPage);

        let quantityPages = [];
        for (let i = 1; i <= quantityUsersPages; i++) {
            quantityPages.push(i)
        }


        return <div className={style.usersWrapper}>


            <div className={style.pageHover}>


                {quantityPages.map(pages => {
                    return <span key={pages} onClick={(e) => {this.onChanhePage(pages)}}
                                 className={this.props.currentPage ===
                    pages && style.numberLInk}> {pages} </span>
                })}


                {/*<span> 2 </span>*/}
                {/*<span> 3 </span>*/}
                {/*<span className={style.numberLInk} > 4 </span>*/}
                {/*<span> 5 </span>*/}

            </div>


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
    }


}


export default Users;
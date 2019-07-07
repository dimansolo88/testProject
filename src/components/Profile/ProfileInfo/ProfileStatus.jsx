import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };


    activeEditMode () {
        this.setState(
            {editMode: true}
        )
    }

    onStatusChange (e) {
        this.setState({status: e.target.value})
    }

    disableEditMode () {
        this.setState(
            {editMode: false}
        );
        this.props.updateStatus(this.state.status)
    }





    render() {

        return (
            <div>

                {!this.state.editMode ? <div>
                    <span onDoubleClick={this.activeEditMode.bind(this)}> {this.props.status || "change status"} </span>
                </div> : <div>
                    <input  onChange={this.onStatusChange.bind(this)} autoFocus={true}
                            onBlur={this.disableEditMode.bind(this)} value={this.props.status}/>
                </div>
                }


            </div>
        )

    }


}


export default ProfileStatus;






//
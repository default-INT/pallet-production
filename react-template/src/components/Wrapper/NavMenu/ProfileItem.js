import React from "react";
import "./ProfileItem.css"


/**
 * EN
 * The component storage in self to user icon and main information about him.
 *
 * RU
 * Компонет хранит в себе иконку пользователя и основную информацию о нём.
 */
class ProfileItem extends React.Component {

    /**
     * TODO: Get from server
     * @return {*}
     */
    render() {
        return (
            <div id="profile">
                <div className="profile-icon">
                    <img src="/resources/img/logo192.png" alt="" />
                </div>
                <div className="profile-info">
                    <div className="status">Администратор</div>
                    <div className="fullName">Трофимов Е.В.</div>
                </div>
            </div>
        )
    }
}

export default ProfileItem
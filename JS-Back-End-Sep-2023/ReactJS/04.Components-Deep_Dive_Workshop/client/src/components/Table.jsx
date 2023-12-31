import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import * as userService from "../services/userService";
import CreateUserModal from "./CreateUserModal";
import UserDetailsModal from "./UserDetailsModal";
import DeleteUserModal from "./DeleteUserModal";
import Spinner from "./Spinner";

export default function Table() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreateModal, setCreateModal] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        userService.getAllUsers()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    const onCreateUserClick = () => {
        setCreateModal(true);
    }

    const hideCreateModal = () => {
        setCreateModal(false);
    }

    const userCreateHandler = async (event) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.currentTarget));

        const newUser = await userService.createUser(data);

        setUsers(state => [...state, newUser]);

        setCreateModal(false);
    }

    const hideUserInfo = () => {
        setUserInfo(false);
    }

    const onUserInfoClick = (userId) => {
        setSelectedUser(userId)
        setUserInfo(true);
    }

    const hideDeleteModal = () => {
        setShowDelete(false);
    }

    const onDeleteClick = (userId) => {
        setSelectedUser(userId);
        setShowDelete(true);
    }

    const userDeleteHandler = async () => {
        try {
            await userService.deleteUser(selectedUser);

        } catch (error) {
            console.log(error.message);
        }

        setShowDelete(false);
        setUsers(state => state.filter(user => user._id !== selectedUser));
    }

    return (
        <div className="table-wrapper">
            {showCreateModal && (
                <CreateUserModal
                    hideModal={hideCreateModal}
                    onUserCreate={userCreateHandler}
                />
            )}

            {userInfo && (
                <UserDetailsModal
                    hideModal={hideUserInfo}
                    userId={selectedUser}
                />
            )}

            {showDelete && 
                (
                <DeleteUserModal
                    hideModal={hideDeleteModal}
                    onDeleteUser={userDeleteHandler}
                />
                )
            }

            {isLoading && <Spinner />}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="svg-inline--fa fa-arrow-down Table_icon__+HHgn icon" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="svg-inline--fa fa-arrow-down Table_icon__+HHgn icon" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="svg-inline--fa fa-arrow-down Table_icon__+HHgn icon" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="svg-inline--fa fa-arrow-down Table_icon__+HHgn icon" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="svg-inline--fa fa-arrow-down Table_icon__+HHgn icon active-icon" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map(user => (
                        <UserItem
                            key={user._id}
                            userId={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            phoneNumber={user.phoneNumber}
                            imageUrl={user.imageUrl}
                            createdAt={user.createdAt}
                            onInfoClick={onUserInfoClick}
                            onDeleteClick={onDeleteClick}
                        />
                    ))}

                </tbody>
            </table>

            <button className="btn-add btn" onClick={onCreateUserClick}>Add new user</button>

        </div>
    );
}
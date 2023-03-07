import React from "react";
import { getUserDetails } from '../store/actions/index'
import { useDispatch, useSelector } from "react-redux";

const UsersComponent = ({ users }) => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.userReducer.details)

  return (
    <>
      <h2> Users Listing </h2>
      {details && details?.length !== '' && (<div>
        {details[0]?.name}
      </div>)}
      {users.map((user) =>
        <div key={user.id}>
          {user.id} - {user.name}
          <button onClick={() => {
            dispatch(getUserDetails(user.id))
          }}>
            click - {user.id}
          </button>
        </div>
      )}
    </>
  )
}

export default UsersComponent;
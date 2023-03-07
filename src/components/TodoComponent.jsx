import React from "react";
import { getUserDetails } from '../store/actions/index'
import { useDispatch } from "react-redux";

const TodoComponent = ({ todos }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2> Todo Listing </h2>

      {todos.map((user) =>
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

export default TodoComponent;
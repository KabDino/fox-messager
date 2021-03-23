import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
  useEffect( () => {
    setStatus(props.status)
  }, [props.status] )

  let [editMode, setEditMode] = useState(false);

  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || '------'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            value={status}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;

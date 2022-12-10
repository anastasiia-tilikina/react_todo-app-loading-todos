/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { NewToDoField } from '../NewToDoField';

export const Header: React.FC = () => {
  return (
    <header className="todoapp__header">
      <button
        data-cy="ToggleAllButton"
        type="button"
        className="todoapp__toggle-all active"
      />

      <NewToDoField />
    </header>
  );
};
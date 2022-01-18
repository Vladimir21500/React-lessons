import React from 'react';

const Expand = ({ isShowContent, title, children, onToggle }) => {
  const handleClick = () => {
    onToggle();
  };

  const content = isShowContent ? (
    <div className="expand__content">
      {children}
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    </div>
  ) : null;

  const icon = isShowContent ? (
    <i className="fas fa-chevron-right"></i>
  ) : (
    <i className="fas fa-chevron-down"></i>
  );

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={handleClick}>
          {icon}
        </button>
      </div>
      {content}
    </div>
  );
};

export default Expand;

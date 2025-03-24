'use client'
export function Button({ children, className, onClick }) {
    return (
      <button className={className} onClick={(e) => {
        e.preventDefault();
        onClick();
      }}>
        {children}
      </button>
    );
  }
  
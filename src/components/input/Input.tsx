'use client'
export function Input({ className, placeholder, onChange, value }) {
    return (
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  }
  
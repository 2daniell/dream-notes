export function Button({ children, className, type="button" || "submit", onClick }) {
    return (
        <button className={className} type={type} onClick={(e) => {
            e.preventDefault();
            onClick();
        }}>
            {children}
        </button>
    )
}
export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-[#8458B3] hover:bg-[#6d3c99] text-white font-semibold px-4 py-2 rounded ${props.className}`}
    >
      {children}
    </button>
  );
}

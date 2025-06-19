export function Input({ ...props }) {
  return (
    <input
      {...props}
      className={`bg-[#3A3E4F] text-white px-4 py-2 rounded-md w-full outline-none ${props.className}`}
    />
  );
}

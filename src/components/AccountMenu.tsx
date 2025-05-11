interface AccountMenuProps {
  onClose: () => void;
}

export default function AccountMenu({ onClose }: AccountMenuProps) {
  return (
    <div className="absolute -right-12 mt-5 w-48 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
      <button
        className="w-full text-left px-4 py-2 text-sm hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={onClose}
      >
        Profile
      </button>
      <button
        className="w-full text-left px-4 py-2 text-sm hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={onClose}
      >
        Settings
      </button>
      <button
        className="w-full text-left px-4 py-2 text-sm hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={onClose}
      >
        Logout
      </button>
    </div>
  );
} 
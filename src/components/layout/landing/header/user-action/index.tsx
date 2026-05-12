import { Magicpen, Profile, ProfileCircle, SearchNormal } from "iconsax-react";

export const UserAction = () => {
  return (
    <div className="flex gap-2 items-center">
      <button className="border border-gray-200 rounded-md p-1">
        <SearchNormal size={20} color="black" />
      </button>
      <button className="border border-gray-200 rounded-md p-1">
        <ProfileCircle size={20} color="black" />
      </button>
    </div>
  );
};

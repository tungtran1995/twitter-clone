import { PROFILE_HEADER_PHOTO } from "@/constants/path";
import { memo, type ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

const UserWallpaper = memo((): ReactElement => {
    const location = useLocation();
    const wallpaper = null
    const userProfileId = 1

    return (
        <div>
            {wallpaper && (
                <Link 
                    to={`${PROFILE_HEADER_PHOTO}/${userProfileId}`}
                    state={{
                        background: location,
                        imageSrc: wallpaper
                    }}
                >
                    <img src={wallpaper} alt={wallpaper} key={wallpaper} />
                </Link>
            )}
        </div>
        
    )
})

export default UserWallpaper
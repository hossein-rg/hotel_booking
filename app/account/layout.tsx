import React from 'react';
import SideNavigation from '../_components/SideNavigation';
function layout({ children }: React.PropsWithChildren<{}>) {
    return <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
        <SideNavigation />
        <div className="py-1">
            {children}
        </div>
    </div>;
}

export default layout;


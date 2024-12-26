import React from 'react'

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-screen flex items-center justify-center pt-16 md:mt-0">
            {children}
        </div>
    );
}


export default AuthLayout
import React from 'react'

import Header from './header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className='h-screen'>{children}</main>
        </div>
    )
}

export default Layout
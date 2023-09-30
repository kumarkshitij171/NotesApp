import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import NoteState from '../context/Note/NoteState'
import Footer from './Footer'

function Layout() {
    return (
        <>
        {/* have to wrap whole thing inside the notestate i.e a context api using this api we can use the context api thing in any place */}
            <NoteState>
                <Navbar />
                <Outlet />
                <Footer />
            </NoteState>
        </>
    )
}

export default Layout

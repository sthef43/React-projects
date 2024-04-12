// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <main className=" bg-red-400 m-auto h-screen max-w-[375px] dekstop:max-w-[100vw]">
            {children}
        </main>
    )
}

export default Layout
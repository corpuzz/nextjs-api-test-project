/* eslint-disable */ 
export default function Layout({ children }: any) {
    return (
        <>
            <a href="/profile/aboutme" className="text-xl">About Me</a>
            <a href="/profile/contact" className="text-xl">Contact</a>
            {children}
        </>
    )
}
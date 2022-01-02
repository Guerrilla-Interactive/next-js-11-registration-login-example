export { Layout };

function Layout({ children }) {
    return (
        <div className="">
            <div className="container">
                {children}
            </div>
        </div>
    );
}
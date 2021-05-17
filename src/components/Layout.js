import Header from './Nav'

function Layout({children}) {
    return (
        <div className="App">
            <Header/>
            {children}
        </div>
    );
}

export default Layout;

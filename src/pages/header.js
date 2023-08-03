



export function Header(){

    return(
        <div className="header">
            <nav className="navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">basket</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <div className="login">
                <p className="login"><a href="#">login</a></p>
                <p className="Sign"><a href="#">Sign Up</a></p>
            </div>
        </div>
    )
}
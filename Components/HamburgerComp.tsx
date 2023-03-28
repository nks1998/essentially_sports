import styles from "../styles/hamburger.module.css"
const HamburgerComponent = () => {
    return(
        <div>
            <input placeholder={"Search..."} type={"text"} className={styles.searchBar}/>
            <div className={styles.options}>
                <p>About</p>
                <p>Pricing</p>
                <p>Offer</p>
                <p>FAQ</p>
                <p>Terms and Condition</p>
                <p>Login</p>
            </div>
        </div>
    )
}
export default HamburgerComponent
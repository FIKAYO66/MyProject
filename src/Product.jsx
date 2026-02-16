import styles from "./Product.module.css";
import { BiSolidMessageRoundedDots } from "react-icons/bi";




function Product() {
  return (
    <div className={styles.background}>

        <div className={styles.signup}>
                    <div>
            <BiSolidMessageRoundedDots className={styles.icon}/>
        </div>

      <h1>Sign up for a new account</h1>
      <p>Already a member? <a href="https://app.userjot.com/auth/signin">Sign in</a></p>
      <div className={styles.form}>
        <h1>Email</h1>
      <input placeholder="Enter your email"></input>
        <h1 className={styles.password}>Password</h1>
      <input placeholder="Enter your password"></input>
      <p>By signing up, you agree to our <a href="https://userjot.com/terms">Terms</a> & <a href="#">Privacy</a>.</p>
      <button className={styles.buttono}>Sign Up</button>
      <div className={styles.divider}>
        <span>or continue with</span>
      </div>
      <button>Google</button>
      </div>
      </div>
    </div>
  );
}

export default Product;


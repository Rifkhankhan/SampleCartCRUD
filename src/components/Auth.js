import classes from './Auth.module.css';
import store from '../store/index'
import { authActions } from '../store/auth';
import { useSelector,useDispatch} from 'react-redux';
const Auth = () => {
const dispatch = useDispatch()

const loginHandler = () =>{
  dispatch(authActions.login())
}

return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button className={classes.button} onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

import { Link } from "remix";

export default function ConfirmEmail() {
  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2>Activate your account</h2>
          <p>Please click the link in the email we just sent you and then you can:</p>
          <div className="my3">
            <Link to="/auth/signin" className="btn">Sign in</Link>
          </div>
        </div>
      </div></div>
  );
}

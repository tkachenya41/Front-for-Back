import { UserAPI } from "@/api/User";
import Style from "../Users.module.scss";

export function User({ user }: { user: UserAPI }) {
  return (
    <>
      {
        <div className={Style.user} key={user.id}>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Password:</b> {user.password}
          </p>
          <p>
            <b>Role:</b> {user.role}
          </p>
        </div>
      }
    </>
  );
}

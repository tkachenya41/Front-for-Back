import { UserAPI } from "@/api/User";
import Style from "./Users.module.scss";

export function Users({ users }: { users: UserAPI[] | null }) {
  return (
    <>
      {users && (
        <div className={Style.container}>
          {users.map((user) => (
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
          ))}
        </div>
      )}
    </>
  );
}

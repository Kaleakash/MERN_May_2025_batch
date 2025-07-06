import { useContext } from "react";
import UserContext from "./UserContext";

function DisplayUser() {
let contextReference = useContext(UserContext);
    return(
        <div>
            <h2>User Details</h2>
            {
                contextReference.users.length > 0 ? (
                    <ul>
                        {
                            contextReference.users.map((user, index) => (
                                <li key={index}>
                                    Name: {user.name}, Age: {user.age}
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p>No users available</p>
                )
            }
        </div>
    )
}

export default DisplayUser;
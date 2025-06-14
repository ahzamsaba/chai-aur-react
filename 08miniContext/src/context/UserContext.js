import React from "react";

const UserContext = React.createContext()

export default UserContext


// <UserContext>
// {/* Every component has access to UserContext just like globally declared */}
// <Login>
//     <Card>
//         <Data />
//     </Card>
// </Login>
// <UserContext/> 
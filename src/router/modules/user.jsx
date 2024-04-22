export default {
    path: "/user",
    element:  <div>User</div>,
    children: [
        {
            path: ":id",
            element: <div>User ID</div>,
        }
    ]
}
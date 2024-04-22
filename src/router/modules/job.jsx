export default {
    path: "/job",
    element:  <div>Job</div>,
    children: [
        {
            path: ":id",
            element: <div>Job ID</div>,
        }
    ]
}
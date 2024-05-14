import job from "./modules/job.jsx";
import user from "./modules/user.jsx";
import company from "./modules/company.jsx";
import auth from "./modules/auth.jsx";
import home from "./modules/home.jsx";
import employer from "./modules/employer.jsx";

const routes = [
    job,
    user,
    company,
    ...auth,
    home,
    employer,
];

export default routes;

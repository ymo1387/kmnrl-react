import { Link } from "react-router-dom"

const RegisterLink = () => {
    return (
        <div className="cs-main-pagination py-0 px-5">
            <span className="fs-4 fw-light">New customer?</span>
            <ul className="p-0 mb-0">
                <li>
                    <Link to="/register" className="cs-hover-op fs-4">Create account</Link>
                </li>
            </ul>
        </div>
    )
}

const LoginLink = () => {
    return (
        <div className="cs-main-pagination py-0 px-5">
            <span className="fs-4 fw-light">Existing customer?</span>
            <ul className="p-0 mb-0">
                <li>
                    <Link to="/login" className="cs-hover-op fs-4">Log in to your account</Link>
                </li>
            </ul>
        </div>
    )
}

export { RegisterLink,LoginLink };
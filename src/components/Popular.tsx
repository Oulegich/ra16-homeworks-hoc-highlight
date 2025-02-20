import { PropsWithChildren } from "react"

function Popular(props: PropsWithChildren) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

export default Popular
import { PropsWithChildren } from "react"

function New(props: PropsWithChildren) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

export default New
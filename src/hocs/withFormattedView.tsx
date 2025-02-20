import { ComponentType, PropsWithChildren } from "react"
import Popular from "../components/Popular"
import New from "../components/New"

const withFormattedView = (checkPopular: (view: number) => boolean) => {
    return (Component: ComponentType<PropsWithChildren<Video>>) => {
        const FormattedComponent = (props: { views: number, url?: string }) => {
            if (checkPopular(props.views)) {
                return (<Popular>
                    <Component {...props} />
                </Popular>)
            } else {
                return (<New>
                    <Component {...props} />
                </New>)
            }
        }

        return FormattedComponent
    }
}

export default withFormattedView
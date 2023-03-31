import './page.module.css'
import {ReactNode} from "react"
import HeadMenu from "../../components/head-menu"

export interface ProfileProps {
    content: ReactNode
}

export default function Profile(props: ProfileProps) {
    return <div>
        <HeadMenu/>
        {props.content}
    </div>
}

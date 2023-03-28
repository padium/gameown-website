import Dashboard from "../page"

function ProfilePage() {
    return <div>User page</div>
}

const page =() => <Dashboard content={<ProfilePage/>}/>
export default page
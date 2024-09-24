import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

export default async function Admin(){
    const {getRoles, getUser} = getKindeServerSession()
    const roles = await getRoles()
    const user = await getUser()

    if(!user){
        return redirect("/api/auth/login")
    }

    if(!roles){
        return redirect("/redirect-user")
    }

    if(roles[0].name !== "Admin"){
        return redirect("/redirect-user")
    }
    console.log(roles)

    return(
        <>
        <h1>
            Welcome to The admin Page.
        </h1>
        <p>Only Admins can see this page</p>
        </>
    )
}
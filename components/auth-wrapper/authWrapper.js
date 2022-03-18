import {useRouter} from "next/router";

export default function AuthWrapper({ children, status }) {
    const router = useRouter()
    if(typeof window !== 'undefined' && !localStorage.getItem("user")){
        router.push("/login")
    }

    return (
        <>
        </>
    )
};
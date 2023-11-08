import {redirect} from "next/navigation";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const token = searchParams.get('token');

    return redirect(`/logout/check?token=${token}`);
}
import { Session } from "next-auth";

interface LogoutProps {
  session: Session;
  onClick: () => void;
}
export default function Logout({ session, onClick }: LogoutProps) {
    return (
      <div className="flex flex-col gap-2">
        <span>Signed in as <span className="font-semibold">{session.user?.email}</span></span>
        <button onClick={onClick} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 w-28">Sign out</button>
      </div>
    )
  
}
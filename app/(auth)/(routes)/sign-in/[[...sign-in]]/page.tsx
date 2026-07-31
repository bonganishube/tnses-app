import { redirect } from 'next/navigation'

// TEMPORARY: authentication is disabled, so "Log in" drops straight into the
// dashboard. Restore the <SignIn /> form when Clerk is wired back up.
const page = () => {
  redirect("/home")
}

export default page

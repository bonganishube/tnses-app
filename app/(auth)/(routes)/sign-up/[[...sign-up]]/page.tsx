import { redirect } from 'next/navigation'

// TEMPORARY: authentication is disabled, so "Sign up" drops straight into the
// dashboard. Restore the <SignUp /> form when Clerk is wired back up.
const page = () => {
  redirect("/home")
}

export default page

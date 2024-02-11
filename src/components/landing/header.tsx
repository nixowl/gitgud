import { GithubAuth } from "./github-auth"

export function Header() {
  return (
    <header className="fixed flex w-full px-5">
      <div className="mx-auto my-0 flex w-full max-w-screen-lg items-center justify-between py-9">
        <a href="/">logo</a>
        <nav className="">
          <ul className="flex gap-3">
            <li>
              <a href="/dashboard/profile">Dashboard</a>
            </li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <GithubAuth />
        </div>
      </div>
    </header>
  )
}

export default Header

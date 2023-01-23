/* eslint-disable jsx-a11y/anchor-is-valid */

import ActiveLink from '../active-link/active-link';

export interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
          <svg
              width="77"
              height="23"
              viewBox="0 0 77 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.317 13.717L36.21 2.84497H40.833L40.911 13.717C40.911 15.965 42.072 17.199 44.011 17.199C45.994 17.199 47.211 15.965 47.211 13.692V5.86797H51.806V13.717C51.806 18.191 48.856 21.383 44.019 21.383C39.219 21.383 36.317 18.191 36.317 13.717Z"
                fill="#ffffff"
              ></path>
              <path
                d="M51.325 2.22304C51.325 3.45077 52.3203 4.44604 53.548 4.44604C54.7757 4.44604 55.771 3.45077 55.771 2.22304C55.771 0.995316 54.7757 4.48227e-05 53.548 4.48227e-05C52.3203 4.48227e-05 51.325 0.995316 51.325 2.22304Z"
                fill="#8E3CCB"
              ></path>
              <path
                d="M72.486 20.005C72.486 21.2328 73.4813 22.228 74.709 22.228C75.9367 22.228 76.932 21.2328 76.932 20.005C76.932 18.7773 75.9367 17.782 74.709 17.782C73.4813 17.782 72.486 18.7773 72.486 20.005Z"
                fill="#FF5E32"
              ></path>
              <path
                d="M54.263 11.778C54.2502 10.5302 54.4849 9.29226 54.9535 8.13574C55.4221 6.97922 56.1154 5.92709 56.9932 5.0402C57.871 4.1533 58.9159 3.44924 60.0675 2.96875C61.2192 2.48825 62.4547 2.24084 63.7025 2.24084C64.9504 2.24084 66.1858 2.48825 67.3375 2.96875C68.4891 3.44924 69.5341 4.1533 70.4119 5.0402C71.2897 5.92709 71.983 6.97922 72.4516 8.13574C72.9202 9.29226 73.1549 10.5302 73.142 11.778C73.1549 13.0258 72.9202 14.2637 72.4516 15.4203C71.983 16.5768 71.2897 17.6289 70.4119 18.5158C69.5341 19.4027 68.4891 20.1068 67.3375 20.5873C66.1858 21.0678 64.9504 21.3152 63.7025 21.3152C62.4547 21.3152 61.2192 21.0678 60.0675 20.5873C58.9159 20.1068 57.871 19.4027 56.9932 18.5158C56.1154 17.6289 55.4221 16.5768 54.9535 15.4203C54.4849 14.2637 54.2502 13.0258 54.263 11.778ZM68.532 11.778C68.5814 11.11 68.4944 10.439 68.2762 9.80571C68.0581 9.17244 67.7133 8.59019 67.263 8.09438C66.8126 7.59858 66.2661 7.19959 65.6567 6.92171C65.0473 6.64383 64.3877 6.49287 63.718 6.478C61.228 6.478 58.881 8.413 58.881 11.778C58.8215 12.4476 58.9021 13.1223 59.1175 13.7591C59.333 14.3959 59.6786 14.9809 60.1325 15.4768C60.5863 15.9727 61.1384 16.3688 61.7536 16.6397C62.3689 16.9107 63.0338 17.0506 63.706 17.0506C64.3783 17.0506 65.0432 16.9107 65.6584 16.6397C66.2736 16.3688 66.8257 15.9727 67.2796 15.4768C67.7334 14.9809 68.0791 14.3959 68.2945 13.7591C68.51 13.1223 68.5905 12.4476 68.531 11.778H68.532Z"
                fill="#ffffff"
              ></path>
              <path
                d="M15.624 11.882C15.624 17.323 11.561 20.903 5.709 20.903H0V2.86304H5.708C11.585 2.86304 15.624 6.46304 15.624 11.882ZM4.6 16.744H5.881C8.952 16.744 10.981 14.978 10.981 11.882C10.981 8.78604 8.945 6.99704 5.874 6.99704H4.595L4.6 16.744Z"
                fill="#ffffff"
              ></path>
              <path
                d="M29.229 14.011H22.694V20.903H18.104V2.86304H22.694V9.85104H29.224V2.86304H33.819V20.903H29.224L29.229 14.011Z"
                fill="#ffffff"
              ></path>
            </svg>
          </a>

          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get started
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <ActiveLink
                  href="/"
                  activeClassName="text-blue-600 hover:text-blue-400"
                  legacyBehavior
                >
                  <a>Home</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  href="/company"
                  activeClassName="text-blue-600 hover:text-blue-400"
                  legacyBehavior
                >
                  <a>Company</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  href="/features"
                  activeClassName="text-blue-600 hover:text-blue-400"
                  legacyBehavior
                >
                  <a>Features</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  href="/contact"
                  activeClassName="text-blue-600 hover:text-blue-400"
                  legacyBehavior
                >
                  <a>Contact</a>
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

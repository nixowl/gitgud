import { HTMLAttributes } from "react"

export const Icons = {
  Attachment: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.3299 12.15L9.85993 14.62C8.48993 15.99 8.48993 18.2 9.85993 19.57C11.2299 20.94 13.4399 20.94 14.8099 19.57L18.6999 15.68C21.4299 12.95 21.4299 8.51004 18.6999 5.78004C15.9699 3.05004 11.5299 3.05004 8.79993 5.78004L4.55993 10.02C2.21993 12.36 2.21993 16.16 4.55993 18.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  BacklogStatus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12C2 17.52 6.48 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  ),
  BlockedStatus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9199 22C17.4199 22 21.9199 17.5 21.9199 12C21.9199 6.5 17.4199 2 11.9199 2C6.41992 2 1.91992 6.5 1.91992 12C1.91992 17.5 6.41992 22 11.9199 22Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.91992 12H15.9199"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  CancelledStatus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.16992 14.8299L14.8299 9.16992"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8299 14.8299L9.16992 9.16992"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  CheckStatus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M11.9946 16H12.0036"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Check: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.75 3.99992L3.58 6.82992L9.25 1.16992"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  ChevronDown: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.94995"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Close: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Menu / Close_SM">
          <path
            id="Vector"
            d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  ),
  DoneStatus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  File: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/folder">
        <g id="folder">
          <path
            id="Vector"
            d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </g>
      </g>
    </svg>
  ),
  Home: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 17.99V14.99"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Image: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.18 16.9599L19.05 9.64988C17.99 7.16988 16.04 7.06988 14.73 9.42988L12.84 12.8399C11.88 14.5699 10.09 14.7199 8.84999 13.1699L8.62999 12.8899C7.33999 11.2699 5.51999 11.4699 4.58999 13.3199L2.86999 16.7699C1.65999 19.1699 3.40999 21.9999 6.08999 21.9999H18.85C21.45 21.9999 23.2 19.3499 22.18 16.9599Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.47 8C9.12686 8 10.47 6.65685 10.47 5C10.47 3.34315 9.12686 2 7.47 2C5.81315 2 4.47 3.34315 4.47 5C4.47 6.65685 5.81315 8 7.47 8Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  InProgressStatus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Left: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.9999 12.0001V14.6701C17.9999 17.9801 15.6499 19.3401 12.7799 17.6801L10.4699 16.3401L8.15995 15.0001C5.28995 13.3401 5.28995 10.6301 8.15995 8.97005L10.4699 7.63005L12.7799 6.29005C15.6499 4.66005 17.9999 6.01005 17.9999 9.33005V12.0001Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Logout: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M2 12H14.88" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12.65 8.65002L16 12L12.65 15.35"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Moon: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  More: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.0156 5C14.0156 3.9 13.1156 3 12.0156 3C10.9156 3 10.0156 3.9 10.0156 5C10.0156 6.1 10.9156 7 12.0156 7C13.1156 7 14.0156 6.1 14.0156 5Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M14.0156 19C14.0156 17.9 13.1156 17 12.0156 17C10.9156 17 10.0156 17.9 10.0156 19C10.0156 20.1 10.9156 21 12.0156 21C13.1156 21 14.0156 20.1 14.0156 19Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M14.0156 12C14.0156 10.9 13.1156 10 12.0156 10C10.9156 10 10.0156 10.9 10.0156 12C10.0156 13.1 10.9156 14 12.0156 14C13.1156 14 14.0156 13.1 14.0156 12Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  ),
  Pen: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.90979 1.84003L1.71979 7.03003C1.51979 7.23003 1.3298 7.62003 1.2898 7.90003L1.0098 9.88003C0.9098 10.6 1.40979 11.1 2.12979 11L4.10978 10.72C4.38978 10.68 4.7798 10.49 4.9798 10.29L10.1698 5.10003C11.0598 4.21003 11.4898 3.17003 10.1698 1.85003C8.8498 0.520029 7.80979 0.94003 6.90979 1.84003Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.16992 2.58008C6.60992 4.15008 7.83992 5.39008 9.41992 5.83008"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  PlusSquare: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 16V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Plus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ),
  Right: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12V9.33004C6 6.02005 8.35 4.66005 11.22 6.32005L13.53 7.66004L15.84 9.00005C18.71 10.66 18.71 13.37 15.84 15.03L13.53 16.37L11.22 17.71C8.35 19.34 6 17.99 6 14.67V12Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Search: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M22 22L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ),
  Settings: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.01562 9.10998V14.88C3.01562 17 3.01562 17 5.01562 18.35L10.5156 21.53C11.3456 22.01 12.6956 22.01 13.5156 21.53L19.0156 18.35C21.0156 17 21.0156 17 21.0156 14.89V9.10998C21.0156 6.99998 21.0156 6.99999 19.0156 5.64999L13.5156 2.46999C12.6956 1.98999 11.3456 1.98999 10.5156 2.46999L5.01562 5.64999C3.01562 6.99999 3.01562 6.99998 3.01562 9.10998Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0156 15C13.6725 15 15.0156 13.6569 15.0156 12C15.0156 10.3431 13.6725 9 12.0156 9C10.3588 9 9.01562 10.3431 9.01562 12C9.01562 13.6569 10.3588 15 12.0156 15Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Spinner: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M200 400C310.457 400 400 310.457 400 200C400 89.5431 310.457 0 200 0C89.5431 0 0 89.5431 0 200C0 310.457 89.5431 400 200 400ZM200 366.667C292.047 366.667 366.667 292.047 366.667 200C366.667 107.953 292.047 33.3333 200 33.3333C107.953 33.3333 33.3333 107.953 33.3333 200C33.3333 292.047 107.953 366.667 200 366.667Z"
        fill="url(#paint0_angular_2_125)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M379.694 160.012C388.823 158.834 397.178 165.28 398.356 174.409C399.451 182.895 400 191.443 400 200C400 209.205 392.538 216.667 383.333 216.667C374.129 216.667 366.667 209.205 366.667 200C366.667 192.869 366.209 185.746 365.297 178.674C364.119 169.545 370.565 161.189 379.694 160.012Z"
        fill="#DEF1F3"
      />
      <defs>
        <radialGradient
          id="paint0_angular_2_125"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(200 200) rotate(90) scale(200)"
        >
          <stop offset="0.055" stop-color="#4A0282" />
          <stop offset="0.505" stop-color="#8801F2" />
          <stop offset="0.84" stop-color="#4A0282" stop-opacity="0" />
          <stop stop-color="#FF0000" stop-opacity="0" />
          <stop offset="0.0001" stop-color="#FF0000" stop-opacity="0" />
          <stop offset="1" stop-color="#0000FF" />
        </radialGradient>
      </defs>
    </svg>
  ),
  Star: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.7457 3.51001L15.5057 7.03001C15.7457 7.52002 16.3857 7.99001 16.9257 8.08001L20.1157 8.61001C22.1557 8.95001 22.6357 10.43 21.1657 11.89L18.6857 14.37C18.2657 14.79 18.0357 15.6 18.1657 16.18L18.8757 19.25C19.4357 21.68 18.1457 22.62 15.9957 21.35L13.0057 19.58C12.4657 19.26 11.5757 19.26 11.0257 19.58L8.03566 21.35C5.89566 22.62 4.59566 21.67 5.15566 19.25L5.86566 16.18C5.99566 15.6 5.76566 14.79 5.34566 14.37L2.86566 11.89C1.40566 10.43 1.87566 8.95001 3.91566 8.61001L7.10566 8.08001C7.63566 7.99001 8.27566 7.52002 8.51566 7.03001L10.2757 3.51001C11.2357 1.60001 12.7957 1.60001 13.7457 3.51001Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Sun: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  TodoStatus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.89 5.08002C14.02 4.82002 13.06 4.65002 12 4.65002C7.20996 4.65002 3.32996 8.53002 3.32996 13.32C3.32996 18.12 7.20996 22 12 22C16.79 22 20.67 18.12 20.67 13.33C20.67 11.55 20.13 9.89002 19.21 8.51002"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.13 5.32L13.24 2"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.13 5.31995L12.76 7.77995"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Trash: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.8499 9.13989L18.1999 19.2099C18.0899 20.7799 17.9999 21.9999 15.2099 21.9999H8.7899C5.9999 21.9999 5.9099 20.7799 5.7999 19.2099L5.1499 9.13989"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3301 16.5H13.6601"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 12.5H14.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  UserEdit: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.7002 16.25C19.0002 17.33 19.8402 18.17 20.9202 18.47"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  UserPlus: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 19.5H14.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 21.5V17.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.99 21.81C10.17 21.81 8.36004 21.35 6.98004 20.43C4.56004 18.81 4.56004 16.17 6.98004 14.56C9.73004 12.72 14.24 12.72 16.99 14.56"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  UserRemove: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.41 18.09L15.59 20.91"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.41 20.91L15.59 18.09"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 21.81C10.18 21.81 8.37005 21.35 6.99005 20.43C4.57005 18.81 4.57005 16.17 6.99005 14.56C9.74005 12.72 14.25 12.72 17 14.56"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  User: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Users: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Warning: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M11.9999 21.41H5.93993C2.46993 21.41 1.01993 18.93 2.69993 15.9L5.81993 10.28L8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29L21.2999 15.91C22.9799 18.94 21.5199 21.42 18.0599 21.42H11.9999V21.41Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9946 17H12.0036"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Workspace: ({ ...props }: HTMLAttributes<SVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.01 2.92L18.91 5.54C20.61 6.29 20.61 7.53 18.91 8.28L13.01 10.9C12.34 11.2 11.24 11.2 10.57 10.9L4.67002 8.28C2.97002 7.53 2.97002 6.29 4.67002 5.54L10.57 2.92C11.24 2.62 12.34 2.62 13.01 2.92Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
}

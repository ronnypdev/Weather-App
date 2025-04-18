type iconProps = {
  size: string;
}

export default function WindIcon({size}: iconProps) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={size}
          viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
          strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
          <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
          <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
    </svg>
  )
}

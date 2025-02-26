import React from 'react';

export default function LinkButton({ content, url }) {
  return (
    <div className="inline-block pb-2">
      <a
        href={url}
        target="_blank"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'inline-block'
        }}
      >
        <div className="flex items-center justify-center px-4 py-1 rounded-md bg-[#018CF1] text-white gap-1 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.2267 6.70244C17.1794 6.55177 17.1214 6.4047 17.0531 6.26239V6.25322C16.7343 5.60229 16.2057 5.07854 15.553 4.76693C14.9004 4.45532 14.162 4.37413 13.4576 4.53653C12.7532 4.69893 12.1242 5.09538 11.6725 5.6616C11.2208 6.22781 10.9729 6.93056 10.9692 7.65587C10.9692 7.88398 10.9937 8.11142 11.0422 8.33427C11.0425 8.33732 11.0425 8.34039 11.0422 8.34344C11.0605 8.43511 11.0879 8.52679 11.1153 8.61847C11.2784 9.26427 11.3101 9.93642 11.2086 10.5948C11.1071 11.2532 10.8745 11.8843 10.5246 12.4505C10.1748 13.0167 9.71483 13.5063 9.17226 13.8902C8.62969 14.274 8.01562 14.5443 7.3667 14.6848C6.71778 14.8252 6.04731 14.8331 5.39531 14.7078C4.74331 14.5825 4.12314 14.3267 3.57181 13.9556C3.02049 13.5845 2.54932 13.1057 2.18642 12.5479C1.82351 11.99 1.57632 11.3645 1.45959 10.7087C1.62466 11.8455 2.02578 12.9349 2.63698 13.9063C3.24817 14.8777 4.05583 15.7094 5.00766 16.3477C5.95948 16.986 7.03426 17.4166 8.16242 17.6115C9.29058 17.8065 10.447 17.7616 11.5567 17.4796C12.6664 17.1976 13.7048 16.6849 14.6046 15.9747C15.5044 15.2644 16.2455 14.3724 16.78 13.3565C17.3145 12.3406 17.6304 11.2233 17.7074 10.0771C17.7843 8.93082 17.6205 7.78113 17.2267 6.70244Z"
              fill="#6378FF"
            />
            <path
              d="M4.24581 9.46183C5.30547 11.0112 7.49788 10.8736 7.49788 10.8736C6.94977 10.3419 6.59351 9.85604 6.55697 8.47173C6.52043 7.08743 5.73482 6.72072 5.73482 6.72072C7.14161 5.83146 6.63918 4.86887 6.59351 3.79626C6.5661 3.12702 6.95891 2.63197 7.2695 2.34778C5.48184 2.61651 3.86652 3.56733 2.7603 5.00201C1.65408 6.43668 1.14232 8.2445 1.33173 10.0486C1.45962 9.69102 3.26836 8.03169 4.24581 9.46183Z"
              fill="white"
            />
            <path
              d="M17.2267 6.70244C17.1794 6.55177 17.1214 6.4047 17.0531 6.26239V6.25322C16.7343 5.60229 16.2057 5.07854 15.553 4.76693C14.9004 4.45532 14.162 4.37413 13.4576 4.53653C12.7532 4.69893 12.1242 5.09538 11.6725 5.6616C11.2208 6.22781 10.9729 6.93056 10.9692 7.65587C10.9692 7.88398 10.9937 8.11142 11.0422 8.33427C11.0425 8.33732 11.0425 8.34039 11.0422 8.34344C11.0605 8.43511 11.0879 8.52679 11.1153 8.61847C11.2784 9.26427 11.3101 9.93642 11.2086 10.5948C11.1071 11.2532 10.8745 11.8843 10.5246 12.4505C10.1748 13.0167 9.71483 13.5063 9.17226 13.8902C8.62969 14.274 8.01562 14.5443 7.3667 14.6848C6.71778 14.8252 6.04731 14.8331 5.39531 14.7078C4.74331 14.5825 4.12314 14.3267 3.57181 13.9556C3.02049 13.5845 2.54932 13.1057 2.18642 12.5479C1.82351 11.99 1.57632 11.3645 1.45959 10.7087C1.62466 11.8455 2.02578 12.9349 2.63698 13.9063C3.24817 14.8777 4.05583 15.7094 5.00766 16.3477C5.95948 16.986 7.03426 17.4166 8.16242 17.6115C9.29058 17.8065 10.447 17.7616 11.5567 17.4796C12.6664 17.1976 13.7048 16.6849 14.6046 15.9747C15.5044 15.2644 16.2455 14.3724 16.78 13.3565C17.3145 12.3406 17.6304 11.2233 17.7074 10.0771C17.7843 8.93082 17.6205 7.78113 17.2267 6.70244Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8655 8.91175C15.8655 12.9066 12.6386 16.145 8.65801 16.145C6.54534 16.145 4.64497 15.2328 3.32666 13.7794C3.40647 13.8405 3.48821 13.8993 3.5718 13.9555C4.12312 14.3266 4.74329 14.5824 5.3953 14.7077C6.0473 14.833 6.71777 14.8252 7.36669 14.6847C8.01561 14.5442 8.62968 14.274 9.17225 13.8901C9.71481 13.5062 10.1748 13.0166 10.5246 12.4504C10.8745 11.8842 11.1071 11.2531 11.2086 10.5947C11.3101 9.93636 11.2784 9.26421 11.1153 8.6184C11.0879 8.52673 11.0605 8.43505 11.0422 8.34338C11.0424 8.34032 11.0424 8.33726 11.0422 8.33421C10.9937 8.11136 10.9692 7.88392 10.9691 7.65581C10.9729 6.9305 11.2208 6.22775 11.6724 5.66153C12.1241 5.09532 12.7532 4.69886 13.4576 4.53647C13.7482 4.46947 14.0446 4.44393 14.3383 4.45893C15.2952 5.68657 15.8655 7.23232 15.8655 8.91175Z"
              fill="white"
            />
          </svg>
          <span className="text-white font-medium text-sm">{content}</span>
        </div>
      </a>
    </div>
  );
}

import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

import { css, cx } from '@leafygreen-ui/emotion';

import {
  BaseLogoProps,
  SupportedColors,
  SupportedColorsMap,
} from '../Logo.types';
import { getAccessibleProps } from '../utils';

/**
 * # UniversityLogoLockup
 *
 * React Component that displays the University Logo Lockup.
 *
 * ```
 * <UniversityLogoLockup />
 * ```
 * @param props.color Determines the color of the logo.
 * @param props.height Determines height of the <Logo /> component.
 */
export const UniversityLogoLockup = React.forwardRef(
  (
    {
      height = 40,
      className,
      color = SupportedColors.GreenDark2,
      role = 'img',
      'aria-label': ariaLabel = 'MongoDB Logo',
      ...rest
    }: BaseLogoProps,
    ref: React.LegacyRef<SVGSVGElement> | undefined,
  ): ReactElement => {
    const fill = SupportedColorsMap[color];

    return (
      <svg
        {...getAccessibleProps({ 'aria-label': ariaLabel, role })}
        className={cx(
          css`
            width: auto;
            height: ${height}px;
          `,
          className,
        )}
        height={height}
        viewBox="0 0 240 34"
        fill="none"
        ref={ref}
        {...rest}
      >
        <path
          d="M8.11238 0.0506724C8.10061 0.0269485 8.06527 0.0150865 8.04172 0.0388105L8.02994 0.0506724C7.80615 0.370946 6.71079 1.913 5.43876 3.43133C-5.47954 17.4285 7.15836 26.8824 7.15836 26.8824L7.26436 26.9536C7.35859 28.4126 7.59415 30.5122 7.59415 30.5122H8.54817C8.54817 30.5122 8.78374 28.4245 8.87796 26.9536L8.98396 26.8706C8.98396 26.8706 21.6219 17.4285 10.7036 3.41947C9.43153 1.913 8.33617 0.359084 8.11238 0.0506724ZM8.80729 25.9454C8.65418 26.1826 8.08883 26.6808 8.08883 26.6808C8.08883 26.6808 7.52348 26.1945 7.37036 25.9454V25.9216L8.05349 10.6671C8.05349 10.6434 8.07705 10.6315 8.10061 10.6434C8.11238 10.6434 8.12416 10.6553 8.12416 10.6671L8.80729 25.9216V25.9454Z"
          fill={fill}
        />
        <path
          d="M31.682 23.5617L26.4407 10.6796L26.429 10.644H22.3302V11.51H22.9898C23.402 11.51 23.7318 11.8421 23.7318 12.2573C23.7318 12.2573 23.7318 12.2573 23.7318 12.2691L23.614 25.2343C23.614 25.6376 23.2842 25.9697 22.8838 25.9816L22.2124 25.9934V26.8475H26.1934V25.9934L25.7812 25.9816C25.3807 25.9697 25.0509 25.6376 25.0509 25.2343V13.0164L30.7751 26.8356C30.8929 27.1085 31.1991 27.2389 31.47 27.1203C31.5995 27.061 31.6938 26.9661 31.7527 26.8356L37.3473 13.313L37.4297 25.2224C37.4297 25.6376 37.0999 25.9697 36.6877 25.9816H36.2637V26.8356H40.9278V25.9816H40.2918C39.8795 25.9697 39.5615 25.6376 39.5498 25.2343L39.5144 12.2691C39.5144 11.854 39.8442 11.5218 40.2447 11.51H40.9278V10.644H36.9468L31.682 23.5617Z"
          fill={fill}
        />
        <path
          d="M68.3708 25.7799C68.2413 25.6375 68.1706 25.4477 68.1824 25.2579V18.9118C68.1824 17.7019 67.8291 16.7529 67.1224 16.0768C66.4157 15.4006 65.4616 15.0566 64.2603 15.0566C62.576 15.0566 61.2451 15.7446 60.3146 17.0969C60.3028 17.1206 60.2675 17.1325 60.2322 17.1325C60.1968 17.1325 60.1733 17.1088 60.1733 17.0732L59.7375 15.3769H59.0072L57.1345 16.4564V17.0495H57.6174C57.8177 17.0376 58.0061 17.1088 58.1592 17.2274C58.3006 17.3697 58.3712 17.5714 58.3594 17.773V25.2579C58.383 25.6375 58.0885 25.9578 57.7116 25.9815C57.6881 25.9815 57.6645 25.9815 57.641 25.9815H57.1699V26.8474H61.4806V25.9815H61.0095C60.6326 26.0052 60.3146 25.7087 60.2911 25.3291C60.2911 25.3054 60.2911 25.2817 60.2911 25.2579V20.3115C60.2911 19.6709 60.4324 19.0304 60.7033 18.4373C60.9624 17.8323 61.3864 17.3223 61.9047 16.9308C62.4582 16.5394 63.1178 16.3259 63.7892 16.3496C64.6136 16.3496 65.2379 16.6106 65.6265 17.1325C66.0152 17.6544 66.2155 18.3305 66.2155 19.1372V25.2579C66.239 25.6375 65.9446 25.9578 65.5677 25.9815C65.5441 25.9815 65.5205 25.9815 65.497 25.9815H65.0259V26.8474H69.3367V25.9815H68.8655C68.7006 25.9934 68.5122 25.9222 68.3708 25.7799Z"
          fill={fill}
        />
        <path
          d="M107.922 11.6168C106.697 10.9644 105.319 10.6322 103.929 10.6441H98.2753V11.51H98.8289C99.2882 11.5456 99.6534 11.9133 99.6769 12.3641V25.1157C99.6769 25.3411 99.5709 25.5546 99.406 25.7088C99.2529 25.8749 99.0409 25.9698 98.8171 25.9816H98.2635V26.8476H103.917C105.307 26.8594 106.685 26.5273 107.91 25.8749C109.111 25.2343 110.112 24.2616 110.795 23.0754C111.502 21.8655 111.867 20.4065 111.867 18.7458C111.867 17.0852 111.514 15.638 110.795 14.4162C110.124 13.23 109.123 12.2573 107.922 11.6168ZM108.805 22.5772C108.275 23.6092 107.568 24.3803 106.697 24.8785C105.825 25.3767 104.836 25.6376 103.835 25.6258H102.692C102.468 25.6258 102.256 25.5309 102.103 25.3529C101.938 25.1987 101.844 24.9852 101.832 24.7598V12.72C101.868 12.2573 102.233 11.8896 102.68 11.8659H103.823C104.824 11.854 105.813 12.115 106.685 12.6132C107.556 13.1114 108.263 13.8824 108.793 14.9144C109.323 15.9345 109.594 17.2275 109.594 18.7458C109.618 20.2642 109.347 21.5453 108.805 22.5772Z"
          fill={fill}
        />
        <path
          d="M125.2 19.5996C124.682 18.9947 123.681 18.4846 122.503 18.2118C124.128 17.3933 124.964 16.2427 124.964 14.7599C124.976 14.0008 124.752 13.2416 124.328 12.6129C123.881 11.9724 123.257 11.4623 122.538 11.1539C121.69 10.7862 120.783 10.6083 119.865 10.632H113.516V11.4979H114.023C114.482 11.5335 114.847 11.9012 114.871 12.352V25.1036C114.871 25.329 114.765 25.5425 114.6 25.6967C114.447 25.8627 114.235 25.9695 114.011 25.9695H113.457V26.8354H120.347C121.337 26.8473 122.326 26.6694 123.257 26.3016C124.093 25.9814 124.811 25.4357 125.353 24.7359C125.871 24.0479 126.131 23.2057 126.131 22.233C126.154 21.2722 125.824 20.3351 125.2 19.5996ZM117.05 12.7197C117.085 12.2571 117.45 11.8893 117.898 11.8656H119.452C120.571 11.8656 121.396 12.1503 121.914 12.696C122.432 13.2416 122.691 13.9652 122.691 14.843C122.691 15.7445 122.444 16.4681 121.961 17.0137C121.478 17.5475 120.748 17.8203 119.782 17.8203H117.026V12.7197H117.05ZM123.469 23.8699C123.186 24.3919 122.774 24.8308 122.256 25.1392C121.714 25.4594 121.066 25.6255 120.3 25.6255H117.886C117.662 25.6255 117.45 25.5306 117.297 25.3527V25.3645C117.132 25.2103 117.038 24.9968 117.026 24.7714V19.0303H120.3C121.455 19.0303 122.338 19.3268 122.95 19.9199C123.563 20.513 123.869 21.2959 123.869 22.233C123.869 22.8024 123.74 23.3599 123.469 23.8699Z"
          fill={fill}
        />
        <path
          d="M51.9521 15.8038C50.0676 14.7955 47.8062 14.7955 45.9217 15.8038C45.0266 16.302 44.2728 17.0375 43.7663 17.939C42.7063 19.9199 42.7063 22.2923 43.7663 24.2733C44.2728 25.1748 45.0266 25.9102 45.9217 26.4084C47.8062 27.4167 50.0676 27.4167 51.9521 26.4084C52.8472 25.9102 53.601 25.1748 54.1075 24.2733C55.1675 22.2923 55.1675 19.9199 54.1075 17.939C53.601 17.0493 52.8472 16.302 51.9521 15.8038ZM51.7637 24.6054C51.057 25.4595 50.1147 25.8983 48.9369 25.8983C47.7591 25.8983 46.8051 25.4595 46.1102 24.6054C45.4153 23.7513 45.0501 22.5651 45.0501 21.1061C45.0501 19.6352 45.4035 18.4609 46.1102 17.6068C46.8169 16.7528 47.7591 16.3139 48.9369 16.3139C50.1147 16.3139 51.0688 16.7528 51.7637 17.6068C52.4586 18.4609 52.8237 19.6471 52.8237 21.1061C52.8237 22.577 52.4703 23.7513 51.7637 24.6054Z"
          fill={fill}
        />
        <path
          d="M93.5169 15.8038C91.6324 14.7955 89.371 14.7955 87.4865 15.8038C86.5914 16.302 85.8376 17.0375 85.3312 17.939C84.2711 19.9199 84.2711 22.2923 85.3312 24.2733C85.8376 25.1748 86.5914 25.9102 87.4865 26.4084C89.371 27.4167 91.6324 27.4167 93.5169 26.4084C94.4121 25.9102 95.1659 25.1748 95.6723 24.2733C96.7323 22.2923 96.7323 19.9199 95.6723 17.939C95.1659 17.0493 94.4238 16.302 93.5169 15.8038ZM93.3285 24.6054C92.6218 25.4595 91.6795 25.8983 90.5017 25.8983C89.3239 25.8983 88.3699 25.4595 87.675 24.6054C86.9801 23.7513 86.615 22.5651 86.615 21.1061C86.615 19.6352 86.9683 18.4609 87.675 17.6068C88.3817 16.7528 89.3239 16.3139 90.5017 16.3139C91.6795 16.3139 92.6336 16.7528 93.3285 17.6068C94.0234 18.4609 94.3885 19.6471 94.3885 21.1061C94.3885 22.577 94.0352 23.7513 93.3285 24.6054Z"
          fill={fill}
        />
        <path
          d="M76.745 15.0566C75.8498 15.0448 74.9665 15.2583 74.1656 15.6616C73.4236 16.0412 72.7875 16.5987 72.34 17.3104C71.9042 17.9865 71.6804 18.7813 71.6804 19.5879C71.6686 20.2878 71.8453 20.9876 72.1869 21.6044C72.5166 22.1857 72.976 22.6957 73.5296 23.0753L71.8453 25.3765C71.5391 25.7917 71.6333 26.3848 72.0455 26.6814C72.2104 26.8 72.3989 26.8593 72.5991 26.8593H73.082C72.6344 27.1558 72.2575 27.5473 71.9748 28.0099C71.6804 28.4844 71.5155 29.0419 71.5155 29.6113C71.5155 30.6314 71.9631 31.4736 72.8464 32.1023C73.7298 32.731 74.9429 33.0512 76.4859 33.0512C77.5223 33.0631 78.547 32.8852 79.5246 32.5293C80.3962 32.2209 81.1853 31.699 81.7978 31.011C82.3631 30.3467 82.6811 29.5045 82.6576 28.6267C82.6576 27.654 82.3042 26.966 81.4798 26.3018C80.7731 25.7443 79.666 25.4477 78.2879 25.4477H73.5767C73.5649 25.4477 73.5531 25.4477 73.5531 25.4358C73.5531 25.424 73.5531 25.4121 73.5531 25.4003L74.778 23.7396C75.0725 23.8701 75.3669 23.9768 75.6849 24.048C75.9912 24.1073 76.3092 24.131 76.6272 24.131C77.5459 24.1429 78.4646 23.9412 79.2891 23.5261C80.0429 23.1465 80.6789 22.589 81.1382 21.8773C81.5858 21.2011 81.8096 20.4064 81.8096 19.5998C81.8096 18.722 81.3856 17.1206 80.2313 16.3021C80.2313 16.3021 80.2313 16.2903 80.2431 16.2903L82.7872 16.575V15.4006H78.7355C78.0759 15.1634 77.4163 15.0566 76.745 15.0566ZM73.8829 27.8201C74.1538 27.4049 74.5189 27.0728 74.9547 26.8474H78.1466C79.0299 26.8474 79.5953 27.0254 79.9722 27.4049C80.3491 27.8082 80.5493 28.342 80.5375 28.8877C80.5611 29.718 80.1842 30.5009 79.5246 30.9991C78.8415 31.5329 77.9228 31.8057 76.7921 31.8057C75.8027 31.8057 74.9783 31.5803 74.3776 31.1533C73.7651 30.7144 73.4707 30.0739 73.4707 29.2435C73.4471 28.7453 73.6002 28.2471 73.8829 27.8201ZM79.2537 17.773C79.5364 18.2594 79.6895 18.8643 79.6895 19.576C79.6895 20.2996 79.5482 20.9046 79.2537 21.3791C78.9946 21.8417 78.6059 22.2094 78.1466 22.4704C77.7108 22.7076 77.2279 22.8262 76.7332 22.8381C75.9558 22.8381 75.2138 22.5415 74.6603 21.9959C74.0714 21.4384 73.7769 20.6199 73.7769 19.576C73.7769 18.5322 74.0714 17.7137 74.6603 17.1562C75.2138 16.6105 75.9558 16.3021 76.7332 16.314C77.2279 16.314 77.7108 16.4445 78.1466 16.6817C78.6177 16.9308 78.9946 17.3104 79.2537 17.773Z"
          fill={fill}
        />
        <path
          d="M130.677 24.6172C130.547 24.3918 130.359 24.202 130.123 24.0716C129.629 23.7987 129.04 23.7987 128.545 24.0716C128.309 24.202 128.121 24.3918 127.991 24.6172C127.721 25.0917 127.721 25.6729 127.991 26.1474C128.121 26.3846 128.309 26.5744 128.533 26.7049C129.028 26.9777 129.617 26.9777 130.111 26.7049C130.335 26.5744 130.535 26.3846 130.665 26.1593C130.948 25.6729 130.948 25.0917 130.677 24.6172ZM130.453 26.0525C130.347 26.2423 130.194 26.4084 129.994 26.5151C129.581 26.7405 129.087 26.7405 128.686 26.5151C128.498 26.4084 128.333 26.2423 128.227 26.0525C128.003 25.6255 128.003 25.1273 128.227 24.7002C128.333 24.5105 128.486 24.3444 128.686 24.2376C129.099 24.0123 129.593 24.0123 129.994 24.2376C130.182 24.3444 130.347 24.5105 130.453 24.7002C130.677 25.1273 130.677 25.6373 130.453 26.0525Z"
          fill={fill}
        />
        <path
          d="M129.97 25.9933C129.935 25.9933 129.911 25.9696 129.888 25.9459L129.617 25.507L129.476 25.4714C129.593 25.4595 129.699 25.4002 129.782 25.329C129.852 25.2579 129.9 25.1511 129.9 25.0444C129.911 24.9139 129.852 24.7953 129.746 24.7122C129.629 24.6292 129.476 24.5817 129.334 24.5936H128.722L128.698 24.6055V24.7122L128.722 24.7241H128.792C128.816 24.7241 128.84 24.7359 128.851 24.7478C128.863 24.7597 128.875 24.7834 128.875 24.8071V25.9103C128.875 25.934 128.863 25.9577 128.851 25.9696C128.84 25.9814 128.816 25.9933 128.792 25.9933H128.722L128.698 26.0052V26.1119L128.722 26.1357H129.346L129.37 26.1238V26.017L129.346 26.0052H129.275C129.252 26.0052 129.228 25.9933 129.216 25.9814C129.205 25.9696 129.193 25.9459 129.193 25.9221V25.4832H129.287L129.664 26.1238L129.688 26.1357H130.053L130.064 26.1238V26.0052L130.053 25.9933H129.97ZM129.181 25.329V24.7953C129.181 24.7478 129.216 24.7122 129.264 24.7122H129.311C129.381 24.7122 129.464 24.7359 129.511 24.7953C129.558 24.8546 129.593 24.9376 129.582 25.0206C129.593 25.1037 129.558 25.1867 129.499 25.246C129.44 25.3053 129.358 25.329 129.275 25.329H129.181Z"
          fill={fill}
        />
        <path
          d="M146.377 26.8352C145.494 26.8352 144.681 26.6929 143.939 26.3963C143.209 26.0998 142.573 25.6846 142.043 25.139C141.513 24.5933 141.112 23.929 140.818 23.1462C140.523 22.3633 140.382 21.4855 140.382 20.5128V10.9402H142.043V20.5602C142.043 21.3075 142.149 21.9718 142.349 22.5649C142.549 23.1462 142.844 23.6444 143.22 24.0358C143.597 24.4272 144.057 24.7357 144.587 24.9373C145.117 25.139 145.717 25.2457 146.365 25.2457C147.013 25.2457 147.614 25.139 148.144 24.9373C148.674 24.7357 149.133 24.4272 149.51 24.0358C149.887 23.6444 150.181 23.1462 150.382 22.5649C150.582 21.9837 150.688 21.3075 150.688 20.5602V10.9402H152.349V20.5128C152.349 21.4855 152.207 22.3633 151.913 23.1462C151.618 23.929 151.218 24.5933 150.688 25.139C150.158 25.6846 149.534 26.0998 148.792 26.3963C148.085 26.681 147.272 26.8352 146.377 26.8352Z"
          fill={fill}
        />
        <path
          d="M156.07 15.5547H157.602V17.4052C157.99 16.6697 158.509 16.1478 159.156 15.8157C159.792 15.4954 160.475 15.3293 161.194 15.3293C161.795 15.3293 162.336 15.4242 162.843 15.6259C163.349 15.8275 163.773 16.1122 164.138 16.48C164.504 16.8595 164.786 17.3103 164.986 17.8441C165.187 18.3779 165.293 18.9828 165.293 19.659V26.5508H163.762V19.8843C163.762 18.9117 163.502 18.1525 162.996 17.595C162.489 17.0375 161.818 16.7528 161.005 16.7528C160.523 16.7528 160.075 16.8477 159.663 17.0375C159.251 17.2273 158.885 17.5119 158.579 17.8797C158.273 18.2593 158.037 18.71 157.861 19.2438C157.684 19.7776 157.602 20.3825 157.602 21.0587V26.5389H156.07V15.5547Z"
          fill={fill}
        />
        <path
          d="M169.662 12.2571C169.333 12.2571 169.05 12.1385 168.826 11.9131C168.602 11.6877 168.485 11.4149 168.485 11.0828C168.485 10.7625 168.602 10.4897 168.826 10.2524C169.05 10.0271 169.333 9.90845 169.662 9.90845C169.98 9.90845 170.251 10.0271 170.475 10.2524C170.699 10.4778 170.805 10.7506 170.805 11.0828C170.805 11.4031 170.699 11.6759 170.475 11.9131C170.251 12.1385 169.98 12.2571 169.662 12.2571ZM168.873 15.5547H170.404V26.5626H168.873V15.5547Z"
          fill={fill}
        />
        <path
          d="M172.466 15.5547H174.173L178.178 24.297L182.182 15.5547H183.914L178.802 26.5626H177.601L172.466 15.5547Z"
          fill={fill}
        />
        <path
          d="M190.274 26.788C189.485 26.788 188.766 26.6456 188.095 26.3609C187.435 26.0762 186.858 25.6729 186.375 25.1629C185.893 24.6528 185.516 24.0479 185.245 23.348C184.974 22.6481 184.844 21.889 184.844 21.0705C184.844 20.2757 184.962 19.5284 185.221 18.8404C185.469 18.1406 185.834 17.5356 186.305 17.0137C186.776 16.4918 187.353 16.0885 188.036 15.7919C188.719 15.4954 189.485 15.353 190.345 15.353C191.216 15.353 191.982 15.531 192.653 15.875C193.313 16.219 193.866 16.6816 194.302 17.2509C194.738 17.8203 195.056 18.4846 195.256 19.22C195.456 19.9555 195.515 20.7265 195.445 21.5213H186.434C186.434 22.0906 186.54 22.6126 186.764 23.087C186.988 23.5615 187.271 23.9648 187.612 24.297C187.965 24.6291 188.366 24.9019 188.825 25.0917C189.285 25.2815 189.768 25.3764 190.274 25.3764C191.004 25.3764 191.664 25.2222 192.241 24.9138C192.818 24.6054 193.301 24.0716 193.678 23.3124H195.256C195.127 23.7869 194.926 24.2258 194.644 24.6528C194.361 25.0798 194.019 25.4476 193.607 25.7678C193.195 26.0881 192.712 26.3372 192.158 26.527C191.605 26.6931 190.981 26.788 190.274 26.788ZM190.274 16.7646C189.862 16.7646 189.461 16.8239 189.061 16.9425C188.66 17.0612 188.283 17.2509 187.93 17.5238C187.577 17.7966 187.282 18.1525 187.035 18.5795C186.788 19.0184 186.611 19.5403 186.505 20.1571H193.855C193.678 19.054 193.266 18.2118 192.618 17.6305C191.982 17.0612 191.193 16.7646 190.274 16.7646Z"
          fill={fill}
        />
        <path
          d="M198.318 15.5545H199.85V17.8201C199.967 17.4406 200.132 17.0966 200.368 16.8C200.592 16.5035 200.851 16.2544 201.133 16.0527C201.416 15.8511 201.722 15.7087 202.052 15.602C202.382 15.4952 202.7 15.4478 203.03 15.4478C203.324 15.4478 203.583 15.4715 203.819 15.5308V17.1322C203.524 17.0254 203.218 16.9779 202.9 16.9779C202.57 16.9779 202.217 17.061 201.852 17.2152C201.487 17.3813 201.157 17.6185 200.863 17.9506C200.568 18.2828 200.333 18.6979 200.144 19.208C199.956 19.7181 199.861 20.323 199.861 21.0229V26.5506H198.33V15.5545H198.318Z"
          fill={fill}
        />
        <path
          d="M209.225 26.7879C208.671 26.7879 208.141 26.7167 207.647 26.5862C207.152 26.4557 206.704 26.2541 206.316 25.9694C205.927 25.6966 205.609 25.3407 205.362 24.9255C205.126 24.5104 204.985 24.024 204.938 23.4665H206.469C206.551 23.8342 206.693 24.1426 206.869 24.3917C207.046 24.6408 207.27 24.8425 207.529 24.9848C207.788 25.1272 208.059 25.2339 208.353 25.3051C208.648 25.3763 208.931 25.4 209.225 25.4C209.849 25.4 210.391 25.2695 210.85 24.9967C211.31 24.7239 211.533 24.3087 211.533 23.7512C211.533 23.2649 211.38 22.8616 211.074 22.5531C210.768 22.2329 210.261 21.9838 209.567 21.794L208.141 21.4144C207.211 21.1653 206.504 20.7738 206.033 20.2282C205.562 19.6825 205.326 19.0183 205.326 18.2235C205.326 17.7728 205.421 17.3695 205.597 17.0136C205.774 16.6577 206.033 16.3612 206.351 16.1121C206.669 15.863 207.046 15.6732 207.494 15.5427C207.929 15.4122 208.401 15.3411 208.919 15.3411C209.496 15.3411 210.014 15.4241 210.473 15.5902C210.921 15.7562 211.31 15.9816 211.628 16.2663C211.946 16.551 212.205 16.8713 212.393 17.239C212.582 17.6067 212.7 17.9981 212.747 18.4015H211.239C211.074 17.8914 210.791 17.4762 210.391 17.1678C209.979 16.8594 209.496 16.7052 208.931 16.7052C208.365 16.7052 207.882 16.8357 207.482 17.1085C207.081 17.3813 206.881 17.749 206.881 18.2235C206.881 18.6506 207.011 19.0064 207.282 19.2911C207.552 19.5758 208.012 19.813 208.671 19.9791L210.356 20.418C211.227 20.6434 211.899 21.0229 212.381 21.5686C212.853 22.1142 213.088 22.8022 213.088 23.6326C213.088 24.1901 212.994 24.6646 212.794 25.0679C212.593 25.4593 212.323 25.7915 211.969 26.0406C211.616 26.2897 211.215 26.4795 210.744 26.5981C210.273 26.7286 209.767 26.7879 209.225 26.7879Z"
          fill={fill}
        />
        <path
          d="M216.704 12.2571C216.374 12.2571 216.092 12.1385 215.868 11.9131C215.644 11.6877 215.526 11.4149 215.526 11.0828C215.526 10.7625 215.644 10.4897 215.868 10.2524C216.092 10.0271 216.374 9.90845 216.704 9.90845C217.022 9.90845 217.293 10.0271 217.517 10.2524C217.741 10.4778 217.847 10.7506 217.847 11.0828C217.847 11.4031 217.741 11.6759 217.517 11.9131C217.293 12.1385 217.022 12.2571 216.704 12.2571ZM215.915 15.5547H217.446V26.5626H215.915V15.5547Z"
          fill={fill}
        />
        <path
          d="M225.125 26.6813C224.69 26.6813 224.277 26.622 223.9 26.4915C223.524 26.3729 223.194 26.1712 222.911 25.9103C222.628 25.6493 222.416 25.3172 222.252 24.9139C222.087 24.5224 222.016 24.0479 222.016 23.5023V17.0019H219.672V15.5548H222.016V12.4944H223.547V15.5548H226.739V17.0019H223.547V23.36C223.547 24.0598 223.7 24.558 224.018 24.819C224.336 25.0918 224.784 25.2223 225.361 25.2223C225.585 25.2223 225.82 25.1986 226.079 25.1511C226.339 25.1037 226.562 25.0444 226.739 24.9732V26.361C226.244 26.5864 225.703 26.6813 225.125 26.6813Z"
          fill={fill}
        />
        <path
          d="M230.013 31.165L232.416 26.0169L227.563 15.5547H229.271L233.276 24.297L237.28 15.5547H239.012L231.756 31.165H230.013Z"
          fill={fill}
        />
      </svg>
    );
  },
);

UniversityLogoLockup.displayName = 'UniversityLogoLockup';

UniversityLogoLockup.propTypes = {
  height: PropTypes.number,
  color: PropTypes.oneOf(Object.values(SupportedColors)),
};

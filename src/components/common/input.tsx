import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { cx } from '../../helpers';

const Input = forwardRef<
  HTMLInputElement,
  React.JSX.IntrinsicElements['input'] & {
    hasError?: boolean;
    Icon?: React.ReactNode;
    variant?: 'outlined' | 'filled';
  }
>(function (
  { className, hasError, Icon, variant = 'outlined', ...props },
  ref
) {
  const variation =
    variant === 'outlined' ? 'border-gray-300 border' : 'bg-blueGray-100';
  const errorStyle = hasError
    ? 'ring-red-500 ring-inset border-transparent outline-none ring-2'
    : '';
  return (
    <div className='relative h-11'>
      {Icon && (
        <div className='absolute h-4 flex items-center left-3 top-0 bottom-0 m-auto text-blueGray-400'>
          {Icon}
        </div>
      )}

      <input
        {...props}
        ref={ref}
        className={cx(
          Icon ? 'pl-11' : '',
          errorStyle,
          variation,
          'h-11 w-full rounded-md px-3 outline-none',
          'focus:ring-blue-600 focus:ring-inset focus:border-transparent focus:outline-none focus:ring-2',
          'transition-all duration-150 ease-in',
          className
        )}
      />
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
  Icon: PropTypes.node,
  variant: PropTypes.oneOf(['outlined', 'filled']),
};

export default Input;

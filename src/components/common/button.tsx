import PropTypes from 'prop-types';
import React from 'react';
import { cx } from '../../helpers';

function Button({
  children,
  className,
  ...props
}: React.JSX.IntrinsicElements['button']) {
  return (
    <button
      {...props}
      className={cx(
        className,
        'p-4 text-base leading-[100%] bg-[#2FA7EA] rounded-lg text-white font-bold'
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;

import { h } from 'preact';

import './button.scss';

export default function Button(props) {
  const { onClick, children } = props;
  return (
    <div onClick={onClick} className="button">
      {children}
    </div>
  )
}

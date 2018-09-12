import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (data) {
  return fetch('https://api.kdp0.com/form/contact', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => r);
}

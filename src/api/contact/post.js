import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (data) {
  return fetch('/api/form/contact', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => r);
}

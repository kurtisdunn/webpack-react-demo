import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (data) {
  return fetch('https://api.github.com/users/kurtisdunn/gists?per_page=3');
}

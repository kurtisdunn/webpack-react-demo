import fetch from '../../utils/fetch';

export default function (data) {
  return fetch('https://api.github.com/users/kurtisdunn/repos?sort=created&per_page=3');
}

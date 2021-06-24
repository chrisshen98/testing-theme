import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  console.log('hello world from api initializer!');

  api.onPageChange(() => {
    document.getElementById('changeGreen').onclick = function () {
      document.getElementById('output').style.color = '#88b98f';
      document.getElementById('output').style.background = 'white';
    };

    document.getElementById('changeWhite').onclick = function () {
      document.getElementById('output').style.color = 'white';
      document.getElementById('output').style.background = '#88b98f';
    };
  });
});

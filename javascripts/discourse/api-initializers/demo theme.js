import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  console.log('hello world from api initializer!');

  api.onPageChange(() => {
    document.getElementById('changeGreen').onclick = function () {
      document.getElementById('output').style.color = 'green';
    };

    document.getElementById('changeRed').onclick = function () {
      document.getElementById('output').style.color = 'red';
    };
  });
});

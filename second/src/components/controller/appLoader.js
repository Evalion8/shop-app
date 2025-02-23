import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/mocks/', {
      apiKey: '2e3ec842489c4b0183f28943e32e8263',
    });
  }
}

export default AppLoader;

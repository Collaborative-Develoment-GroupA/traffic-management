
import Navbar from './Navbar';
import '../styles/css/home.css';
import LineGraph from './LineGraph';

export const Home = () => {
//   const [latestNews, setLatestNews] = useState(null);

//   useEffect(() => {
//     const fetchLatestNews = async () => {
//       const response = await fetch('');
//       const data = await response.json();
//       setLatestNews(data);
//     };

//     fetchLatestNews();
//   }, []);

//   const handleLatestNewsClick = async () => {
//     const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-05-06&sortBy=popularity&apiKey=8d2da81ad6e9484baba2a72febd30f54');
//     const data = await response.json();
//     setLatestNews(data);
//   };

  return (
    <>
      <Navbar />
      <div className='home-container'></div>
      <div className='homebody'>
        <div className='stats'>
          <div className='stat'>
            <h3>Total Officers</h3>
            <p>532</p>
          </div>
          <div className='stat'>
            <h3>Total Violations</h3>
            <p>234</p>
          </div>
          <div className='stat'>
            <h3>Total Accidents</h3>
            <p>12</p>
          </div>
          <div className='dashboard'>
            <LineGraph />
          </div>
        </div>

        <div className='news-container'>
          <div className='paragraph'>
            <p>News and Notices</p>
          </div>
          <div className='notice'>
            <select id='type' name='type'>
              <option value='a'>Latest News</option>
            </select>
            <select id='type' name='type'>
              <option value='b'>Officers updated post and positions</option>
            </select>
            <select>
              <option value='c'>Accidents Details</option>
            </select>
            <select>
              <option value='d'>New post vacancy announcement</option>
            </select>
            <select>
              <option value='e'>Ticket violations rules</option>
            </select>
          </div>
          {/* {latestNews && (
            <div className='latest-news'>
              <h3>{latestNews.title}</h3>
              <p>{latestNews.description}</p>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

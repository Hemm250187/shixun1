import dva from 'dva';
// 引入全局样式
import styles from './index.scss';
// 引入antd样式
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({})
// 3. Model

app.model(require('./models/login').default);
app.model(require('./models/addText').default)
// 4. Router

app.router(require('./router').default);

// 5. Start
app.start('#root');
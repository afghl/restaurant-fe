import 'babel-polyfill'
import './sass/main.scss'
import moment from 'moment'
import { test } from './components/test_module'

moment.locale('zh-cn')

console.log(test);
test(console.log, 'helloword2')
console.log('helloword');

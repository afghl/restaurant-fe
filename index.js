import 'babel-polyfill'
import './sass/main.scss'
import moment from 'moment'
// import * from './components/api'
import $ from 'jquery'

moment.locale('zh-cn')

$(() => {
  console.log('helloworld');
})

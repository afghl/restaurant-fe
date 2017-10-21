import 'babel-polyfill'
import './sass/main.scss'
import moment from 'moment'
import * as apis from './api/dinning'
import $ from 'jquery'

moment.locale('zh-cn')

$(() => {
  console.log('helloworld');
  console.log(apis.getDinnings());
})

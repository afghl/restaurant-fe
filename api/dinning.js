import $ from 'jquery'

export const getDinnings = (cb) => {
  $.get('/api/dinning', {

  }, (data) => {
    console.log('get finish');
    console.log(data);
  })
}

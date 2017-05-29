 console.log('this file is loaded...')

$('.checkboxdone').on('click', function(e) {
  e.preventDefault();
  console.log('clicked')
  const $thisElement = $(this)
  const url = $thisElement.attr("href")
  const method = 'DELETE'
  $.ajax({ url, method })
    .done( response => {
      console.log(response)
      $thisElement.parent().remove()
    })
})


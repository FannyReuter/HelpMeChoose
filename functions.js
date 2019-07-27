$(function() {
  $('.ResultPage').hide()

  var add_Option = function() {
    $('.inputs').append('<input placeholder="Alternativ..."></input>')
  }
  $('.AddOption').click(add_Option)

  var submit = function() {
    var options = []
    $('.InputSection').hide()
    $('.ChooseText').hide()
    $('.submit').hide()
    $('.ResultSection').css('display', 'flex')
    $('.ResultPage').css('display', 'block')
    $('input').each(function() {
      options.push($(this).val())
    })
    var winner = options[Math.floor(Math.random() * options.length)]
    $('.ResultSection').text(winner)
  }
  $('.submit').click(submit)

  var goBack = function() {
    $('.InputSection').show()
    $('.ChooseText').show()
    $('.submit').show()
    $('.ResultPage').hide()
    $('.inputs').empty()
    add_Option()
  }

  $('.back').click(goBack)
})

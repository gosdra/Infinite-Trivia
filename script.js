
$( document ).ready(function() {
$.ajax({
  url: 'https://opentdb.com/api.php?amount=1&type=boolean',
  method: 'GET',
  dataType: 'JSON',
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  data: {
    amount: 1,
    type: 'boolean'
  },
  success: results
});
});

function results(data) {
    var ul = $('<ul>').appendTo('#one');
      $(data.results).each(function(index, value){
        ul.append(innerHTML = value.question);
        correctAnswer = value.correct_answer;
      });
}

correct = 0
wrong = 0

$('button[type="button"]').click(function() {
  $('button[type="button"]').attr('disabled', true);
  if( $(this).text() == correctAnswer ) {
    correct++
    $(this).removeClass("btn-secondary").addClass("green").stop().delay(1200).queue(function() {
      $('#one').empty();
      $(this).removeClass("green").addClass("btn-secondary");
      $.ajax({
        url: 'https://opentdb.com/api.php?amount=1&type=boolean',
        method: 'GET',
        success: results
      });
      $('button[type="button"]').attr('disabled', false);
    });
    $('#correct').text('Got`em! ' + correct);

  } else {
    wrong++
    $(this).removeClass("btn-secondary").addClass("red").stop().delay(1200).queue(function() {
      $('#one').empty();
      $(this).removeClass("red").addClass("btn-secondary");
      $.ajax({
        url: 'https://opentdb.com/api.php?amount=1&type=boolean',
        method: 'GET',
        success: results
      });
      $('button[type="button"]').attr("disabled", false);
    });
    $('#wrong').text('Nope! ' + wrong);
  }
});

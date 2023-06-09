$(document).ready(function() {
  const container = $('#container');
  
  const newDiv = $('<div>').text('Contenido del nuevo div').addClass('custom-div');
  
  container.append(newDiv);
});
console.log('hi')

// functional submit/input field

// function todoList() {
// 	var item = $('#toInput').val();
// 	var text = document.createTextNode(item)
// 	var newItem = document.createElement('li')
// 	newItem.appendChild(text)
// 	document.getElementById('todoList').appendChild(newItem)
// }

// -------------------

// get text from input

// var item = $('#toInput').val();

$('#button').click(function() {
	item = $('#toInput').val();
	addNewItem(item);
});

function addNewItem(item){
	$('#todoList').append('<li>' + item + '</li>');
};

// adding delete button functionality

$('#clear').click(function() {
	$('#todoList').remove();
});

// $('li').click(function() {
// 	$('li').remove();
// });


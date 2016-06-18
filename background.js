/*
* @Author: prabhakar
* @Date:   2016-06-18 15:24:57
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-06-19 02:55:00
*/

// body_div = $('body');
// body_div.hide()

new_button_html = '<span class="btn btn-sm" id="select_lang_btn"><span class="dropdown-caret"></span> Select language</span>';

github_navbar_div = $('.tabnav');
github_navbar_div.find('.right').append(new_button_html);

selected_language = 'python';


function show_languages(language, mode){
	$('.repo-list-item').each(function(){
		language_text = $(this).find("span[itemprop='programmingLanguage']").text();
		language_text = language_text.trim().toLowerCase();
		if(language_text != selected_language){
			if(mode)
				$(this).fadeOut(500);
			else
				$(this).fadeIn(800);
		}
	});
}

select_btn = $('#select_lang_btn');
first_click = true;
select_btn.on('click', function(){
	if(first_click == true){
		show_languages(selected_language, true);
		first_click = false;
	} else {
		show_languages(selected_language, false);
		first_click = true;
	}

});


// $('.js-repo-filter').html('');


// $.get(chrome.extension.getURL('/something.html'), function(data) {
// 	// console.log('asdaksdhaskdj');
// 	// $(data).appendTo('.js-repo-filter');
// 	// $('.js-repo-filter').appendTo('body');
// });
// $('.js-repo-filter').load(chrome.extension.getURL("something.html"));


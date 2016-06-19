/*
* @Author: prabhakar
* @Date:   2016-06-18 15:24:57
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-06-20 02:44:26
*/

select_language_tag_html = '<select id="all_languages" class="btn"><option value="" disabled selected>Select Language</option><option value="all"><strong>All Languages</strong></option></select>';
github_navbar_div = $('.filter-bar');


function show_languages(language, mode){
	if(mode){
		show_all()
	} else {
		hide_all();
		$('.repo-list-item').each(function(){
			language_text = $(this).find("span[itemprop='programmingLanguage']").text();
			language_text = language_text.trim().toLowerCase();
			if(language_text == language){
				$(this).fadeIn(100);
			}
		});
	}
}


function show_all(){
	$('.repo-list-item').each(function(){
		$(this).fadeIn(100);
	});
}

function hide_all(){
	$('.repo-list-item').each(function(){
		$(this).fadeOut(100);
	});
}


github_navbar_div.append(select_language_tag_html);
language_select_tag = github_navbar_div.find('#all_languages');

user_repo_languages_obj = {};
$('.repo-list-item').each(function(){
	language_text = $(this).find("span[itemprop='programmingLanguage']").text();
	language_text = language_text.trim();

	if(language_text != ''){
		if(user_repo_languages_obj.hasOwnProperty(language_text)){
			user_repo_languages_obj[language_text] += 1;
		} else {
			user_repo_languages_obj[language_text] = 1;
		}
	}
});

user_repo_languages = [];
for(var language in user_repo_languages_obj){
	new_obj = {
		'lang': language,
		'num': user_repo_languages_obj[language]
	}
	user_repo_languages.push(new_obj);
}

user_repo_languages.sort(function(a, b) {
    return b.num - a.num;
});

for(language in user_repo_languages){
	language_str = user_repo_languages[language].lang;
	language_count = user_repo_languages[language].num;
	html_to_injected = "<option>" + language_str + " (" + language_count + ")</option>";
	language_select_tag.append(html_to_injected);
}

language_select_tag.change(function(){
	selected_language = $(this).val().toLowerCase();
	selected_language_array = selected_language.split(' ');
	selected_language_array.pop();
	selected_language = selected_language_array.join(' ');

	if(selected_language == ''){
		show_languages(selected_language, true);
	} else {
		show_languages(selected_language, false);
	}
});

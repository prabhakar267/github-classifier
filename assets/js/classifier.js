/*
* @Author: prabhakar
* @Date:   2016-06-18 15:24:57
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-06-21 01:38:28
*/

function show_languages(language, mode, github_filter){
	if(mode){
		show_all()
	} else {
		github_filter = github_filter.toLowerCase();
		console.log(github_filter)
		hide_all();
		
		if(github_filter != 'all'){
			github_filter = github_filter.slice(0, -1);
		}

		console.log(github_filter);
		$('.repo-list-item').each(function(){
			language_text = $(this).find("span[itemprop='programmingLanguage']").text();
			language_text = language_text.trim().toLowerCase();

			// x = $(this);
			// console.log(x);
			// console.log(github_filter);
			if(github_filter == 'all'){
				github_flag = true;	
			} else {
				github_flag = $(this).hasClass(github_filter);
			}
			

			if(language_text == language && github_flag){
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


function update_repo_info(){
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
}

function classify_repo(github_filter=All){
	selected_language = $('body').find('#all_languages').val().toLowerCase();
	selected_language_array = selected_language.split(' ');
	selected_language_array.pop();
	selected_language = selected_language_array.join(' ');
	// console.log(selected_language);
	if(selected_language == ''){
		show_languages(selected_language, true, github_filter);
	} else {
		console.log(selected_language);
		console.log(github_filter);
		show_languages(selected_language, false, github_filter);
	}
}


select_language_tag_html = '<select id="all_languages" class="btn"><option value="" disabled selected>Select Language</option><option value="all"><strong>All Languages</strong></option></select>';
github_navbar_div = $('.filter-bar');
github_navbar_div.append(select_language_tag_html);
language_select_tag = github_navbar_div.find('#all_languages');

update_repo_info();

language_select_tag.change(function(){
	github_filter = $('body').find('.filter-selected').text();
	classify_repo(github_filter);
});

$('.js-repo-filter-tab').on('click', function(){
	github_filter = $(this).text();
	console.log(github_filter);
	classify_repo(github_filter);
});


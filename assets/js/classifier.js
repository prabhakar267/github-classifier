/*
* @Author: prabhakar
* @Date:   2016-06-18 15:24:57
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-06-27 01:08:17
*/

var user_repo_languages = [];

var select_language_tag_html = '<select id="all_languages" class="btn"></select>',
	no_repo_html = '<div class="repo-list-item" id="no_repo_item" hidden><strong>Oh! Snap</strong><br>No repositories for these filters.</div>';

/**
 * Hides the repository divs according to the selected 'langauge' and 'github_filter'
 * @param  string	language 		language selected in the tab
 * @param  string	github_filter 	Identifies the selected option from all, forks, sources, mirrors
 */
function show_languages(language, github_filter){
	github_filter = github_filter.toLowerCase();
	hide_all();
	
	if(github_filter != 'all'){
		github_filter = github_filter.slice(0, -1);
	}

	var no_repo_flag = true;
	$('.repo-list-item').each(function(){
		language_text = $(this).find("span[itemprop='programmingLanguage']").text();
		language_text = language_text.trim().toLowerCase();

		if(github_filter == 'all'){
			github_flag = true;	
		} else {
			github_flag = $(this).hasClass(github_filter);
		}
		
		if((language_text == language || language == '') && github_flag){
			$(this).fadeIn(100);
			no_repo_flag = false;
		}
	});

	if(no_repo_flag)
		$('body').find('#no_repo_item').fadeIn();
	else
		$('body').find('#no_repo_item').fadeOut();
}

/**
 * Hides all the repository divs
 */
function hide_all(){
	$('.repo-list-item').each(function(){
		$(this).fadeOut(100);
	});
}

/**
 * Increase the count of the number of repositories or add language to respective language object passed
 * @param 	object 	obj 		language object having name of languages found so far and number of repositories
 * @param 	string 	language
 * @return 	object 				updated language object
 */
function add_language_count(obj, language){
	if(obj.hasOwnProperty(language)){
		obj[language] += 1;
	} else {
		obj[language] = 1;
	}
	return obj;
}

/**
 * Function to initially append and then update options having language name and count to the select tag 
 * @param 	string 	mode 				Identifies the mode selected from all, forks, sources, mirrors
 * @param 	string 	language_selected 	Identifies the language selected previously in the select tag
 */
function update_repo_stats(mode, language_selected=''){
	user_repo_languages.sort(function(a, b) {
		return b[mode] - a[mode];
	});

	select_language_tag.html('');
	
	if(language_selected == '')
		static_options_html = '<option value="all" disabled>Select Language</option><option value="all" selected><strong>All Languages</strong></option>';
	else
		static_options_html = '<option value="all" disabled selected>Select Language</option><option value="all"><strong>All Languages</strong></option>';

	select_language_tag.append(static_options_html);

	for(language in user_repo_languages){
		lang_obj = user_repo_languages[language];

		language_str = lang_obj.lang;
		language_count = lang_obj[mode];
		
		if(language_selected == language_str.toLowerCase())
			html_to_injected = "<option selected>" + language_str + " (" + language_count + ")</option>";
		else
			html_to_injected = "<option>" + language_str + " (" + language_count + ")</option>";

		select_language_tag.append(html_to_injected);
	}
}

/**
 * Gets the language selected by the user in select tag
 * @return 		string
 */
function get_selected_language(){
	var language = $('body').find('#all_languages').val();
	
	if(language == null)
		return '';

	language_array = language.toLowerCase().split(' ');
	language_array.pop();
	language = language_array.join(' ');

	return language;
}

/**
 * Disables the repositories parent div and calls 'show_languages' function
 * @param 	string 	github_filter 
 */
function classify_repo(github_filter=All){
	$('.repo-list').addClass('disabled_div');
	setTimeout(function() {
		selected_language = get_selected_language();
		show_languages(selected_language, github_filter);
		$('.repo-list').removeClass('disabled_div');
	}, 200);
}

/**
 * Main function
 * Called on the first page load, injects the select tag HTML, and counts the number of languages
 * and their respective sources, forks and mirrors
 */
function classifier(){
	var github_navbar_div = $('.filter-bar');

	github_navbar_div.append(select_language_tag_html);
	$('.repo-list').append(no_repo_html);

	select_language_tag = github_navbar_div.find('#all_languages');

	var user_repo_languages_obj = {};
	var user_fork_repo_languages_obj = {};
	var user_source_repo_languages_obj = {};
	var user_mirror_repo_languages_obj = {};

	$('.repo-list-item').each(function(){
		if($(this).hasClass('fork')){
			obj = user_fork_repo_languages_obj;
		} else if($(this).hasClass('source')){
			obj = user_source_repo_languages_obj;
		} else {
			obj = user_mirror_repo_languages_obj;
		}

		var language_text = $(this).find("span[itemprop='programmingLanguage']").text();
		language_text = language_text.trim();

		if(language_text != ''){
			obj = add_language_count(obj, language_text);
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
			'lang': 	language,
			'all': 		parseInt(user_repo_languages_obj[language]) || 0,
			'forks': 	parseInt(user_fork_repo_languages_obj[language])  || 0,
			'sources': 	parseInt(user_source_repo_languages_obj[language]) || 0,
			'mirrors': 	parseInt(user_mirror_repo_languages_obj[language]) || 0,
		}
		user_repo_languages.push(new_obj);
	}

	update_repo_stats('all', null);

	select_language_tag.change(function(){
		github_filter = $('body').find('.filter-selected').text();
		classify_repo(github_filter);
	});

	$('.js-repo-filter-tab').on('click', function(){
		github_filter = $(this).text();
		update_repo_stats(github_filter.toLowerCase(), get_selected_language());
		classify_repo(github_filter);
	});
}

$(document).ready(function(){
	html_to_check = $('.tabnav').find('.right').html();
	if(html_to_check.indexOf("Edit profile") < 0){
		// check if user comes from some other page or not
		$('.tabnav-tab').on('click', function(){
			var tab_clicked = $(this);
			setTimeout(function() {
				var select_tab = tab_clicked.attr('href');
				select_tab = select_tab.substr(select_tab.length - 12); ;
				if(select_tab.toLowerCase() == 'repositories'){
					classifier();
				}
			}, 1000);
		});


		var select_tab = $('.tabnav-tabs').find('.selected').attr('href');
		select_tab = select_tab.substr(select_tab.length - 12); ;
		if(select_tab.toLowerCase() == 'repositories'){
			classifier();
		}
	}
});

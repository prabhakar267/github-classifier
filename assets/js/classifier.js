/*
* @Author: prabhakar
* @Date:   2016-06-18 15:24:57
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-06-22 21:59:23
*/

var user_repo_languages = [];

var select_language_tag_html = '<select id="all_languages" class="btn"></select>',
	no_repo_html = '<div class="repo-list-item" id="no_repo_item" hidden><strong>Oh! Snap</strong><br>No repositories for these filters.</div>';

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

function hide_all(){
	$('.repo-list-item').each(function(){
		$(this).fadeOut(100);
	});
}

function add_language_count(obj, language){
	if(obj.hasOwnProperty(language)){
		obj[language] += 1;
	} else {
		obj[language] = 1;
	}
	return obj;
}

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

function get_selected_language(){
	var language = $('body').find('#all_languages').val();
	
	if(language == null)
		return '';

	language_array = language.toLowerCase().split(' ');
	language_array.pop();
	language = language_array.join(' ');

	return language;
}

function classify_repo(github_filter=All){
	$('.repo-list').addClass('disabled_div');
	setTimeout(function() {
		selected_language = get_selected_language();
		show_languages(selected_language, github_filter);
		$('.repo-list').removeClass('disabled_div');
	}, 200);
}

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

// check if user comes from some other page or not
$('.tabnav-tab').on('click', function(){
	var select_tab = $(this).attr('href');

	select_tab = select_tab.substr(select_tab.length - 12); ;
	if(select_tab.toLowerCase() == 'repositories'){
		classifier();
	}
});

var select_tab = $('.tabnav-tabs').find('.selected').attr('href');
select_tab = select_tab.substr(select_tab.length - 12); ;
if(select_tab.toLowerCase() == 'repositories'){
	classifier();
}


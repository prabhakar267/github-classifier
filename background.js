/*
* @Author: prabhakar
* @Date:   2016-06-18 15:24:57
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-06-20 01:55:54
*/

// SUPPORTED_LANGUAGES = ['ABAP', 'AGS Script', 'AMPL', 'ANTLR', 'API Blueprint', 'APL', 'ASP', 'ATS', 'ActionScript', 'Ada', 'Agda', 'Alloy', 'Alpine Abuild', 'Ant Build System', 'ApacheConf', 'Apex', 'AppleScript', 'Arc', 'Arduino', 'AsciiDoc', 'AspectJ', 'Assembly', 'Augeas', 'AutoHotkey', 'AutoIt', 'Awk', 'Batchfile', 'Befunge', 'Bison', 'BitBake', 'BlitzBasic', 'BlitzMax', 'Bluespec', 'Boo', 'Brainfuck', 'Brightscript', 'Bro', 'C', 'C#', 'C++', 'C-ObjDump', 'C2hs Haskell', 'CLIPS', 'CMake', 'COBOL', 'COLLADA', 'CSS', 'CSV', "Cap'n Proto", 'CartoCSS', 'Ceylon', 'Chapel', 'Charity', 'ChucK', 'Cirru', 'Clarion', 'Clean', 'Click', 'Clojure', 'CoffeeScript', 'ColdFusion', 'ColdFusion CFC', 'Common Lisp', 'Component Pascal', 'Cool', 'Coq', 'Cpp-ObjDump', 'Creole', 'Crystal', 'Csound', 'Csound Document', 'Csound Score', 'Cucumber', 'Cuda', 'Cycript', 'Cython', 'D', 'D-ObjDump', 'DIGITAL Command Language', 'DM', 'DNS Zone', 'DTrace', 'Darcs Patch', 'Dart', 'Diff', 'Dockerfile', 'Dogescript', 'Dylan', 'E', 'ECL', 'ECLiPSe', 'EJS', 'Eagle', 'Ecere Projects', 'Eiffel', 'Elixir', 'Elm', 'Emacs Lisp', 'EmberScript', 'Erlang', 'F#', 'FLUX', 'FORTRAN', 'Factor', 'Fancy', 'Fantom', 'Filterscript', 'Formatted', 'Forth', 'FreeMarker', 'Frege', 'G-code', 'GAMS', 'GAP', 'GAS', 'GDScript', 'GLSL', 'Game Maker Language', 'Genshi', 'Gentoo Ebuild', 'Gentoo Eclass', 'Gettext Catalog', 'Glyph', 'Gnuplot', 'Go', 'Golo', 'Gosu', 'Grace', 'Gradle', 'Grammatical Framework', 'Graph Modeling Language', 'GraphQL', 'Graphviz (DOT)', 'Groff', 'Groovy', 'Groovy Server Pages', 'HCL', 'HLSL', 'HTML', 'HTML+Django', 'HTML+ECR', 'HTML+EEX', 'HTML+ERB', 'HTML+PHP', 'HTTP', 'Hack', 'Haml', 'Handlebars', 'Harbour', 'Haskell', 'Haxe', 'Hy', 'HyPhy', 'IDL', 'IGOR Pro', 'INI', 'IRC log', 'Idris', 'Inform 7', 'Inno Setup', 'Io', 'Ioke', 'Isabelle', 'Isabelle ROOT', 'J', 'JFlex', 'JSON', 'JSON5', 'JSONLD', 'JSONiq', 'JSX', 'Jade', 'Jasmin', 'Java', 'Java Server Pages', 'JavaScript', 'Julia', 'Jupyter Notebook', 'KRL', 'KiCad', 'Kit', 'Kotlin', 'LFE', 'LLVM', 'LOLCODE', 'LSL', 'LabVIEW', 'Lasso', 'Latte', 'Lean', 'Less', 'Lex', 'LilyPond', 'Limbo', 'Linker Script', 'Linux Kernel Module', 'Liquid', 'Literate Agda', 'Literate CoffeeScript', 'Literate Haskell', 'LiveScript', 'Logos', 'Logtalk', 'LookML', 'LoomScript', 'Lua', 'M', 'M4', 'M4Sugar', 'MAXScript', 'MTML', 'MUF', 'Makefile', 'Mako', 'Markdown', 'Mask', 'Mathematica', 'Matlab', 'Maven POM', 'Max', 'MediaWiki', 'Mercury', 'Metal', 'MiniD: # Legac', 'Mirah', 'Modelica', 'Modula-2', 'Module Management System', 'Monkey', 'Moocode', 'MoonScript', 'Myghty', 'NCL', 'NL', 'NSIS', 'Nemerle', 'NetLinx', 'NetLinx+ERB', 'NetLogo', 'NewLisp', 'Nginx', 'Nimrod', 'Ninja', 'Nit', 'Nix', 'Nu', 'NumPy', 'OCaml', 'ObjDump', 'Objective-C', 'Objective-C++', 'Objective-J', 'Omgrofl', 'Opa', 'Opal', 'OpenCL', 'OpenEdge ABL', 'OpenRC runscript', 'OpenSCAD', 'Org', 'Ox', 'Oxygene', 'Oz', 'PAWN', 'PHP', '#Oracl', '#Postgre', 'POV-Ray SDL', 'Pan', 'Papyrus', 'Parrot', 'Parrot Assembly', 'Parrot Internal Representation', 'Pascal', 'Perl', 'Perl6', 'Pickle', 'PicoLisp', 'PigLatin', 'Pike', 'Pod', 'PogoScript', 'Pony', 'PostScript', 'PowerShell', 'Processing', 'Prolog', 'Propeller Spin', 'Protocol Buffer', 'Public Key', 'Puppet', 'Pure Data', 'PureBasic', 'PureScript', 'Python', 'Python traceback', 'QML', 'QMake', 'R', 'RAML', 'RDoc', 'REALbasic', 'RHTML', 'RMarkdown', 'Racket', 'Ragel in Ruby Host', 'Raw token data', 'Rebol', 'Red', 'Redcode', "Ren'Py", 'RenderScript', 'RobotFramework', 'Rouge', 'Ruby', 'Rust', 'SAS', 'SCSS', 'SMT', 'SPARQL', 'SQF', 'SQL', '#IBM DB', 'STON', 'SVG', 'Sage', 'SaltStack', 'Sass', 'Scala', 'Scaml', 'Scheme', 'Scilab', 'Self', 'Shell', 'ShellSession', 'Shen', 'Slash', 'Slim', 'Smali', 'Smalltalk', 'Smarty', 'SourcePawn', 'Squirrel', 'Stan', 'Standard ML', 'Stata', 'Stylus', 'SuperCollider', 'Swift', 'SystemVerilog', 'TLA', 'TOML', 'TXL', 'Tcl', 'Tcsh', 'TeX', 'Tea', 'Terra', 'Text', 'Textile', 'Thrift', 'Turing', 'Turtle', 'Twig', 'TypeScript', 'Unified Parallel C', 'Unity3D Asset', 'Uno', 'UnrealScript', 'UrWeb', 'VCL', 'VHDL', 'Vala', 'Verilog', 'VimL', 'Visual Basic', 'Volt', 'Vue', 'Wavefront Material', 'Wavefront Object', 'Web Ontology Language', 'WebIDL', 'World of Warcraft Addon Data', 'X10', 'XC', 'XML', 'XPages', 'XProc', 'XQuery', 'XS', 'XSLT', 'Xojo', 'Xtend', 'YAML', 'YANG', 'Yacc', 'Zephir', 'Zimpl', 'desktop', 'eC', 'edn', 'fish', 'mupad', 'nesC', 'ooc', 'reStructuredText', 'wisp', 'xBase']


// new_button_html = '<span class="btn btn-sm" id="select_lang_btn">Select language</span>';
// select_language_tag_html = '<select class="btn btn-sm" id="all_languages"><option value="" disabled selected>Select Language</option><option value="all"><strong>All Languages</strong></option></select>';
select_language_tag_html = '<select id="all_languages" class="btn"><option value="" disabled selected>Select Language</option><option value="all"><strong>All Languages</strong></option></select>';


github_navbar_div = $('.filter-bar');
// github_navbar_div.append(new_button_html);

selected_language = 'python';
// select_language_tag = $('body').find('#all_languages');


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

// language_select_tag.selectize({
    // maxItems: 3
// });

// $('#all_languages').select2({
// 	placeholder: "Select a state"
// });
// 
// 
language_select_tag.change(function(){
	selected_language = $(this).val().toLowerCase();
	selected_language_array = selected_language.split(' ');
	selected_language_array.pop();
	selected_language = selected_language_array.join(' ');

	console.log(selected_language)
	if(selected_language == 'all'){
		show_languages(selected_language, true);
	} else {
		show_languages(selected_language, false);
	}
});

// select_btn = $('#select_lang_btn');
// first_click = true;
// select_btn.on('click', function(){
// 	if(first_click == true){
// 		language_select_tag.show();
// 		show_languages(selected_language, true);
// 		first_click = false;
// 	} else {
// 		language_select_tag.hide();
// 		show_languages(selected_language, false);
// 		first_click = true;
// 	}

// });




// $('.js-repo-filter').html('');


// $.get(chrome.extension.getURL('/something.html'), function(data) {
// // 	// console.log('asdaksdhaskdj');
// // 	// $(data).appendTo('.js-repo-filter');
// 	$(data).appendTo('body');
// 	console.log(this);
// });
// $('.js-repo-filter').load(chrome.extension.getURL("something.html"));


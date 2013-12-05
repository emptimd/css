# A sample Guardfile
# More info at https://github.com/guard/guard#readme

 #This will concatenate the javascript files specified in :files to js/all.js
#guard :concat, type: "js", files: %w(functions main), input_dir: "js", output: "js/all"

#guard 'uglify', :destination_file => "js/all.js" do
  #watch (%r{js/all.js})
#end

guard :lessc, :in_file => 'less/main.less', :out_file => 'css/main.css', :compress => true do
  watch(%r{^.*\.less$})
end

guard 'sass', :input => 'sass', :output => 'css'

guard :jammit, 
	:package_on_start => true, 
	:notifications => :false,
	:config_path => "assets.yml",
	:output_folder => "js" do
	watch(%r{^js/(main|functions)\.js})
	#watch(%r{js/functions.js})
	#watch(%r{^css/(main)\.css$})
end

guard 'livereload' do
  watch(%r{.+\.(css|html|js)$})
end
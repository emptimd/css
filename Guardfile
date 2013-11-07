# A sample Guardfile
# More info at https://github.com/guard/guard#readme

#guard 'livereload' do
  #watch(%r{.+\.(css|html|js)$})
#end

# This will concatenate the javascript files specified in :files to public/js/all.js
guard :concat, type: "js", files: %w(main functions), input_dir: "js", output: "js/all"

guard 'uglify', :destination_file => "js/all.js" do
  watch (%r{js/all.js})
end

guard :lessc, :in_file => 'less/main.less', :out_file => 'css/main.css', :compress => true do
  watch(%r{^.*\.less$})
end

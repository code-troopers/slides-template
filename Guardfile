require 'asciidoctor'
require 'erb'
require 'tilt'
require 'resolv-replace'

guard 'process', :name => 'Webrick', :command => 'ruby -run -e httpd . -p 9000' do
    watch('Gemfile.lock')
end

guard 'process', :name => 'DeckRemote', :command => 'NODE_ENV=production node /deck-remote/server.js 9010' do
    watch('Gemfile.lock')
end

guard 'livereload' do
  watch(%r{^.+\.(css|js|html)$})
  watch('slides.adoc') {|m|
    Asciidoctor.convert_file(m[0], :to_file => 'index.html', :safe => :safe, :template_dir => 'asciidoctor-backends/haml')
  }

end

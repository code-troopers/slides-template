require 'asciidoctor'
require 'erb'
require 'tilt'

guard 'shell' do
  Asciidoctor.convert_file('slides.adoc', :to_file => 'index.html', :safe => :safe, :template_dir => 'asciidoctor-backends/haml')
  watch(/^slides\.adoc$/) {|m|
    Asciidoctor.convert_file(m[0], :to_file => 'index.html', :safe => :safe, :template_dir => 'asciidoctor-backends/haml')
  }
end

guard 'livereload' do
  watch(%r{^.+\.(css|js|html)$})
end

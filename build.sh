#!/usr/bin/env bash
gem install asciidoctor tilt haml thread_safe
asciidoctor -T asciidoctor-backends/haml slides.adoc
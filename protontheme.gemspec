# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "protontheme"
  spec.version       = "0.1.0"
  spec.authors       = ["CaptainProton42"]
  spec.email         = ["john.wigg@gmx.net"]

  spec.summary       = "Jekyll theme taylored to my needs."
  spec.homepage      = "http://github.com/captainproton42"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
  spec.add_runtime_dependency "jekyll-protontags"
end

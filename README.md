# protontheme

![](assets/demo.gif)

**protontheme** is a *work-in-progress* [Jekyll](https://jekyllrb.com/) theme based on [Materialize](https://materializecss.com/) that I created to show off my projects and write blogs about them. With other themes, I had to use hacky solutions to include prominent video or html previews and demos of my projects at the top of my page. I felt that a theme tailored for that purpose may give me more advantages in the long run.

My plan is to continually expand this theme with the features I require. Eventually, I want to be able to use it to power a sort-of portfolio site.

**Disclaimer**: This theme is a work in progress which means that it is by no means complete and its look and/or configuration options may change at any time. It is *not* ready for serious use. I mainly host it here to make integration in my GitHub pages easier.

## Installation

### As a remote theme as a GitHub pages site

Add to your `_config.yml`:
```yaml
remote-theme:
    captainproton42/protontheme
```

*You can specifiy a branch, tag or commit by appending an `@` like `captainproton42/protontheme@v0.1.0`. See also the Jekyll Remote Theme [README](https://github.com/benbalter/jekyll-remote-theme#declaring-your-theme).*

### As a remote theme with a Ruby Jekyll site

Add to your `_config.yml`:

```yaml
plugins:
    -jekyll-remote-theme
remote-theme:
    captainproton42/protontheme
```

Add `jekyll-remote-theme` to your `Gemfile` in the plugin section:

```ruby
group :jekyll_plugins do
    gem "jekyll-remote-theme"
end
```

*You can specifiy a branch, tag or commit by appending an `@` like `captainproton42/protontheme@v0.1.0`. See also the Jekyll Remote Theme [README](https://github.com/benbalter/jekyll-remote-theme#declaring-your-theme).*

# Features

## Plugin-less markup

***Disclaimer**: Plugin-less markup functions only on Jekyll 4.0 and above. Since GitHub pages is still using an older version, you will have to add the neccessary site variables to your site's `_config.yml` yourself. For instructions, read [Plugin-less markup on GitHub pages](#plugin-less-markup-on-github-pages).*

The theme's `_config.yml` contains site variables which allow custom markup for pages without the need for plugins (which guarantess compatibility with providers that run Jekyll in safe mdoe e.g. GitHub pages).

### Infoboxes

Infoboxes are nice for including additional information on a topic. They are a different color and have a capitalized title. They can be added as follows:

```
{{ site.openInfoBox }}
{{ site.openInfoBoxTitle }}
Title of the info box
{{ site.closeInfoBoxTitle }}
Content of the info box
{{ site.closeInfoBox }}
```

## Layouts

The layout of a page for a Jekyll theme can be specified in a file's YAML [front matter](https://jekyllrb.com/docs/front-matter/). Currently, *protontheme* only supports a single layout, `page`.

### `page`

Layout that can be used for a blog and/or to show of a project. Allows to add a preview of your project at the top of the page and to choose a page theme.

## `page` Configuration Options

This is a list of all configuration options that can be added to the YAML [front matter](https://jekyllrb.com/docs/front-matter/) of a `page`. They will only affect how Jekyll renders this particular page.

### `title`

The title of the page. Will be rendered as a large the top of the page, before any content.

### `preview-video`

Optional path to a `.mp4` file that will be displayed at the top of the page, below the title but above the content. The video will be autoplayed and looped on mute. This is good for adding a short video preview of your project.

*The path should be relative to the page root (e.g. `assets/video.mp4` if `assets` is in the same directory as your `_config.yml`)*

### `preview-description`

Optional decription for your preview that will be visible below the preview video. Can contain markdown.

### `gh-repo`

Optional. `<user_name>/<repository_name>` of your project's repository. If specified, buttons that will link to your project's source and releases on GitHub will be displayed. (It is currently not possible to only display either one of these buttons.)

### `theme`

Specify a *page theme* for this page that will change the appearance of the page's background (powered by [PatternBolt](https://github.com/buseca/patternbolt)), buttons and code blocks.

Currently available page themes:

| page theme     | Description                                            |
|----------------|--------------------------------------------------------|
| `skybluelines` | thick lines in a 45-degree angle and light blue colors |
| `yellobeans`   | a candy-like background with orange and yellow colos   |

*I will probably add more page themes and elements affected by page themes.*

### `usemath`

If specified, [MathJax](https://www.mathjax.org/) will be supported on this page.

## Site configuration options

These options will affect *all pages* and can be added to your `_config.yml`.

### `page-theme`

A page theme to use for all pages (see documentation above). Will be overridden by page-specific settings.

## Plugin-less markup on GitHub pages

Copy the following lines and add them anywhere in your site's `_config.yml`:

```YAML
openInfoBox: "<div markdown='1' class='card-panel blue lighten-4'>"
closeInfoBox: "</div>"
openInfoBoxTitle: "<div class='blue-text text-bold text-darken-2' style='padding-bottom: 1em; font-weight: bold; text-transform: uppercase;'>"
closeInfoBoxTitle: "</div>"
```

Plugin-less markup should then work on your GitHub pages site.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Attributions
The theme is based on [Materialize](https://materializecss.com/) which is available under the terms of the [MIT License](https://opensource.org/licenses/MIT).

The background patterns are powered by [PatternBolt](https://github.com/buseca/patternbolt) which is available under the terms of the [MIT License](https://opensource.org/licenses/MIT).
